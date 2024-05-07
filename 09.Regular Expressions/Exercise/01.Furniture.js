function calculateTotalCost(inputs) {
    const regex = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(\.\d+)?)!(?<quant>\d+)/i;
    let items = [];
    let totalPrice = 0.0;

    inputs.forEach(input => {
        if (input === "Purchase") {
            return;
        }
        
        const match = input.match(regex);
        if (match) {
            const name = match.groups.name;
            const price = parseFloat(match.groups.price);
            const quant = parseInt(match.groups.quant, 10);
            items.push(name);
            totalPrice += price * quant;
        }
    });

    console.log("Bought furniture:");
    if (items.length > 0) {
        console.log(items.join('\n'));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
