function decryptMessages(input) {
    const key = parseInt(input[0]);
    
    const pattern = /@([A-Za-z]+)[^@\-!:\>]*!([GN])!/;

    for (let i = 1; i < input.length; i++) {
        const message = input[i];
        
        if (message === 'end') {
            break;
        }
        
        let decryptedMessage = '';
        for (let char of message) {
            decryptedMessage += String.fromCharCode(char.charCodeAt(0) - key);
        }

        const match = pattern.exec(decryptedMessage);
        
        if (match && match[2] === 'G') {
            console.log(match[1]);
        }
    }
}
