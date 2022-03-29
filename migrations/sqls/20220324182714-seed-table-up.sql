INSERT INTO users (firstName, lastName, email, password) 
VALUES ('UserA', 'LastnameA', 'userA@gmail.com', 'passwordA'),
('UserB', 'LastnameB', 'userB@gmail.com', 'passwordB'), 
('UserC', 'LastnameC', 'userC@gmail.com', 'passwordC');
INSERT INTO products (name, price) VALUES ('productA', 50), ('productB', 10.50), ('productC', 123.25), ('productD', 2500.99);
INSERT INTO orders (userId, statusOfOrder) VALUES (1, 'Active'), (2, 'Complete'), (1, 'Active'), (1, 'Complete');
INSERT INTO order_products (orderId, productId, quantity) VALUES (1, 2, 30), (1, 3, 2), (3, 1, 10), (4, 4, 1);