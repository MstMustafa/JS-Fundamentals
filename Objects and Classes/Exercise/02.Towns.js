function parseAndPrintTable(input) {
  
  input.forEach(row => {
    const parts = row.split(" | ");
    const town = parts[0];
   
    const latitude = Number(parts[1]).toFixed(2);
    const longitude = Number(parts[2]).toFixed(2);

    
    console.log(`{ town: '${town}', latitude: '${latitude}', longitude: '${longitude}' }`);
  });
}
