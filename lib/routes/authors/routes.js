import get from 'lodash/get';
import { notFound, badImplementation } from '@utils/responseInterceptors';
import { transformDbArrayResponseToRawResponse } from '@utils/transformerUtils';
import { findAllAuthor, findOneAuthor } from "../../daos/authorsDao";

export default [
  {
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      const { page, limit } = request.query;
      return findAllAuthor(page, limit)
        .then((authors) => {
          if (get(authors.allAuthors, 'length')) {
            const { totalCount } = authors;
            const allAuthors = transformDbArrayResponseToRawResponse(
              authors.allAuthors,
            ).map((author) => author);
            return h.response({
              results: allAuthors,
              totalCount,
            });
          }
          return notFound('No Authors found');
        })
        .catch((error) => badImplementation(error.message));
    },
    options: {
      description: 'get all authors',
      notes: 'GET authors API',
      tags: ['api', 'authors'],
      plugins: {
        pagination: {
          enabled: true,
        },
        query: {
          pagination: true,
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/{authorId}',
    handler: async (request) => {
      const { authorId } = request.params;
      return findOneAuthor(authorId)
        .then((author) => {
          if (!author) {
            return notFound(`No author was found for id ${authorId}`);
          }
          return author;
        })
        .catch((error) => badImplementation(error.message));
    },
    options: {
      description: 'get a authors by id',
      notes: 'GET author API by id',
      tags: ['api', 'authors', 'author'],
      plugins: {
        pagination: {
          enabled: false,
        },
        query: {
          pagination: false,
        },
      },
    },
  },
];