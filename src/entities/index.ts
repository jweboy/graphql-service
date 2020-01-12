import 'reflect-metadata';
import { createConnection, ConnectionOptions, Connection } from 'typeorm';
import { Blog } from './Blog';

const options: ConnectionOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'jl940630',
  database: 'jweboy',
  synchronize: true,
  logging: false,
  entities: [Blog],
};

async function connectDatabase(): Promise<Connection> {
  const connection = await createConnection(options);

  return connection;
}

export default connectDatabase;
