import express from 'express';
const router = express.Router();
// const todoController = require('../controllers/todoController');
import { todoController } from '../controllers/todoController';
// Routes
router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);
export default router;
