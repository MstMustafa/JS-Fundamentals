function findAndPrintHashTags(inputString) {
 
  const words = inputString.split(' ');
  
  words.forEach(word => {

    if (word.startsWith('#') && word.length > 1) {
      const potentialTag = word.substring(1);
      
      let isValid = true;
      for (let i = 0; i < potentialTag.length; i++) {
        const char = potentialTag.charCodeAt(i);
        if (!((char >= 65 && char <= 90) || (char >= 97 && char <= 122))) {
          isValid = false;
          break;
        }
      }
      
      if (isValid) {
        console.log(potentialTag);
      }
    }
  });
}
