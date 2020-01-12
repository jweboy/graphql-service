import { Connection, getConnection } from 'typeorm';
import BlogAPI from './blog';

export default function dataSource() {
  const connection: Connection = getConnection();
  return {
    blogAPI: new BlogAPI(connection),
  };
}
