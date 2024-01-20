function orders(productName,quantity)
{
    let toPay = 0;
    switch(productName)
    {
        case "water": toPay += quantity * 1;break;
        case "coffee": toPay += quantity * 1.50;break;
        case "coke": toPay += quantity * 1.40;break;
        case "snacks": toPay += quantity * 2;break;
    }

    console.log(toPay.toFixed(2))
}
