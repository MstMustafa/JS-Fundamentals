function extractNonDecreasingSubset(numbers) {
  let currentMax = Number.NEGATIVE_INFINITY;

  const result = numbers.filter((num) => {
    if (num >= currentMax) {
      currentMax = num;
      return true;
    }
    return false;
  });

  console.log(result.join(' '));
}
