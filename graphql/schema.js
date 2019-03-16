const { gql } = require('apollo-server');

const typeDefs = gql`
    schema {
    query: Query
    mutation: Mutation
    }
    type Query {
        users: [User]
        user(id:ID!): User
    }
    type User {
        id: ID!
        name: String!
        icon: String
        trainSet: [String!]!
    }
    type Mutation {
        addUser(name: String!, trainSet: [String!]!): User
    }
`

module.exports = typeDefs;