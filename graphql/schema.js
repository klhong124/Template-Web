var { buildSchema } = require('graphql');

module.exports = buildSchema(`
	schema {
		query: Query
		mutation: Mutation
	}

	type Query {
		allUsers: [User]
		users(
			name: String
			username:String
			password:String
		    gender: String
		    email: String
		    phone: Int
		): [User]
		user(
			_id: ID
			name: String
			username:String
			password:String
		    gender: String
		    email: String
		    phone: Int
		): User
	}

	type User {
		_id: ID!
		name: String!
		username:String!
		password:String!
		gender: String
		email: String
		phone: Int
	}

	type Mutation {
		newUser(
			name: String!
			username:String!
			password:String!
			gender: String
			email: String
			phone: Int
			): User
	}
`);
