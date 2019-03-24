const resolvers = {
  Query: {
    users: [],
    user:(obj, args, context, info) => {
      return {"id":"args","name":"Kenny"};
    },
    text:{text:"hihi"}
  }
};

module.exports = resolvers;
