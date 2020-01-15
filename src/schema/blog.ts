import { gql } from 'apollo-server-express';

const blogSchema = gql`
  type BlogModel {
    id: Int!
    title: String
    author: String
    isPublished: Int!
  }
  type Blog {
    items: [BlogModel]
    total: Int!
  }
  input BlogDTO {
    title: String!
    author: String!
  }
  type Query {
    blogs: Blog
  }
  type Mutation {
    createBlog(data: BlogDTO): BlogModel
  }
`;

export default blogSchema;
