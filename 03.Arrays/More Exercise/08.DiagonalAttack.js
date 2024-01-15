function processMatrix(matrixStrings) {
    let matrix = matrixStrings.map(row => row.split(' ').map(Number));

    const size = matrix.length;
    let mainDiagonalSum = 0;
    let antiDiagonalSum = 0;

    for (let i = 0; i < size; i++) {
        mainDiagonalSum += matrix[i][i];
        antiDiagonalSum += matrix[i][size - 1 - i];
    }

    if (mainDiagonalSum !== antiDiagonalSum) {
        printMatrix(matrix);
        return;
    }


    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i !== j && i !== size - 1 - j) {
                matrix[i][j] = mainDiagonalSum;
            }
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
