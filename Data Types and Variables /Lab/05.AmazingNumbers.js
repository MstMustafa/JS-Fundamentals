function isAmazingNumber(number) {
  
  let numberString = number.toString();
  
  
  let digitSum = 0;
  for (let i = 0; i < numberString.length; i++) {
    digitSum += parseInt(numberString[i]);
  }
  
  
  let isAmazing = digitSum.toString().includes('9');
  
  
  console.log(`${number} Amazing? ${isAmazing ? 'True' : 'False'}`);
}
