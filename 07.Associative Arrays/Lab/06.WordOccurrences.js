function solve(input) {
    const wordCount = new Map();
    
    input.forEach(word => {
        if (!wordCount.has(word)) {
            wordCount.set(word, 1);
        } else {
            wordCount.set(word, wordCount.get(word) + 1);
        }
    });
    
    const sortedWordCount = Array.from(wordCount.entries()).sort((a, b) => b[1] - a[1]);
    
    sortedWordCount.forEach(([word, count]) => {
        console.log(`${word} -> ${count} times`);
    });
}
