function calculateConcreteAndCost(sections) {
    sections = sections.map(Number);
    let dailyConcreteUsage = [];
    let totalConcrete = 0;
    let completedSections = 0;
    
    while (completedSections < sections.length) {
        let dailyConcrete = 0;
        completedSections = 0;
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] < 30) {
                sections[i] += 1; 
                dailyConcrete += 195; 
            } else {
                completedSections += 1;
            }
        }
        if (dailyConcrete > 0) {
            dailyConcreteUsage.push(dailyConcrete);
            totalConcrete += dailyConcrete;
        }
    }
    
    let totalCost = totalConcrete * 1900; 
    
    console.log(dailyConcreteUsage.join(', '));
    console.log(`${totalCost} pesos`);
}
