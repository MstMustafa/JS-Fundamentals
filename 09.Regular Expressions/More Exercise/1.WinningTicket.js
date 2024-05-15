function checkLotteryTickets(input) {
  
    const tickets = input.split(/\s*,\s*/);

    tickets.forEach(ticket => {
        if (ticket.length !== 20) {
            console.log(`invalid ticket`);
            return;
        }

        const leftHalf = ticket.substring(0, 10);
        const rightHalf = ticket.substring(10, 20);
        const winningSymbols = ['@', '#', '$', '^'];
        let isMatchFound = false;

        winningSymbols.forEach(symbol => {
            const regex = new RegExp(`\\${symbol}{6,}`, 'g'); 
            const leftMatches = leftHalf.match(regex);
            const rightMatches = rightHalf.match(regex);

            if (leftMatches && rightMatches) {

                const longestLeftMatch = Math.max(...leftMatches.map(match => match.length));
                const longestRightMatch = Math.max(...rightMatches.map(match => match.length));
                const matchLength = Math.min(longestLeftMatch, longestRightMatch);

                if (matchLength >= 6) {
                    if (matchLength === 10) {
                        console.log(`ticket "${ticket}" - ${matchLength}${symbol} Jackpot!`);
                    } else {
                        console.log(`ticket "${ticket}" - ${matchLength}${symbol}`);
                    }
                    isMatchFound = true;
                    return;
                }
            }
        });

        if (!isMatchFound) {
            console.log(`ticket "${ticket}" - no match`);
        }
    });
}
