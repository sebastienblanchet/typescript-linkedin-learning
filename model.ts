namespace TodoApp.Model {
  // must have export to use across other scopes of SAME namespace
  export interface Todo {
    id: number;
    name: string;
    state: TodoState;
  }

}

namespace TodoApp.Model {

  export enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
  }
}