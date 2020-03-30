interface jQuery {
  (selector: string): HTMLElement;
  version: number;
}

// Javascript is functional obj
// casting type, overide ts guess work
var $ = <jQuery>function (selector: string) {
  // Find DOM element
}

$.version = 1.18

var container = $('#container');
