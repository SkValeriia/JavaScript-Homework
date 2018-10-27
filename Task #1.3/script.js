var arr = [1, 2, 3, 4, 5];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer));

var sumNumbers = arr.reduce(reducer);
var averageNumber = sumNumbers/arr.length;

alert ("Average number is: " + averageNumber);
