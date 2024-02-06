function countEqualPairs(matrix) {
    let rows = matrix.length;
    let cols = matrix[0] ? matrix[0].length : 0;
    let count = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (c + 1 < cols && matrix[r][c] === matrix[r][c + 1]) {
                count += 1;
            }
            if (r + 1 < rows && matrix[r][c] === matrix[r + 1][c]) {
                count += 1;
            }
        }
    }

    console.log(count);
}
