const { buildSchema } = require("graphql");

const Schema = buildSchema(`
  type People {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type Query {
    getPeople: [People]
  }

  type Mutation {
    createPerson(firstName: String!, lastName: String!): People
    deletePerson(id: ID!): People
  }
`);

module.exports = schema;
