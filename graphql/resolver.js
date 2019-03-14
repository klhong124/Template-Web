const resolvers = {
  Query: {
    users: []
    user:(obj, args, context, info) => {
      return find(authors, { id: args.id });
    },
  }
};

module.exports = resolvers;
