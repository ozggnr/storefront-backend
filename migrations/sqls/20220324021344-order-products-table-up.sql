CREATE TABLE order_products (
    id SERIAL PRIMARY KEY NOT NULL,
    orderId INTEGER REFERENCES orders(id),
    productId INTEGER REFERENCES products(id),
    quantity INTEGER
);