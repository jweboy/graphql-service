import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type BlogModel {
    id: Int!
    title: String
    author: String
    isPublished: Int!
  }
  input BlogDTO {
    title: String!
    author: String!
  }
  type Query {
    blogs: [BlogModel]
  }
  type Mutation {
    createBlog(data: BlogDTO): BlogModel
  }
`;

export default typeDefs;
