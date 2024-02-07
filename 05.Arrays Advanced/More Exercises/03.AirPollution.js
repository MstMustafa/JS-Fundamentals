function trackPollution(mapData, forces) {
    let mapMatrix = mapData.map(row => row.split(' ').map(Number));

    forces.forEach(force => {
        let [action, index] = force.split(' ');
        index = parseInt(index);
        
        if (action === 'breeze') {
            for (let col = 0; col < 5; col++) {
                mapMatrix[index][col] = Math.max(0, mapMatrix[index][col] - 15);
            }
        } else if (action === 'gale') {
            for (let row = 0; row < 5; row++) {
                mapMatrix[row][index] = Math.max(0, mapMatrix[row][index] - 20);
            }
        } else if (action === 'smog') {
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    mapMatrix[row][col] += index;
                }
            }
        }
    });

    let pollutedBlocks = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (mapMatrix[row][col] >= 50) {
                pollutedBlocks.push(`[${row}-${col}]`);
            }
        }
    }

    if (pollutedBlocks.length > 0) {
        console.log(`Polluted areas: ${pollutedBlocks.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}
