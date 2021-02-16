# Backend Coding Challenge

To acomplish this challenge I used:

- A backend developed with Node.js
- MongoDB to persist the data
- Mongoose for object modeling
- Joi to validate request data
- Jest to test the endpoints

# API Docs

The API docs are hosted here: <https://documenter.getpostman.com/view/3658900/TWDUoxNQ>

# Deployment

The API is deployed here: <https://kincarta.herokuapp.com/>

## Environment Variables

The project has 2 .env files: 1 for the dev env (.dev), and 1 for the testing env (.dev.testing).

If this project is deployed, it should use the system env variables to set NODE_ENV to production and DB_CONNECTION to the production MongoDB connection URL.

## Run the project (development)

npm install && npm run dev

## Execute the tests

npm install && npm test
