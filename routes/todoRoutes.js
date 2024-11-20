import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo, getTodo } from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;