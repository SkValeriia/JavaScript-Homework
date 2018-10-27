var str = "";

function printing (symbol, lenght) {
  for (i = 0; i < lenght; i++) {
     str += symbol;
     console.log(str);
     str+symbol;
  }
}
var symbol = printing("#", 8);
