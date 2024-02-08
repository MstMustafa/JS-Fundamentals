function decodeMessage(inputData) {
  
    const letters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let n = parseInt(inputData[0], 10);
    let templateMatrix = inputData.slice(1, 1 + n).map(row => row.split(' ').map(Number));
    let messageMatrix = inputData.slice(1 + n).map(row => row.split(' ').map(Number));
    
    let decodedMessage = "";
   
    for (let i = 0; i < messageMatrix.length; i++) {
        for (let j = 0; j < messageMatrix[i].length; j++) {
            // Calculate the position in the template matrix
            let templateRow = i % n;
            let templateColumn = j % templateMatrix[0].length;
            // Sum the values and find the corresponding letter
            let sumResult = messageMatrix[i][j] + templateMatrix[templateRow][templateColumn];
            let charIndex = sumResult % letters.length;
            decodedMessage += letters[charIndex];
        }
    }
    
    return decodedMessage.trim();
}
