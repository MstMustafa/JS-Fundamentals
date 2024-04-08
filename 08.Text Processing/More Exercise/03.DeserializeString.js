function deserializeString(input) {
  let resultArray = [];
  
  for (let i = 0; i < input.length - 1; i++) {
    let [letter, indices] = input[i].split(':');
    let positions = indices.split('/').map(Number);
    
    positions.forEach(position => {
      resultArray[position] = letter;
    });
  }
  
  return resultArray.join('');
}
