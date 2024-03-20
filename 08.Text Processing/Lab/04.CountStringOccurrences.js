function countStringOccurrences(text, word) {

  const words = text.split(/\s+/);
 
  let count = 0;

  for (let i = 0; i < words.length; i++) {
   
    if (words[i] === word) {
      count++;
    }
  }
  return count;
}
