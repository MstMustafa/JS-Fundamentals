function calculateTotalPrice(groupSize, groupType, dayOfWeek) {
    let pricePerPerson;

    // Assign price per person based on day of the week and group type
    switch (dayOfWeek) {
        case "Friday":
            switch (groupType) {
                case "Students": pricePerPerson = 8.45; break;
                case "Business": pricePerPerson = 10.90; break;
                case "Regular": pricePerPerson = 15; break;
            }
            break;
        case "Saturday":
            switch (groupType) {
                case "Students": pricePerPerson = 9.80; break;
                case "Business": pricePerPerson = 15.60; break;
                case "Regular": pricePerPerson = 20; break;
            }
            break;
        case "Sunday":
            switch (groupType) {
                case "Students": pricePerPerson = 10.46; break;
                case "Business": pricePerPerson = 16; break;
                case "Regular": pricePerPerson = 22.50; break;
            }
            break;
        default:
            console.log("Invalid day of the week");
            return;
    }

    let totalPrice = groupSize * pricePerPerson;

    // Apply discounts
    switch (groupType) {
        case "Students":
            if (groupSize >= 30) {
                totalPrice *= 0.85;
            }
            break;
        case "Business":
            if (groupSize >= 100) {
                const freeStays = Math.min(10, groupSize);
                totalPrice -= freeStays * pricePerPerson;
            }
            break;
        case "Regular":
            if (groupSize >= 10 && groupSize <= 20) {
                totalPrice *= 0.95;
            }
            break;
        default:
            console.log("Invalid group type");
            return;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
