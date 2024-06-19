const db = require('../db');

class Todo {
  static getAll(callback) {
    db.query('SELECT * FROM todo', callback);
  }

  static create(newTodo, callback) {
    db.query('INSERT INTO todo SET ?', newTodo, callback);
  }
}

module.exports = Todo;
