import { Sequelize } from 'sequelize';
import config from './config/config';

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: 'mysql',
    port: config.dbPort,
  },
);

export default sequelize;
