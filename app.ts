var container = document.getElementById('container');

// explicitly define optional args unlike js
function countdown(initial, final = 0, interval = 1) {

  var current = initial;

  while (current > final) {
    container.innerHTML = current;
    current -= interval;
  }

}

countdown(10, 5, 2)