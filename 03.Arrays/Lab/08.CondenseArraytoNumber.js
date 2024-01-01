function condenseArray(numbers) {
  while (numbers.length > 1) {
    let condensedArray = [];

    for (let i = 0; i < numbers.length - 1; i++) {
      condensedArray[i] = numbers[i] + numbers[i + 1];
    }

    numbers = condensedArray;
  }

  console.log(numbers[0]);
}
