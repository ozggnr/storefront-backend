CREATE TABLE products (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(6,2) NOT NULL
);