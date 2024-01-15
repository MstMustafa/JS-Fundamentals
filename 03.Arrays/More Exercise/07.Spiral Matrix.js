function generateSpiralMatrix(rows, cols) {
    let matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols).fill(0);
    }

    let top = 0, bottom = rows - 1, left = 0, right = cols - 1;
    let value = 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = value++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = value++;
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = value++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = value++;
            }
            left++;
        }
    }

   
    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(' '));
    }
}
