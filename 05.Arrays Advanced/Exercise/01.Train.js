function updateTrainState(input) {
    let wagons = input[0].split(' ').map(Number); 
    let maxCapacity = Number(input[1]); 

    for (let i = 2; i < input.length; i++) {
        if (input[i].indexOf('Add') === 0) {
            let passengers = Number(input[i].substring(4)); 
            wagons.push(passengers);
        } else {
            let passengers = Number(input[i]);

            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passengers <= maxCapacity) {
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }

    return wagons.join(' ');
}
