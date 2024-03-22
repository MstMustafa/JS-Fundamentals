function findAndPrintHashTags(inputString) {
    // Find all words starting with '#' using a regular expression
    const hashTags = inputString.match(/#\w+/g);
    
    if (hashTags) {
        // Iterate over the found hashtags
        hashTags.forEach(tag => {
            // Remove the '#' prefix and check if the remaining part consists only of letters
            const word = tag.slice(1);
            if (/^[A-Za-z]+$/.test(word)) {
                // If the word is valid, print it
                console.log(word);
            }
        });
    }
}
