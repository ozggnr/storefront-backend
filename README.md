# Storefront Backend Project
## Setup

Install dependencies with `npm install`.

## Running Server
* Project is running on port: 3000
```sh
npm run watch
```

## Running Test Framework
* Before run tests ENV=test should be changed manually in .env file and after tests are done if you want to switch ENV=dev you need to create database manually by using db migrate up
```sh
npm run test
```
## Building App
```sh
npm run build
```
## Technologies
Following libraries used for the application:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index - endpoint('/products')
- Show - endpoint('/products/:id')
- Create [token required] - endpoint('/products')

#### Users
- Index [token required] - endpoint('/users')
- Show [token required] - endpoint('/users/:id')
- Create [token required] - endpoint('/users')
- Auth - endpoint('/users/auth')

#### Orders
- Current Order by user (args: user id)[token required] - endpoint('/orders/users/:userId/active')

Note: Related and detailed information can be found in [REQUIREMENTS.md](https://github.com/udacity/nd0067-c2-creating-an-api-with-postgresql-and-express-project-starter/blob/master/REQUIREMENTS.md)