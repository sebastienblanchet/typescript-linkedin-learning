/* From the last video...

function TodoServiceClass() {
    this.todos = [];
}

TodoServiceClass.prototype.getAll = function() {
    return this.todos;
}
*/

// New to ES6
//
class TodoServiceClass {
  // could also have just defined it here
  /*more work but still
  todos: Todo[] = [];

  ctor ( {
    this.todos = []
  })
   */

  // passed in at defn
  // add private or other access modifier
  // DEFINEs and ASSIGNS
  // OUTPUT is SAME
  constructor(private todos: Todo[]) {
  }

  // way of defining a obj.prototype
  getAll() {
    return this.todos;
  }
}

interface Todo {
  name: string;
  state: TodoStateEnum;
}

enum TodoStateEnum {
  New = 1,
  Active,
  Complete,
  Deleted
}