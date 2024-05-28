function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    let brokenHelmetCount = 0;
    let brokenSwordCount = 0;
    let brokenShieldCount = 0;

    for (let i = 1; i <= lostFights; i++) {
        
        if (i % 2 === 0) {
            totalExpenses += helmetPrice;
            brokenHelmetCount++;
        }

        
        if (i % 3 === 0) {
            totalExpenses += swordPrice;
            brokenSwordCount++;
        }

        
        if (i % 2 === 0 && i % 3 === 0) {
            totalExpenses += shieldPrice;
            brokenShieldCount++;

            
            if (brokenShieldCount % 2 === 0) {
                totalExpenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
