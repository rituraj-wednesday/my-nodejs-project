module.exports = {
    up: (queryInterface) => {
      const arr = [
        {
            id: 1,
            title: "Harry Potter and the Sorcerer's Stone",
            genre: "Fantasy",
            published_date: "1997-06-26",
            author_id: 1
        },
        {
            id: 2,
            title: "Harry Potter and the Chamber of Secrets",
            genre: "Fantasy",
            published_date: "1998-07-02",
            author_id: 1
        },
        {
            id: 3,
            title: "Harry Potter and the Prisoner of Azkaban",
            genre: "Fantasy",
            published_date: "1999-07-08",
            author_id: 1
        },
        {
            id: 4,
            title: "A Game of Thrones",
            genre: "Fantasy",
            published_date: "1996-08-06",
            author_id: 2
        },
        {
            id: 5,
            title: "A Clash of Kings",
            genre: "Fantasy",
            published_date: "1998-11-16",
            author_id: 2
        },
        {
            id: 6,
            title: "A Storm of Swords",
            genre: "Fantasy",
            published_date: "2000-08-08",
            author_id: 2
        },
        {
            id: 7,
            title: "The Hobbit",
            genre: "Fantasy",
            published_date: "1937-09-21",
            author_id: 3
        },
        {
            id: 8,
            title: "The Fellowship of the Ring",
            genre: "Fantasy",
            published_date: "1954-07-29",
            author_id: 3
        },
        {
            id: 9,
            title: "The Two Towers",
            genre: "Fantasy",
            published_date: "1954-11-11",
            author_id: 3
        },
        {
            id: 10,
            title: "Murder on the Orient Express",
            genre: "Mystery",
            published_date: "1934-01-01",
            author_id: 4
        },
        {
          id: 11,
          title: "The Murder of Roger Ackroyd",
          genre: "Mystery",
          published_date: "1926-06-01",
          author_id: 4
        },
        {
            id: 12,
            title: "And Then There Were None",
            genre: "Mystery",
            published_date: "1939-11-06",
            author_id: 4
        },
        {
            id: 13,
            title: "The Shining",
            genre: "Horror",
            published_date: "1977-01-28",
            author_id: 5
        },
        {
            id: 14,
            title: "It",
            genre: "Horror",
            published_date: "1986-09-15",
            author_id: 5
        },
        {
            id: 15,
            title: "Misery",
            genre: "Psychological Horror",
            published_date: "1987-06-08",
            author_id: 5
        }
      ];
      return queryInterface.bulkInsert('books', arr, {});
    },
    down: (queryInterface) => queryInterface.bulkDelete('books', null, {}),
  };
  