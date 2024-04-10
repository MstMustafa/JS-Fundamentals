function asciiSumBetweenChars(input) {
    let [startChar, endChar, str] = input;
    let sum = 0;

    if (startChar > endChar) {
        [startChar, endChar] = [endChar, startChar];
    }

    for (let char of str) {
        if (char > startChar && char < endChar) {
            sum += new TextEncoder().encode(char)[0];
        }
    }

    console.log(sum);
}
