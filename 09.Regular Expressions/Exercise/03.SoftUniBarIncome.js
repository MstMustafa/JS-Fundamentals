function processShiftOrders(inputLines) {
    const pattern = /%([A-Z][a-z]+)%[^|%$.]*<(\w+)>[^|%$.]*\|(\d+)\|[^|%$.]*?(\d+(\.\d+)?|\.\d+)\$/;
    let totalIncome = 0.0;

    inputLines.forEach(line => {
        if (line === "end of shift") {
            return;
        }

        const match = line.match(pattern);
        if (match) {
            const customerName = match[1];
            const product = match[2];
            const count = parseInt(match[3], 10);
            const price = parseFloat(match[4]);
            const totalPrice = count * price;
            totalIncome += totalPrice;

            console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`);
        }
    });

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
