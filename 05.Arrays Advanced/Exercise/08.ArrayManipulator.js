function processArrayCommands(array, commands) {
    for (let i = 0; i < commands.length; i++) {
        let parts = commands[i].split(' ');
        let command = parts[0];

        switch (command) {
            case 'add':
                let indexToAdd = parseInt(parts[1]);
                let elementToAdd = parseInt(parts[2]);
                array.splice(indexToAdd, 0, elementToAdd);
                break;
            case 'addMany':
                let indexToAddMany = parseInt(parts[1]);
                let elementsToAdd = parts.slice(2).map(Number);
                for (let j = elementsToAdd.length - 1; j >= 0; j--) {
                    array.splice(indexToAddMany, 0, elementsToAdd[j]);
                }
                break;
            case 'contains':
                let elementToFind = parseInt(parts[1]);
                console.log(array.indexOf(elementToFind));
                break;
            case 'remove':
                let indexToRemove = parseInt(parts[1]);
                array.splice(indexToRemove, 1);
                break;
            case 'shift':
                let positions = parseInt(parts[1]);
                positions %= array.length;
                array = [...array.slice(positions), ...array.slice(0, positions)];
                break;
            case 'sumPairs':
                let pairedArray = [];
                for (let k = 0; k < array.length; k += 2) {
                    let sum = array[k];
                    if (k + 1 < array.length) {
                        sum += array[k + 1];
                    }
                    pairedArray.push(sum);
                }
                array = pairedArray;
                break;
            case 'print':
                console.log(`[ ${array.join(', ')} ]`);
                return;
        }
    }
}
