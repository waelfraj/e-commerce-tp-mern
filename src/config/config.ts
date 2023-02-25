/* eslint-disable prettier/prettier */
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
export const MysqlConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3000,
  username: 'root',
  password: '',
  database: 'nest-tp',
};
