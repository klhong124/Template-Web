const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema');
const dataSources = require('./graphql/resolver');

const server = new ApolloServer({typeDefs,dataSources});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });