function processArray(arr) {
    let result = [];

    arr.forEach(element => {
        const num = parseInt(element);

        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    });

    result.forEach(element => console.log(element));
}
