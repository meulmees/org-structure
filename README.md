# Org Structure Exercise

This repo contains a simple server that returns org structure data, the code lives under the `/server` directory.
There is also the skeleton of a client in `/client`, which was generated using `create-react-app`.

The objective of this exercise is to:

1. Create a front-end that displays the organizational structure in a coherent way.
1. For each employee in the organization show their avatar, name, email, title, number of reports
1. Enable filtering of employees by name and title. NOTE: we should still show the path to the employee which matches the search term even if their boss does not match. For example If "Bob" reported to "Fred" and I search "bo" I would expect to see both Fred and Bob. 
1. Enable the ability to add a report at any level of the structure.

## Running the server

To run the server run the following command:

```bash
cd server
yarn install
yarn start
```

This should start with a JSON API endpoint at `http://localhost:4000/api/organization`

## Running the client

To run the client, run the following command:

```bash
cd client
yarn install
yarn start
```

This should start a development server at `http://localhost:3000`
