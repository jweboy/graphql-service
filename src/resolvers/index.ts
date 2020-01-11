const resolvers = {
  Query: {
    blogs(parent) {},
  },
};

export default {
  Query: {
    blogs(parent, args, context, info) {
      const { dataSources } = context;

      console.log(new dataSources.blogAPI.getList());
      return [];
      // return dataSources.blogAPI.getList();
    },
  },
};
