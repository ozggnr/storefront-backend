# Storefront Backend Project
## Setup

Install dependencies with `npm install`.

## Running Server
* Project is running on port: 3000
- You can just run the command to server and it will restart automatically when you make a change in your files
```sh
npm run watch
```

## Running Test Framework
* Before run tests ENV=test should be changed manually in .env file and you need to close the server to run test and after tests are done if you want to switch ENV=dev you need to create database manually by using db migrate up
```sh
npm run test
```
* This command also will drop tables and create test database since it's defined in script. You can check package.json for the script

## Database Setup
* Docker psql image is used for database. 
- Run docker-compose up in terminal
- Open docker shell and you can see open your database, if you run command 
```sh 
    psql -d <databaseName> -U <username> -W 
```
- You can create your tables and seed, by running command 
```sh 
    db-migrate up 
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

## ENVIRONMENT VARIABLES
POSTGRES_HOST='127.0.0.1'

POSTGRES_USER=ozggnr

POSTGRES_PASSWORD=magic_1234

POSTGRES_DB=storefront

POSTGRES_DB_TEST=storefront_test

BCRYPT_PASSWORD=secretmagic1234

SALT_ROUNDS=10

TOKEN_SECRET=verysecrettoki

ENV=dev
