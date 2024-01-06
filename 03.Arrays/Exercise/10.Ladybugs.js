function ladybugSimulation(input) {
    let fieldSize = Number(input[0]);
    let ladybugs = input[1].split(' ').map(Number);

    let field = [];
    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }

    for (let ladybugIndex of ladybugs) {
        if (ladybugIndex >= 0 && ladybugIndex < fieldSize) {
            field[ladybugIndex] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let [currentLadybugIndex, direction, flyLength] = input[i].split(' ');
        let index = Number(currentLadybugIndex);
        let length = Number(flyLength);

        if (field[index] !== 1 || index < 0 || index >= fieldSize) {
            
        } else {
           
            field[index] = 0;

            let newPosition = direction === 'right' ? index + length : index - length;

            while (newPosition >= 0 && newPosition < fieldSize) {
                if (field[newPosition] === 0) {
                    field[newPosition] = 1;
                    break;
                } else {
                    newPosition += direction === 'right' ? length : -length;
                }
            }
        }
    }

    console.log(field.join(' '));
}
