import app from './app';
import config from './config/config';
import sequelize from './db';

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the databse:', error);
    process.exit(1);
  }
};

startServer();
