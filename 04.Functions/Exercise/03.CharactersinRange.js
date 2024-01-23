function printCharactersBetween(char1, char2) {
   
    let startCode = char1.charCodeAt(0);
    let endCode = char2.charCodeAt(0);

    
    if (startCode > endCode) {
        [startCode, endCode] = [endCode, startCode];
    }
   
    let characters = [];

    for (let i = startCode + 1; i < endCode; i++) {
        characters.push(String.fromCharCode(i));
    }

   
    console.log(characters.join(' '));
}
