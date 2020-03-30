interface IIdGenerator {
  nextId: number;
}

// use implements
// TS implements javascripts natural DUCK TYPING:
// The idea is that you don't need a type in order to invoke an existing method on an object - if a method is defined on it, you can invoke it.
// The name comes from the phrase "If it looks like a duck and quacks like a duck, it's a duck".
// INTERFACE is saying that the TodoService MUST have all methods from I server and generator, this is nice
class TodoService implements ITodoService, IIdGenerator {

  private static _lastId: number = 0;

  get nextId() {
    return TodoService._lastId += 1;
  }

  constructor(private todos: Todo[]) {
  }

  // ITodoService
  add(todo: Todo): Todo {
    todo.id = this.nextId;

    this.todos.push(todo);

    return todo;
  }

  delete(todoId: number): void {
    var toDelete = this.getById(todoId);

    var deletedIndex = this.todos.indexOf(toDelete);

    this.todos.splice(deletedIndex, 1);
  }

  getAll(): Todo[] {
    var clone = JSON.stringify(this.todos);
    return JSON.parse(clone);
  }

  getById(todoId: number): Todo {
    var filtered =
      this.todos.filter(x => x.id == todoId);

    if (filtered.length) {
      return filtered[0];
    }

    return null;
  }
}
