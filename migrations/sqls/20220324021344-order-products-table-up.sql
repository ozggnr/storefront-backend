CREATE TABLE order_products (
    id SERIAL PRIMARY KEY NOT NULL,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER
);