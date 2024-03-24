function pascalCaseSplitter(inputString) {
  
  if (typeof inputString !== 'string') {
    return 'Invalid input: Input must be a string.';
  }

  let words = [];
  let startOfWord = 0; // Index where the current word starts

  for (let i = 1; i < inputString.length; i++) {
    
    if (inputString[i] === inputString[i].toUpperCase()) {
      words.push(inputString.substring(startOfWord, i));
      startOfWord = i; // Update the startOfWord to the current character's index
    }
  }
 
  words.push(inputString.substring(startOfWord));

  return words.join(', ');
}
