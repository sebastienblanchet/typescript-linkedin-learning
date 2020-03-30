function TodoService() {
  this.todos = [];
}

// prototypical instance
TodoService.prototype.getAll = function () {
  return this.todos;
}

var service = new TodoService();

// first look at obj.{method}
// then conds all the way up to Object.prototype
service.getAll()