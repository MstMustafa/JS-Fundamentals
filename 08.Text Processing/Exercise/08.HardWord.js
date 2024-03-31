function fillTheHoles(letterAndWords) {
   
    const [letter, words] = letterAndWords;
   
    const holePattern = /_+/g;

    let filledLetter = letter.replace(holePattern, (match) => {
  
        const word = words.find(word => word.length === match.length);
      
        const wordIndex = words.indexOf(word);
        if (wordIndex !== -1) {
            words.splice(wordIndex, 1);
        }
        return word;
    });

    return filledLetter;
}
