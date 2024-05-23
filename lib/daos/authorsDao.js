import { models } from '@models';

const attributes = [
  'id',
  'author_name',
  'birth_date',
  'nationality',
];

export const findOneAuthor = async (authorId) => models.authors.findOne({
  attributes,
  where: {
    id: authorId,
  },
  underscoredAll: false,
});

export const findAllAuthor = async (page, limit) => {
  const where = {};
  const totalCount = await models.authors.count({ where });
  const allAuthors = await models.authors.findAll({
    attributes,
    where,
    offset: (page - 1) * limit,
    limit,
  });
  return { allAuthors, totalCount };
};
