function performCalculation(number1, operator, number2) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                console.error("Cannot divide by zero");
                return;
            }
            break;
        default:
            console.error("Invalid operator");
            return;
    }

    console.log(result.toFixed(2));
}
