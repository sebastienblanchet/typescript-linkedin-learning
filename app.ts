// overloads, nice
// ONE implementation, add alternate signatures above
function totalLength(x: string, y: string): number
function totalLength(x: any[], y: any[]): number
function totalLength(x: (string | any[]), y: (string | any[])): number {
  var total: number = x.length + y.length;

  x.slice(0)

  if (x instanceof Array) {
    x.push('TypeScript')
  }

  if (x instanceof String) {
    x.substr(0)
  }

  return total;
}

totalLength()
