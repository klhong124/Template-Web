const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema');

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });