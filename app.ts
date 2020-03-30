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

// yesssssssssssssssss
// this is not a es6 feature!!!!~!!!!!!
abstract class TodoStateChanger {

  constructor(private newState: TodoState) {
  }

  // MUST be overwritten
  abstract canChangeState(todo: Todo): boolean;

  changeState(todo: Todo): Todo {
    if (this.canChangeState(todo)) {
      todo.state = this.newState;
    }

    return todo;
  }

}

class CompleteTodoStateChanger extends TodoStateChanger {

  // NO need to override the super ctor
  // IF the abstract keywork is not provided
  constructor() {
    super(TodoState.Complete);
  }

  // no keywork required for override
  canChangeState(todo: Todo): boolean {
    // cannot use the base class since the abstract was defined
    return !!todo && (
      todo.state == TodoState.Active
      || todo.state == TodoState.Deleted
    )
  }

}

