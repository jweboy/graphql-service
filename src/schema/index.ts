import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Blog {
    id: Int!
    title: String
    author: String
  }
  type Query {
    blogs: [Blog]
  }
`;

export default typeDefs;
