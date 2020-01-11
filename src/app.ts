import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import connectDatabase from './entities';
import dataSources from './dataSources';
import resolvers from './resolvers';
import BlogAPI from './dataSources/blog';

// https://www.apollographql.com/docs/apollo-server/v1/servers/express/

// const resolvers = {
//   Query: {
//     blogs: () => [
//       {
//         id: 1,
//         title: 'hello world',
//       },
//     ],
//   },
// };

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    blogAPI: new BlogAPI(),
  }),
  resolvers,
  tracing: true,
});
const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, async () => {
  try {
    await connectDatabase();
    console.log('👏 Database connection succeeded at http://localhost:3306');
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

    // Blog.getList();
  } catch (err) {
    throw err;
  }
});

process.on('unhandledRejection', (err) => {
  throw err;
});
