function countOccurrences(arr, commands) {
    let [elementsToTake, elementsToDelete, searchNumber] = commands;
    
    let takenElements = arr.slice(0, elementsToTake);
    
    let remainingElements = takenElements.slice(elementsToDelete);
    
    let count = 0;
    for (let i = 0; i < remainingElements.length; i++) {
        if (remainingElements[i] === searchNumber) {
            count++;
        }
    }
    
    console.log(`Number ${searchNumber} occurs ${count} times.`);
}
