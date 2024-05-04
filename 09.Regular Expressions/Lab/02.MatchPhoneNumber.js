function extractValidSofiaPhoneNumbers(inputArray) {
   
    const pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let validNumbers = [];

    inputArray.forEach(text => {
        const matches = text.match(pattern);
        if (matches) {
            validNumbers = validNumbers.concat(matches.map(phone => phone.trim()));
        }
    });

    return validNumbers.join(', ');
}
