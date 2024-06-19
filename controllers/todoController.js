const Todo = require('../models/todoModel');

exports.index = (req, res) => {
  Todo.getAll((err, todos) => {
    if (err) throw err;
    res.render('todos/index', { todos });
  });
};

exports.create = (req, res) => {
  const { title } = req.body;
  const newTodo = { title };
  
  Todo.create(newTodo, (err) => {
    if (err) throw err;
    res.redirect('/todos');
  });
};
