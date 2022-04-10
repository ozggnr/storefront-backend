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

## Data Shapes
#### Product
- id - INT
- name - VARCHAR(255)
- price - DECIMAL(6,2)

#### User
- id - INT
- firstName - VARCHAR(255
- lastName - VARCHAR(255)
- email - VARCHAR(255)
- password - VARCHAR(100)

#### Orders
- id - INT
- userId - INT
- statusOfOrder - VARCHAR(255) ('Active'/'Complete')

#### Order Products
- id - INT
- orderId - INT
- productId - INT
- quantity - INT