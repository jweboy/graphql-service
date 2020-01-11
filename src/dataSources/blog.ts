import { getConnection, getConnectionManager } from 'typeorm';
import { SQLDataSource } from 'datasource-sql';
import { DataSource } from 'apollo-datasource';
import { Blog } from '../entities/Blog';

class BlogAPI extends DataSource {
  // constructor() {
  //   super();

  //   this.connection = getConnection();
  // }

  async getList() {
    console.log(this);
    const connection = getConnection();
    const blogRepository = connection.getRepository(Blog);

    const list = await blogRepository.find();
    console.table(list);
  }
}

export default BlogAPI;
