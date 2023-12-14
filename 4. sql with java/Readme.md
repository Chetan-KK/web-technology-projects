## 1. Create a MySQL database named "ebookshop" and a table "books":

<code>

CREATE DATABASE ebookshop;

USE ebookshop;

CREATE TABLE books (
book_id INT PRIMARY KEY,
book_title VARCHAR(255),
book_author VARCHAR(255),
book_price DOUBLE,
quantity INT
);

INSERT INTO books VALUES
(1, 'Java Programming', 'John Doe', 29.99, 50),
(2, 'Web Development Basics', 'Jane Smith', 19.99, 30);
</code>

## 2. create normal servlet project then copy code from book servlet java file and paste it in main java file
