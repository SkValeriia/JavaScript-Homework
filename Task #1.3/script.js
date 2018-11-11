var arr = [1, 4, 2];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer));

var sumNumbers = arr.reduce(reducer);
var averageNumber = sumNumbers/arr.length;

alert ("Average number is: " + averageNumber);
