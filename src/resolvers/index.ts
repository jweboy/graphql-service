export default {
  Query: {
    async blogs(parent, args, context) {
      const { dataSources } = context;
      const resp = await dataSources.blogAPI.findAll();

      return resp;
    },
  },
};
