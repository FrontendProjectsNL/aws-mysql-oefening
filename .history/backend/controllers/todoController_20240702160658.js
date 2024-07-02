// const Todo = require('../models/todo');
import Todo from '../models/todo';
exports const getAllTodos = (req, res) => {
  Todo.getAllTodos((err, todos) => {
    if (err) throw err;
    res.json(todos);
  });
};
export const getTodoById = (req, res) => {
  Todo.getTodoById(req.params.id, (err, todo) => {
    if (err) throw err;
    res.json(todo);
  });
};
export const createTodo = (req, res) => {
  const newTodo = {
    title: req.body.title,
    completed: req.body.completed,
  };
  Todo.createTodo(newTodo, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Todo created successfully' });
  });
};
export const updateTodo = (req, res) => {
  const updatedTodo = {
    title: req.body.title,
    completed: req.body.completed,
  };
  Todo.updateTodo(req.params.id, updatedTodo, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Todo updated successfully' });
  });
};
export const deleteTodo = (req, res) => {
  Todo.deleteTodo(req.params.id, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Todo deleted successfully' });
  });
};
