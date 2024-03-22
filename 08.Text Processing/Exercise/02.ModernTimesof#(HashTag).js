function findAndPrintHashTags(inputString) {
   
    const hashTags = inputString.match(/#\w+/g);
    
    if (hashTags) {
       
        hashTags.forEach(tag => {
            
            const word = tag.slice(1);
            if (/^[A-Za-z]+$/.test(word)) {
               
                console.log(word);
            }
        });
    }
}
