function decryptMessages(messages) {
    const planetInfo = { 'A': [], 'D': [] };

    messages.forEach(message => {
        const key = message.toLowerCase().split('').reduce((count, char) => {
            return count + (char === 's' || char === 't' || char === 'a' || char === 'r');
        }, 0);

       
        let decryptedMessage = '';
        for (let i = 0; i < message.length; i++) {
            decryptedMessage += String.fromCharCode(message.charCodeAt(i) - key);
        }

       
        const regex = /@([A-Za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([AD])![^@\-!:>]*->(\d+)/;
        const match = decryptedMessage.match(regex);

        if (match) {
            const planetName = match[1];
            const population = parseInt(match[2], 10);
            const attackType = match[3];
            const soldiers = parseInt(match[4], 10);

  
            if (attackType === 'A') {
                planetInfo['A'].push(planetName);
            } else if (attackType === 'D') {
                planetInfo['D'].push(planetName);
            }
        }
    });

    console.log(`Attacked planets: ${planetInfo['A'].length}`);
    if (planetInfo['A'].length > 0) {
        planetInfo['A'].sort().forEach(planet => console.log(`-> ${planet}`));
    }

    console.log(`Destroyed planets: ${planetInfo['D'].length}`);
    if (planetInfo['D'].length > 0) {
        planetInfo['D'].sort().forEach(planet => console.log(`-> ${planet}`));
    }
}
