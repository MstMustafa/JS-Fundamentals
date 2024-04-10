function decryptMessages(input) {
    const keyString = input.shift();
    const key = keyString.split(' ').map(Number); 

    const decryptMessage = (message) => {
        let decrypted = '';
        for (let i = 0; i < message.length; i++) {
            const keyIndex = i % key.length;
            const decryptedChar = String.fromCharCode(message.charCodeAt(i) - key[keyIndex]);
            decrypted += decryptedChar;
        }
        return decrypted;
    };

    const extractInfo = (decryptedMessage) => {
        const typeRegex = /&([^&]+)&/;
        const coordinatesRegex = /<([^>]+)>/;
        const typeMatch = decryptedMessage.match(typeRegex);
        const coordinatesMatch = decryptedMessage.match(coordinatesRegex);

        if (typeMatch && coordinatesMatch) {
            return {
                type: typeMatch[1],
                coordinates: coordinatesMatch[1]
            };
        }
        return null;
    };

    for (const message of input) {
        if (message === "find") break; 

        const decrypted = decryptMessage(message);
        const info = extractInfo(decrypted);

        if (info) {
            console.log(`Found ${info.type} at ${info.coordinates}`);
        }
    }
}
