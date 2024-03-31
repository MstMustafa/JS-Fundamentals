function fillTheHoles(letterAndWords) {
    const [letter, words] = letterAndWords;
    let filledLetter = '';
    let holeLength = 0; 

    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === '_') {
            holeLength++;
        } else {
     
            if (holeLength > 0) {
                const word = words.find(word => word.length === holeLength);
                const wordIndex = words.indexOf(word);
                if (wordIndex !== -1) {
                    words.splice(wordIndex, 1);
                }
                filledLetter += word;
                holeLength = 0;
            }
            filledLetter += letter[i];
        }
    }

    if (holeLength > 0) {
        const word = words.find(word => word.length === holeLength);
        const wordIndex = words.indexOf(word);
        if (wordIndex !== -1) {
            words.splice(wordIndex, 1);
        }
        filledLetter += word;
    }

    return filledLetter;
}
