function processRaceInfo(input) {
    const participants = input[0].split(", ");
    const raceInfo = input.slice(1);
    
    const results = new Map(participants.map(name => [name, 0]));
    
    raceInfo.forEach(line => {
        if (line === "end of race") {
            return;
        }
        
        const nameChars = line.match(/[a-zA-Z]/g) || [];
        const distanceChars = line.match(/\d/g) || [];
        
        const name = nameChars.join('');
        const distance = distanceChars.reduce((acc, num) => acc + parseInt(num, 10), 0);
        
        if (results.has(name)) {
            results.set(name, results.get(name) + distance);
        }
    });
    
    const sortedResults = Array.from(results).sort((a, b) => b[1] - a[1]);
    
    const topThree = sortedResults.slice(0, 3);

    const positions = ["1st", "2nd", "3rd"];
    topThree.forEach((result, index) => {
        console.log(`${positions[index]} place: ${result[0]}`);
    });
}
