// anonymous types
// define an interface one line
var todo: { name: string };

// adding a new prop?
todo = { age: 41 }

// anonymous types, give anything that has an obj length
function totalLength(x: { length: number }, y: { length: number }): number {
  var total: number = x.length + y.length;
  return total;
}