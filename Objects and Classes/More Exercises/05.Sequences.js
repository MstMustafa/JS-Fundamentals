function storeAndPrintUniqueSequences(input) {
    const uniqueSequences = new Set();
    const arrays = []; 

    input.forEach(jsonString => {
        const array = JSON.parse(jsonString); 
        array.sort((a, b) => b - a); 
        const uniqueKey = JSON.stringify(array);
        if (!uniqueSequences.has(uniqueKey)) {
            uniqueSequences.add(uniqueKey);
            arrays.push(array); 
        }
    });

    arrays.sort((a, b) => a.length - b.length);

    arrays.forEach(array => {
        console.log(`[${array.join(", ")}]`);
    });
}
