export default {
  Query: {
    async blogs(parent, args, context) {
      const { dataSources } = context;
      const resp = await dataSources.blogAPI.findAll();

      return resp;
    },
  },
  Mutation: {
    async createBlog(parent, args, context) {
      const { dataSources } = context;
      const { data } = args;
      const resp = await dataSources.blogAPI.saveOne(data);

      return resp;
    },
  },
};
