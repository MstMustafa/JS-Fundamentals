function calculateTicketPrice(day, age) {
    let price;

    switch (day) {
        case "Weekday":
            switch (true) {
                case age >= 0 && age <= 18:
                    price = 12;
                    break;
                case age > 18 && age <= 64:
                    price = 18;
                    break;
                case age > 64 && age <= 122:
                    price = 12;
                    break;
                default:
                    console.log("Error!");
                    return;
            }
            break;

        case "Weekend":
            switch (true) {
                case age >= 0 && age <= 18:
                    price = 15;
                    break;
                case age > 18 && age <= 64:
                    price = 20;
                    break;
                case age > 64 && age <= 122:
                    price = 15;
                    break;
                default:
                    console.log("Error!");
                    return;
            }
            break;

        case "Holiday":
            switch (true) {
                case age >= 0 && age <= 18:
                    price = 5;
                    break;
                case age > 18 && age <= 64:
                    price = 12;
                    break;
                case age > 64 && age <= 122:
                    price = 10;
                    break;
                default:
                    console.log("Error!");
                    return;
            }
            break;

        default:
            console.log("Error");
            return;
    }

    console.log(`${price}$`);
}
