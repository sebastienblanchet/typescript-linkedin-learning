// explcit definition of return
// an array of any type, so make sure that .length always defined
function totalLength(x: any[], y: string): number {
  var total: number = x.length + y.length;
  return total;
}