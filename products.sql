USE bamazon_DB;

DELETE FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("NB01", "Notebook - ruled Red", "stationary", 1.99, 50),
("NB02", "Notebook - ruled Green", "stationary", 1.99, 50),
("NB03", "Notebook - ruled Blue", "stationary", 1.99, 30),
("NB11", "Notebook - graph Red", "stationary", 3.99, 20),
("NB12", "Notebook - graph Green", "stationary", 3.99, 20),
("CALC35", "RPN Scientific Calculator", "electronics", 59.99, 5),
("CALC10", "RPN Business Calculator", "electronics", 99.99, 5),
("CALC48", "RPN Graphing Calculator", "electronics", 159.99, 2),
("STAD03", "Mechanical Pencil .03mm", "writing", 6.99, 2),
("STAD05", "Mechanical Pencil .05mm", "writing", 6.99, 5),
("STAD07", "Mechanical Pencil .07mm", "writing", 6.99, 8),
("STAD09", "Mechanical Pencil .09mm", "writing", 6.99, 2),
("STAD13", "Mechanical Pencil 1.3mm", "writing", 6.99, 1),
("STAD20", "Mechanical Pencil 2.0mm", "writing", 10.99, 5);

