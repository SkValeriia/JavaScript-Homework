var currency = "";
  while (currency !== "uah" && currency !== "usd")
  {
  alert ("Введите валюту, которую вы хотите обменять (uah or usd)");
  currency = prompt("uah or usd").toLowerCase();
  console.log(currency)
  }

if (currency === "uah") {
  var x = prompt("Введите число, которое нужно конвертировать: ");
  var uah = parseFloat(x);
  usd = uah*26;
  console.log("USD = " + usd)
  alert("USD = " + usd)
} else {
  var y = prompt("Write number to convert: ");
  var usd = parseFloat(y);
  uah = usd/26;
  console.log("UAH = " + uah)
  alert("UAH = " + uah)
}
