function roundToPrecision(number, precision) {
   
    precision = Math.min(precision, 15);

   
    let roundedNumber = parseFloat(number.toFixed(precision));

   
    roundedNumber = roundedNumber.toString();

    
    console.log(roundedNumber);
}


