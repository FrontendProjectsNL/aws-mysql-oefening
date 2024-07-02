// const Todo = require('../models/todo');
import {
  getAll,
  getById,
  create,
  update,
  delete
} from '../models/todo.js';
export const getAllTodos = (req, res) => {
  getAll((err, todos) => {
    if (err) throw err;
    res.json(todos);
  });
};
export const getTodoById = (req, res) => {
  getById(req.params.id, (err, todo) => {
    if (err) throw err;
    res.json(todo);
  });
};
export const createTodo = (req, res) => {
  const newTodo = {
    title: req.body.title,
    completed: req.body.completed,
  };
  create(newTodo, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Todo created successfully' });
  });
};
export const updateTodo = (req, res) => {
  const updatedTodo = {
    title: req.body.title,
    completed: req.body.completed,
  };
  update(req.params.id, updatedTodo, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Todo updated successfully' });
  });
};
export const deleteTodo = (req, res) => {
  delete(req.params.id, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Todo deleted successfully' });
  });
};
