var array: number[] = [1, 2, 3]
// build in Array definition
var array2: Array<number> = [1, 2, 3]

// Generic class
class KeyValuePair<TKey, TValue> {

  constructor(
    public key: TKey,
    public value: TValue
  ) {
  }

}

// Define a Kvp item
let pair1 = new KeyValuePair<number, string>(1, 'First');
let pair2 = new KeyValuePair<string, Date>('Second', new Date(Date.now()));
let pair3 = new KeyValuePair<number, string>(3, 'Third');


class KeyValuePairPrinter<T, U> {

  constructor(private pairs: KeyValuePair<T, U>[]) {
  }

  print() {
    // for each on obj, nice
    for (let p of this.pairs) {
      console.log(`${p.key}: ${p.value}`)
    }
  }

}


var printer = new KeyValuePairPrinter([pair1, pair3])
printer.print();