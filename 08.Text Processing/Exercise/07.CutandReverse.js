function cutAndReverse(inputString) {
  
    let midpoint = Math.floor(inputString.length / 2);

    let firstHalf = inputString.slice(0, midpoint);
    let secondHalf = inputString.slice(midpoint);

    let reversedFirstHalf = firstHalf.split('').reverse().join('');
    let reversedSecondHalf = secondHalf.split('').reverse().join('');

    console.log(reversedFirstHalf);
    console.log(reversedSecondHalf);
}
