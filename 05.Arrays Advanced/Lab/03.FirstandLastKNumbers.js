function printFirstAndLastKElements(arr) {
    let k = arr[0];
    let firstKElements = arr.slice(1, k + 1);
    let lastKElements = arr.slice(-k);

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}
