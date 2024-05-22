function calculateEvenOddDifference(numbers) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = Number(numbers[i]);

    if (number % 2 === 0) {
      sumEven += number;
    } else {
      sumOdd += number;
    }
  }

  const difference = sumEven - sumOdd;
  console.log(difference);
}
