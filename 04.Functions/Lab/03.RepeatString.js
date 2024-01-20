function repeatString(inputString, repeatCount) {
  if (repeatCount < 0) {
    console.log("Repeat count should be a non-negative integer.");
    return;
  }

  let repeatedString = inputString.repeat(repeatCount);
  console.log(repeatedString);
}
