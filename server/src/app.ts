import express from 'express';
import todoRoutes from './routes/todoRoutes';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';

const app = express();
// Connecting with Frontend
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
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
