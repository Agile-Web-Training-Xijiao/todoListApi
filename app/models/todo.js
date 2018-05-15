class Todo {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.isFinished = false;
    this.createdAt = new Date();
  }
}

module.exports = Todo;