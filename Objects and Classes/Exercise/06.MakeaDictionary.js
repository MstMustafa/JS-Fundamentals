function createDictionary(input) {
    const dictionary = {};

    input.forEach(jsonString => {
        const termDefinition = JSON.parse(jsonString);
        for (let [term, definition] of Object.entries(termDefinition)) {
            dictionary[term] = definition;
        }
    });

    const sortedTerms = Object.keys(dictionary).sort();

    sortedTerms.forEach(term => {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    });
}
