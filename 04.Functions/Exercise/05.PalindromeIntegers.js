function isPalindromeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numStr = arr[i].toString();
        let reversedNumStr = numStr.split('').reverse().join('');
        let result = numStr === reversedNumStr;
        console.log(result);
    }
}
