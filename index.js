let priceFromUser = prompt("Enter price", "0");
let priceInNumber = parseFloat(priceFromUser);
let discount = (priceInNumber * 10) / 100;
let newPrice = priceInNumber - discount;
console.log(`New Price: $${newPrice}`);


/* hej jag skrev koden men detta ger ett fel när jag kör det på konsolen försökt lösa men det är så nytt kunde inte klara mer. 
Jag ville köra min kod på Html också på pris ändringen med produkter men kom inte så lång om javascript :)MVH  /*