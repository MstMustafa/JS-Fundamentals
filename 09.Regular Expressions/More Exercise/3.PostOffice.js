function findHiddenMessage(rawInput) {

    const input = String(rawInput);

    const [firstPart, secondPart, thirdPart] = input.split('|');

    const firstPattern = /(\$|#|%|\*|&)(?<capitalLetters>[A-Z]+)\1/;
    const matchLetters = firstPattern.exec(firstPart);
    if (!matchLetters) {
        console.error("No match found in the first part");
        return;
    }
    const allLetters = matchLetters.groups.capitalLetters;

    const secondPattern = /([0-9]{2}):([0-9]{2})/g;
    const matchesNumbers = [...secondPart.matchAll(secondPattern)];

    const letters = {};

    for (const letter of allLetters) {
        for (const digits of matchesNumbers) {
            const firstDigit = digits[1];
            const firstLetterInt = parseInt(firstDigit);
            const firstLetterChar = String.fromCharCode(firstLetterInt);
            const wordLength = digits[2];
            const wordLengthInt = parseInt(wordLength);

            if (letter === firstLetterChar && !(letter in letters)) {
                letters[letter] = wordLengthInt + 1;
                break;
            }
        }
    }

    const words = thirdPart.split(' ');

    for (const [letter, wordLength] of Object.entries(letters)) {
        for (const word of words) {
            const currentFirstLetter = word[0];
            const currentWordLength = word.length;

            if (letter === currentFirstLetter && wordLength === currentWordLength) {
                console.log(word);
                break;
            }
        }
    }
}
