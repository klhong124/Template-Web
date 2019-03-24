const { gql } = require('apollo-server');

const typeDefs = gql`
    schema {
    query: Query
    }
    type Query {
        users: [User]
        user(id:ID!): User
        text:String
    }
    type User {
        id: ID!
        name: String!
        icon: String
        trainingSet: [String!]
    }
`

module.exports = typeDefs;