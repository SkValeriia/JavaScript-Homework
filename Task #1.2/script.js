var arr = [125, -102857, 3, 456, 1765876456.25, 0, 6548, 2851];
var MaxNumber = arr[0];
var MinNumber = arr[0];

for (i = 0; i < arr.length; i++) {
    if (MaxNumber < arr[i]) {
      MaxNumber = arr[i];
      }
}

for (k = 0; k < arr.length; k++) {
    if (MinNumber > arr[k]) {
      MinNumber = arr[k];
      }
}

alert ("Max number is: " + MaxNumber + " " + "Min number is: " + MinNumber);
