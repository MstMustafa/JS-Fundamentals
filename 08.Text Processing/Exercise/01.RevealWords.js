function revealWords(words, sentence) {
  
  let wordsArray = words.split(', ');
 
  let templates = sentence.match(/\*+/g);

  if (templates) {
  
    templates.forEach(template => {
     
      let matchingWord = wordsArray.find(word => word.length === template.length);
      if (matchingWord) {
       
        sentence = sentence.replace(template, matchingWord);
        wordsArray = wordsArray.filter(word => word !== matchingWord);
      }
    });
  }

  return sentence;
}
