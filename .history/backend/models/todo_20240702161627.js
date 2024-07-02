// const db = require('../config/database');
import db from '../config/database.js';
export const getAllTodos = (callback) => {
  db.query('SELECT * FROM todos', callback);
};
export const getTodoById = (id, callback) => {
  db.query('SELECT * FROM todos WHERE id = ?', [id], callback);
};
export const createTodo = (newTodo, callback) => {
  db.query('INSERT INTO todos SET ?', newTodo, callback);
};
export const updateTodo = (id, updatedTodo, callback) => {
  db.query('UPDATE todos SET ? WHERE id = ?', [updatedTodo, id], callback);
};
export const deleteTodo = (id, callback) => {
  db.query('DELETE FROM todos WHERE id = ?', [id], callback);
};
