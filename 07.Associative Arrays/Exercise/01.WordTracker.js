function wordsTracker(wordsArray) {
    const targetWords = wordsArray[0].split(' ');
    const sentenceParts = wordsArray.slice(1);
    
    const wordCounts = {};
    targetWords.forEach(word => {
        wordCounts[word] = 0;
    });
    
    sentenceParts.forEach(word => {
        if (word in wordCounts) {
            wordCounts[word] += 1;
        }
    });
    
    const sortedWordCounts = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
    
    sortedWordCounts.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });
}
