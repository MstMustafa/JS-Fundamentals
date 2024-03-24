function replaceRepeatingChars(inputString) {

  if (typeof inputString !== 'string') {
    return 'Invalid input: Input must be a string.';
  }

  let result = '';
  for (let i = 0; i < inputString.length; i++) {
   
    if (i === 0 || inputString[i] !== inputString[i - 1]) {
      result += inputString[i];
    }
  }
  return result;
}
