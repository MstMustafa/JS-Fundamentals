function substring(word, text) {
    const wordLower = word.toLowerCase();
    let textLower = text.toLowerCase() + " "; 
    let currentWord = "";
    let found = false;

    for (let char of textLower) {
        if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
            currentWord += char;
        } else if (currentWord.length > 0) {
            if (currentWord === wordLower) {
                console.log(word);
                found = true;
                break;
            }
            currentWord = ""; 
        }
    }

    if (!found) {
        console.log(`${word} not found!`);
    }
}
