interface Todo {
  name: string;
  state: TodoState;
}

var todo: Todo = {
  name: "Pick up drycleaning",
  state: TodoState.New
}

// this converts to obj of dynamically accessed obj prop
enum TodoState {
  // give some context, provide starting point
  New = 1,
  Active,
  Complete,
  Deleted
}

function delete (todo: Todo) {
  if (todo.state != TodoState.Complete) {
    throw "Can't delete incomplete task!"
  }
}