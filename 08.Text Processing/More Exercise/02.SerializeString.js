function serializeString(inputArray) {
    const inputString = inputArray[0];
    let charIndexes = {};

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (!charIndexes[char]) {
            charIndexes[char] = [i];
        } else {
            charIndexes[char].push(i);
        }
    }

    let output = [];
    for (const [char, indexes] of Object.entries(charIndexes)) {
        output.push(`${char}:${indexes.join('/')}`);
    }

    return output.join('\n');
}
