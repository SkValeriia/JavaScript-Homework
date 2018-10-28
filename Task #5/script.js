var a = 1, b = 1;
var c = a + b;
console.log(a);
console.log(b);

function numbers (n) {
  for (i = 0; i < (n-2); i++) {
    a = b, b = c;
    c = a + b;
    console.log(c);
  }
}

var fibonacci = numbers(5);
