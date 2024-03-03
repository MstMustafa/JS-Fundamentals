function calculateAndPrintCardValues(playersCards) {
    const cardValues = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    const typeMultipliers = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    const playerScores = {};

    playersCards.forEach(entry => {
        const [playerName, cards] = entry.split(': ');
        if (!playerScores[playerName]) playerScores[playerName] = new Set();
        cards.split(', ').forEach(card => playerScores[playerName].add(card));
    });

    Object.entries(playerScores).forEach(([playerName, cardSet]) => {
        let score = 0;
        cardSet.forEach(card => {
            const power = card.slice(0, -1);
            const type = card.slice(-1);
            score += cardValues[power] * typeMultipliers[type];
        });
        console.log(`${playerName}: ${score}`);
    });
}
