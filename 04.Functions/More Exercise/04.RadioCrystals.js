function processCrystal(input) {
    let targetThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let chunk = input[i];
        console.log(`Processing chunk ${chunk} microns`);

        chunk = executeOperation(chunk, targetThickness, "Cut", (x) => x / 4);
        chunk = executeOperation(chunk, targetThickness, "Lap", (x) => x * 0.8);
        chunk = executeOperation(chunk, targetThickness, "Grind", (x) => x - 20);
        chunk = executeOperation(chunk, targetThickness, "Etch", (x) => x - 2);

        if (chunk + 1 === targetThickness) {
            chunk = xray(chunk);
        }

        console.log(`Finished crystal ${chunk} microns`);
    }

    function executeOperation(chunk, target, operation, operationFunc) {
        let count = 0;
        while (operationFunc(chunk) >= target || (operation === "Etch" && operationFunc(chunk) > target - 1)) {
            chunk = operationFunc(chunk);
            count++;
        }

        if (count > 0) {
            console.log(`${operation} x${count}`);
            chunk = transportingAndWashing(chunk);
        }

        return chunk;
    }

    function transportingAndWashing(chunk) {
        console.log("Transporting and washing");
        return Math.floor(chunk);
    }

    function xray(chunk) {
        console.log("X-ray x1");
        return chunk + 1;
    }
}
