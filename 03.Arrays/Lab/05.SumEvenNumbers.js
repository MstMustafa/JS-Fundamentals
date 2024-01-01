function sumEvenNumbers(strings) {
  let sum = 0;

  for (let i = 0; i < strings.length; i++) {
    const number = Number(strings[i]);

    
    if (number % 2 === 0) {
      sum += number;
    }
  }

  console.log(sum);
}
