function storeArmiesInfo(inputList) {
    const leaders = {};

    inputList.forEach(entry => {
        if (entry.includes(' arrives')) {
            const leader = entry.replace(' arrives', '');
            if (!leaders[leader]) {
                leaders[leader] = {};
            }
        } else if (entry.includes(' defeated')) {
            const leader = entry.replace(' defeated', '');
            if (leaders[leader]) {
                delete leaders[leader];
            }
        } else if (entry.includes('+')) {
            const [armyName, countStr] = entry.split(' + ');
            const count = parseInt(countStr, 10);
            Object.keys(leaders).forEach(leader => {
                if (leaders[leader][armyName]) {
                    leaders[leader][armyName] += count;
                }
            });
        } else {
            const [leader, rest] = entry.split(': ');
            const [armyName, countStr] = rest.split(', ');
            const count = parseInt(countStr, 10);
            if (leaders[leader]) {
                leaders[leader][armyName] = count;
            }
        }
    });

    return Object.entries(leaders)
        .map(([leader, armies]) => {
            const totalArmyCount = Object.values(armies).reduce((a, b) => a + b, 0);
            const sortedArmies = Object.entries(armies).sort((a, b) => b[1] - a[1]);
            const armiesStr = sortedArmies.map(([name, count]) => `>>> ${name} - ${count}`).join('\n');
            return `${leader}: ${totalArmyCount}\n${armiesStr}`;
        })
        .sort((a, b) => {
            const totalCountA = parseInt(a.split(': ')[1]);
            const totalCountB = parseInt(b.split(': ')[1]);
            return totalCountB - totalCountA;
        })
        .join('\n');
}
