interface Todo {
  name: string;
  state: TodoState;
}

enum TodoState {
  New = 1,
  Active,
  Complete,
  Deleted
}

// basic class defn
class TodoStateChanger {

  constructor(private newState: TodoState) {
  }

  canChangeState(todo: Todo): boolean {
    return !!todo;
  }

  changeState(todo: Todo): Todo {
    if (this.canChangeState(todo)) {
      todo.state = this.newState;
    }

    return todo;
  }

}

// inheritance
class CompleteTodoStateChanger extends TodoStateChanger {

  constructor() {
    // calls the ctor of the PARENT class
    // defn: The super keyword is used to access and call functions on an object's parent.
    super(TodoState.Complete);
  }

  canChangeState(todo: Todo): boolean {
    // equivalent of calling paring class
    // wraps the super class
    return super.canChangeState(todo) && (
      todo.state == TodoState.Active
      || todo.state == TodoState.Deleted
    )
  }
}
