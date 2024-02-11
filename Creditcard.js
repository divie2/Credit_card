function validateCreditCard(cardNumber) {
    // Define regular expressions for different credit card types
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^5[1-5][0-9]{14}$/;
    const amexRegex = /^3[47][0-9]{13}$/;
    const discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

    // Check if the card number matches any of the regular expressions
    if (visaRegex.test(cardNumber)) {
        return "Visa";
    } else if (mastercardRegex.test(cardNumber)) {
        return "Mastercard";
    } else if (amexRegex.test(cardNumber)) {
        return "American Express";
    } else if (discoverRegex.test(cardNumber)) {
        return "Discover";
    } else {
        return "Unknown";
    }
}

// Test the function
const cardNumber = "41111111111111"; // Example Visa card number
const cardType = validateCreditCard(cardNumber);
console.log(`Credit Card Type: ${cardType}`);

