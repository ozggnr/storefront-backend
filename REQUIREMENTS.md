# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index (GET'/products')
- Show (GET'/products/:id')
- Create [token required] (POST'/products')

#### Users
- Index [token required] (GET'/users')
- Show [token required] (GET'/users/:id')
- Create N[token required] (POST'/users')
- Auth - endpoint(POST'/users/auth')

#### Orders
- Current Order by user (args: user id)[token required] (GET'/orders/users/:userId/active')

## Database Schema/Shape
#### Products
- id SERIAL PRIMARY KEY NOT NULL,
- name VARCHAR(255) NOT NULL,
- price DECIMAL(6,2) NOT NULL

#### Users
- id SERIAL PRIMARY KEY NOT NULL,
- firstName VARCHAR(255) NOT NULL,
- lastName VARCHAR(255) NOT NULL,
- email VARCHAR(255) NOT NULL,
- password VARCHAR(100) NOT NULL

#### Orders
- id SERIAL PRIMARY KEY NOT NULL,
- userId INTEGER REFERENCES users(id),
- statusOfOrder VARCHAR(255) NOT NULL --> It can be ('Active' or 'Complete')

#### Order_Products
- id SERIAL PRIMARY KEY NOT NULL,
- orderId INTEGER REFERENCES orders(id),
- productId INTEGER REFERENCES products(id),
- quantity INTEGER