CREATE TABLE order_products (
    id SERIAL PRIMARY KEY NOT NULL,
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES products(id),
    quantity INTEGER
);