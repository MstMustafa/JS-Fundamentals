function sortAndPrintArray(arr) {
  arr.sort((a, b) => a - b);
  
  let smallerHalf = arr.slice(0, arr.length / 2); 
  let biggerHalf = arr.slice(arr.length / 2).reverse();

  let resultArr = [];
  for (let i = 0; i < biggerHalf.length; i++) {
    resultArr.push(biggerHalf[i]);
    if (smallerHalf[i] !== undefined) {
      resultArr.push(smallerHalf[i]);
    }
  }

  console.log(resultArr.join(' '));
}
