const resolvers = {
  Query: {
    users: () => {
      return [ {id: 1 ,name:"Alvin"}, {id: 2 ,name:"Kenny"}]
    },
    user: (_ , args) => {
      return { id: args.id ,name:"Kenny"};
    }
  }, //end of Query

  Mutation: {
    addUser: async (_ , args) => {
      return {id:3,name:args.name,icon:"ke77y",trainSet:args.trainSet};
    }
  }, //end of Mutation
};

module.exports = resolvers;
