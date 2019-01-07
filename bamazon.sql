DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_id VARCHAR(8) NULL,
  product_name VARCHAR(40) NULL,
  department_name VARCHAR(15) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(4) NULL,
  PRIMARY KEY (id)
);
