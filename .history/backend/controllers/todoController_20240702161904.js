// const Todo = require('../models/todo');
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../models/todo.js';
export const getAllTodos = (req, res) => {
  getAllTodos((err, todos) => {
    if (err) throw err;
    res.json(todos);
  });
};
export const getTodoById = (req, res) => {
  getTodoById(req.params.id, (err, todo) => {
    if (err) throw err;
    res.json(todo);
  });
};
export const createTodo = (req, res) => {
  const newTodo = {
    title: req.body.title,
    completed: req.body.completed,
  };
  createTodo(newTodo, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Todo created successfully' });
  });
};
export const updateTodo = (req, res) => {
  const updatedTodo = {
    title: req.body.title,
    completed: req.body.completed,
  };
  updateTodo(req.params.id, updatedTodo, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Todo updated successfully' });
  });
};
export const deleteTodo = (req, res) => {
  deleteTodo(req.params.id, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Todo deleted successfully' });
  });
};
