function rotateArray(inputArray) {
  let rotations = parseInt(inputArray.pop());
  let arrayLength = inputArray.length;

  for (let i = 0; i < rotations % arrayLength; i++) {
    let lastElement = inputArray.pop();
    inputArray.unshift(lastElement);
  }

  console.log(inputArray.join(' '));
}
