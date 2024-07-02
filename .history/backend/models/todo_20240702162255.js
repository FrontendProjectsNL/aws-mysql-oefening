// const db = require('../config/database');
import db from '../config/database.js';
export const getAll = (callback) => {
  db.query('SELECT * FROM todos', callback);
};
export const getById = (id, callback) => {
  db.query('SELECT * FROM todos WHERE id = ?', [id], callback);
};
export const create = (newTodo, callback) => {
  db.query('INSERT INTO todos SET ?', newTodo, callback);
};
export const update = (id, updatedTodo, callback) => {
  db.query('UPDATE todos SET ? WHERE id = ?', [updatedTodo, id], callback);
};
export const delete = (id, callback) => {
  db.query('DELETE FROM todos WHERE id = ?', [id], callback);
};
