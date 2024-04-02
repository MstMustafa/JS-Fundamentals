function lettersChangeNumbers(input) {
   
    const sequences = input.split(' ').filter(Boolean);
    let totalSum = 0;

    sequences.forEach(sequence => {
        let firstLetter = sequence[0];
        let lastLetter = sequence[sequence.length - 1];
        let number = parseInt(sequence.substring(1, sequence.length - 1));

        if (firstLetter === firstLetter.toUpperCase()) {
            number /= firstLetter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        } else {
            number *= firstLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        }

        if (lastLetter === lastLetter.toUpperCase()) {
            number -= lastLetter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        } else {
            number += lastLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        }

        totalSum += number;
    });

    return totalSum.toFixed(2);
}
