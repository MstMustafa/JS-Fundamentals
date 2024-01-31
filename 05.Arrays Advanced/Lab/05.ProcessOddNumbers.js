function doubleOddPositions(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i] * 2);
    }

    console.log(result.reverse().join(' '));
}
