CREATE TABLE orders (
    id SERIAL PRIMARY KEY NOT NULL,
    userId INTEGER REFERENCES users(id),
    statusOfOrder VARCHAR(255) NOT NULL
);