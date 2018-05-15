const todoListRepository = require("../repositories/todoListRepository");

exports.listAllTodos = function(req, res) {
  const todoList = todoListRepository.listAllTodos();
  res.json(todoList);
};

exports.createTodo = function(req, res) {
  todoListRepository.createTodo(req.body);
  res.status(201).end();
};

exports.readTodo = function(req, res) {
  const todo = todoListRepository.findTodoBy(req.params.todoId);
  res.json(todo);
};

exports.updateTodo = function(req, res) {
  const todo = todoListRepository.updateTodo(req.params.todoId, req.body);
  res.json(todo);
};

exports.deleteTodo = function(req, res) {
  todoListRepository.deleteTodoBy(req.params.todoId);
  res.json({ message: 'Todo successfully deleted' });
};