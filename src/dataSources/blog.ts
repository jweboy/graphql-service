import { Connection, Repository, DeepPartial } from 'typeorm';
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
    const [allBlogs, blogCount] = await this.repository.findAndCount();

    return {
      items: allBlogs,
      total: blogCount,
    };
  }

  async saveOne(body: DeepPartial<Blog>[]) {
    const blog = await this.repository.create(body);
    const result = await this.repository.save(blog);

    return result;
  }
}

export default BlogAPI;
