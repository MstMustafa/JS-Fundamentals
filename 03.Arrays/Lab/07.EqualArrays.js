function compareArrays(array1, array2) {
  let sum = 0;
  let identical = true;
  let diffIndex = -1;

  for (let i = 0; i < array1.length; i++) {
    let num1 = Number(array1[i]);
    let num2 = Number(array2[i]);

    sum += num1;

    if (num1 !== num2) {
      identical = false;
      diffIndex = i;
      break;
    }
  }

  if (identical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
  }
}
