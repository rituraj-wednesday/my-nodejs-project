module.exports = {
    up: (queryInterface) => {
      const arr = [
        {
          id: 1,
          author_name: "J.K. Rowling",
          birth_date: "1965-07-31",
          nationality: "British"
        },
        {
            id: 2,
            author_name: "George R.R. Martin",
            birth_date: "1948-09-20",
            nationality: "American"
        },
        {
            id: 3,
            author_name: "J.R.R. Tolkien",
            birth_date: "1892-01-03",
            nationality: "British"
        },
        {
            id: 4,
            author_name: "Agatha Christie",
            birth_date: "1890-09-15",
            nationality: "British"
        },
        {
            id: 5,
            author_name: "Stephen King",
            birth_date: "1947-09-21",
            nationality: "American"
        }
    ];
      return queryInterface.bulkInsert('authors', arr, {});
    },
    down: (queryInterface) => queryInterface.bulkDelete('authors', null, {}),
  };
  