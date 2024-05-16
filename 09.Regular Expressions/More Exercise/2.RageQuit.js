function rageQuit(input) {
    const regex = /([^0-9]*)(\d+)/g;
    let match;
    let rageMessage = '';

    while ((match = regex.exec(input)) !== null) {
        const n = parseInt(match[2]);
        const word = match[1].toUpperCase();
        rageMessage += word.repeat(n);
    }

    const uniqueCount = new Set(rageMessage.split('')).size;

    console.log(`Unique symbols used: ${uniqueCount}`);
    console.log(rageMessage);
}
