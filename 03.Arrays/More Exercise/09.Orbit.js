function buildOrbit(matrixParams) {
    let width = matrixParams[0];
    let height = matrixParams[1];
    let x = matrixParams[2];
    let y = matrixParams[3];

    let matrix = Array.from({ length: height }, () => Array(width).fill(0));

    matrix[x][y] = 1;

    let orbitValue = 2;
    let maxOrbit = Math.max(x, y, height - 1 - x, width - 1 - y);

    for (let orbit = 1; orbit <= maxOrbit; orbit++) {
        for (let i = Math.max(0, x - orbit); i <= Math.min(height - 1, x + orbit); i++) {
            for (let j = Math.max(0, y - orbit); j <= Math.min(width - 1, y + orbit); j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][j] = orbitValue;
                }
            }
        }
        orbitValue++;
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
