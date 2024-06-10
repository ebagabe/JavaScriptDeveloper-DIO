let price = 100;

let paymentMethod = "Carton";

if (paymentMethod == "Debit") {
    price = price - (price * 0.1);
    console.log(`Voce ira pagar R$${price.toFixed(2)}`)
}
else if (paymentMethod == "PIX") {
    price = price - (price * 0.15);
    console.log(`Voce ira pagar R$${price.toFixed(2)}`)
}
else if (paymentMethod == "Twice") {
    console.log(`Voce ira pagar R$${price.toFixed(2)}`)
}
else {
    price = price + (price * 0.1);
    console.log(`Voce ira pagar R$${price.toFixed(2)}`)
}
