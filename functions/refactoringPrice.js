function applyDiscount(price, discount) {
    return (price - (price * (discount / 100)));
}

function applyInterest(price, interest) {
    return (price + (price * interest / 100));
}

function validateMethod(priceSticker, method) {
    if (method === 1) {
        return applyDiscount(priceSticker, 10);
    }

    if (method === 2) {
        return applyDiscount(priceSticker, 15);
    }

    if (method === 3) {
        return priceSticker;
    }

    return applyInterest(priceSticker, 10);
}

function generatePrice(priceSticker, paymentMethod) {
    const price = validateMethod(priceSticker, paymentMethod);

    return `The amount to be paid will be: R$${price.toFixed(2)}`
}

console.log(generatePrice(100, 4))