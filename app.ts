// GENERICS in C#
// templates C++
// cool
// Use these to just make sure that all are same type
// but can be ANY, so similar to that, know when to use
function clone<T>(value: T): T {
  let serialized = JSON.stringify(value);
  return JSON.parse(serialized);
}

clone('Hello!')

clone(123)

var todo: Todo = {
  id: 1,
  name: 'Pick up drycleaning',
  state: TodoState.Active
};

// can give the function anything, it can handle it
clone(todo)
clone({ name: 'Jess' })