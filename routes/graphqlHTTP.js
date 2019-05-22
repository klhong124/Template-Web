var graphqlHTTP = require('express-graphql');
const schema = require('../graphql/schema');
const root = require('../graphql/resolver');

module.exports = graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
});
