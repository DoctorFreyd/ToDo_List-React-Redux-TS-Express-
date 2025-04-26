import express from 'express';
import todoRoutes from './routes/todoRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use(express.json());
app.use('/api/todos', todoRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'URL NOT FOUND' });
});

// Global error handler
app.use(errorHandler);

export default app;
