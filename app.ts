// contract for what is expected
interface Todo {
  name: string;
  // ? means that this prop is optional
  completed?: boolean;
}

interface ITodoService {
  add(todo: Todo): Todo;
  delete(todo: Todo): void;
  getAll(): Todo[];
  getById(todoId: number): Todo;
}

// could also just cast <Todo>todo
var todo: Todo = {
  name: "Pick up drycleaning"
};