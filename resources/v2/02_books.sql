CREATE TABLE books (
    id              INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    title           VARCHAR(255) NOT NULL,
    genre            VARCHAR(100),
    published_date   DATE,
    created_at      DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, 
    author_id        INT,
    CONSTRAINT books_author_id_fk FOREIGN KEY (author_id) REFERENCES authors (id) ON UPDATE CASCADE
);