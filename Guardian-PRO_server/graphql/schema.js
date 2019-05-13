var { buildSchema } = require('graphql');

module.exports =  buildSchema(`
	schema {
		query: Query
		mutation: Mutation
	}

	type Query {
		users: [User]
		user(id: ID!): User
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
`);
