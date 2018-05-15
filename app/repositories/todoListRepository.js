const Todo = require("../models/todo");

let currentId = 0;

class TodoListRepository {
  constructor() {
    const todo1 = new Todo(++currentId, "todo1", "todo1 desc");
    const todo2 = new Todo(++currentId, "todo2", "todo2 desc");
    todo1.isFinished = true;
    this.todoList = [todo1, todo2];
  }

  listAllTodos() {
    return this.todoList;
  }

  findTodoBy(id) {
    return this.todoList.find(function(todo) {
      return todo.id == id;
    });
  }

  createTodo(todoBody) {
    const todo = new Todo(++currentId, todoBody.name, todoBody.description);
    this.todoList.push(todo);
  }

  updateTodo(id, update) {
    const todo = this.findTodoBy(id);
    Object.assign(todo, update);
    return todo;
  }

  deleteTodoBy(id) {
    const index = this.todoList.findIndex(function(todo) {
      return todo.id == id;
    });
    if(index >= 0) {
      this.todoList.splice(index, 1);
    }
  }
}

module.exports = new TodoListRepository();