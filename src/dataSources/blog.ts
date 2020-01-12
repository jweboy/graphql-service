import { Connection, Repository } from 'typeorm';
import { DataSource } from 'apollo-datasource';
import { Blog } from '../entities/Blog';

// TODO: DataSource 是否需要缓存优化

class BlogAPI extends DataSource {
  connection: Connection;

  repository: Repository<Blog>;

  constructor(connection: Connection) {
    super();

    this.connection = connection;
    this.repository = connection.getRepository(Blog);
  }

  async findAll() {
    const list = await this.repository.find();
    return list;
  }
}

export default BlogAPI;
