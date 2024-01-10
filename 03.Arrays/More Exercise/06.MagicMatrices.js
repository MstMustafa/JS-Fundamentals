function isMagical(matrix) {
  
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  let referenceSum = 0;
  for (let num of matrix[0]) {
    referenceSum += num;
  }

  
  for (let i = 1; i < matrix.length; i++) {
    let rowSum = 0;
    for (let num of matrix[i]) {
      rowSum += num;
    }
    if (rowSum !== referenceSum) {
      return false;
    }
  }

  for (let j = 0; j < matrix[0].length; j++) {
    let colSum = 0;
    for (let i = 0; i < matrix.length; i++) {
      colSum += matrix[i][j];
    }
    if (colSum !== referenceSum) {
      return false;
    }
  }

  return true;
}
