import { DataSourceOptions } from 'typeorm';
import '../utils/dotenv';
import path from 'path';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: String(process.env.DB_HOST),
  port: Number(process.env.DB_PORT),
  username: String(process.env.DB_USERNAME),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_NAME),
  entities: [path.join(__dirname, '../resources/**/**.entity{.ts}')],
  synchronize: Boolean(process.env.DB_SYNC),
  logging: Boolean(process.env.DB_LOGGING),
};
