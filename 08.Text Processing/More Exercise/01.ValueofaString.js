function calculateAsciiSum(input) {
    let totalSum = 0;
    let lettersArray = input.shift().split('')
        .filter(char => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 || char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);
    let caseType = input.shift();

    if (caseType === 'LOWERCASE') {
        lettersArray = lettersArray.filter(char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);
        for (let letter of lettersArray) {
            totalSum += letter.charCodeAt(0);
        }
    } else if (caseType === 'UPPERCASE') {
        lettersArray = lettersArray.filter(char => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90);
        for (let letter of lettersArray) {
            totalSum += letter.charCodeAt(0);
        }
    }
    return `The total sum is: ${totalSum}`;
}
