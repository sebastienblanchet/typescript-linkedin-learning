interface IHasALength {
  length: number;
}

// Generic constraints
function totalLength<T extends IHasALength>(x: T, y: T) {
  var total: number = x.length + y.length;
  return total;
}

class CustomArray<T> extends Array<T> { }

// caveats, does not assure that IHasALength is same
var length = totalLength([1, 2, 3], new CustomArray<number>())