function oddOccurrences(sentence) {
    const words = sentence.toLowerCase().split(' ');
    const wordCounts = {};
    words.forEach(word => {
        if (wordCounts[word]) {
            wordCounts[word] += 1;
        } else {
            wordCounts[word] = 1;
        }
    });
    
    const oddWords = Object.keys(wordCounts).filter(word => wordCounts[word] % 2 !== 0);
    
    return oddWords.join(' ');
}
