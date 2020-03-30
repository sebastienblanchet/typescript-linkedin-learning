/*
Union type ( {type1} | {type2} )
 */
function totalLength(x: (string | any[]), y: (string | any[])): number {

  var total: number = x.length + y.length;

  x.slice(0)

  // type guard syntax, verify typ eof variable
  if (x instanceof Array) {
    x.push('TypeScript')
  }

  if (x instanceof String) {
    x.substr(0)
  }

  return total;
}
