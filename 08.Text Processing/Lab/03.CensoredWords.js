function censorWord(text, word) {
 
  const replacement = '*'.repeat(word.length);
  const censoredText = text.replace(new RegExp(word, 'g'), replacement);
  return censoredText;
  
}
