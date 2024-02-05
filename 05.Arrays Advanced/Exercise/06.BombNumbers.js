function detonateSequence(sequence, bombInfo) {
    let [bombNumber, power] = bombInfo;
    
    while (sequence.includes(bombNumber)) {
        let bombIndex = sequence.indexOf(bombNumber);
        
        let startIndex = Math.max(0, bombIndex - power);
        let endIndex = Math.min(sequence.length - 1, bombIndex + power);
        
        sequence.splice(startIndex, endIndex - startIndex + 1);
    }
    
    let sumRemaining = 0;
    for (let i = 0; i < sequence.length; i++) {
        sumRemaining += sequence[i];
    }
    
    console.log(sumRemaining);
}
