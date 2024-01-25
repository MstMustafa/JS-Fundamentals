function calculateAndDivideFactorials(num1, num2) {
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    let factorial1 = factorial(num1);
    let factorial2 = factorial(num2);
    let division = factorial1 / factorial2;

    console.log(division.toFixed(2));
}
