CREATE TABLE orders (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id bigint REFERENCES users(id),
    status_of_order VARCHAR(255) NOT NULL
);