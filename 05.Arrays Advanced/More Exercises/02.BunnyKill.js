function bunnyKill(input) {
    let matrix = input.slice(0, -1).map(row => row.split(' ').map(Number));
    let bombs = input[input.length - 1].split(' ').map(coords => coords.split(',').map(Number));
    let totalDamage = 0;
    let killedBunnies = 0;

    for (let bomb of bombs) {
        let [row, col] = bomb;
        if (matrix[row][col] > 0) { 
            totalDamage += matrix[row][col];
            killedBunnies++;
            explode(matrix, row, col);
        }
    }

    matrix.forEach(row => {
        row.forEach(bunny => {
            if (bunny > 0) {
                totalDamage += bunny;
                killedBunnies++;
            }
        });
    });

    console.log(totalDamage);
    console.log(killedBunnies);

    function explode(matrix, bombRow, bombCol) {
        let bombPower = matrix[bombRow][bombCol];
        for (let row = bombRow - 1; row <= bombRow + 1; row++) {
            for (let col = bombCol - 1; col <= bombCol + 1; col++) {
                if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) {
                    matrix[row][col] -= bombPower;
                    if (matrix[row][col] < 0) matrix[row][col] = 0;
                }
            }
        }
    }
}
