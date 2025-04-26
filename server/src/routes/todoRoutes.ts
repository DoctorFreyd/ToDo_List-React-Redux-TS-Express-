import { Router } from 'express';
import { createTodo } from '../controllers/todoController';

const router = Router();

router.post('/', createTodo);

export default router;
