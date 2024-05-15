function registerDemons(input) {
   
    const demons = input.split(',')
                        .map(demon => demon.trim())
                        .sort();

    let outputs = [];

    demons.forEach(demon => {
        let health = 0;
        for (let char of demon) {
            if (!char.match(/[0-9+\-*\/.]/)) {
                health += char.charCodeAt(0);
            }
        }

        let damage = 0;
        let numberPattern = /[-+]?[0-9]*\.?[0-9]+/g; 
        let matches = demon.match(numberPattern);
        if (matches) {
            damage = matches.map(Number).reduce((acc, num) => acc + num, 0);
        }

        for (let i = 0; i < demon.length; i++) {
            if (demon[i] === '*') {
                damage *= 2;
            } else if (demon[i] === '/') {
                damage /= 2;
            }
        }

        damage = damage.toFixed(2); 

        outputs.push(`${demon} - ${health} health, ${damage} damage`);
    });

    return outputs.join('\n');
}
