function sumFirstLast(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
        return;
    }

    let firstElement = Number(arr[0]);
    let lastElement = Number(arr[arr.length - 1]);
    let sum = firstElement + lastElement;

    console.log(sum);
}
