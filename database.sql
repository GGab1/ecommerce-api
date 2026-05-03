CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price FLOAT,
  stock INT
);