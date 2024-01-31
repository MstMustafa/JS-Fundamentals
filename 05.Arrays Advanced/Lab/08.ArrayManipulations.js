function manipulateArray(commands) {
    let numbers = commands[0].split(' ').map(Number);

    for (let i = 1; i < commands.length; i++) {
        let parts = commands[i].split(' ');
        let command = parts[0];

        switch (command) {
            case 'Add':
                numbers.push(Number(parts[1]));
                break;
            case 'Remove':
                numbers = numbers.filter(num => num !== Number(parts[1]));
                break;
            case 'RemoveAt':
                numbers.splice(Number(parts[1]), 1);
                break;
            case 'Insert':
                numbers.splice(Number(parts[2]), 0, Number(parts[1]));
                break;
        }
    }

    console.log(numbers.join(' '));
}
