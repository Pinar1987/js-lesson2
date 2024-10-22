let priceFromUserWithDollar = prompt("Enter price", "0");
let priceFromUser = priceFromUserWithDollar.replace("$", "").trim();
let priceInNumber = parseFloat(priceFromUser);
let discount = (priceInNumber * 10) / 100;
let newPrice = priceInNumber - discount;
console.log(`New Price: $${newPrice}`);