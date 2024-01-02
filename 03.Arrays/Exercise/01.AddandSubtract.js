function modifyArray(numbers) {
    let modifiedArray = [];

    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let value = numbers[i];

        if (value % 2 === 0) {
           
            modifiedArray[i] = value + i;
        } else {
            
            modifiedArray[i] = value - i;
        }

       
        originalSum += value;
        modifiedSum += modifiedArray[i];
    }

    
    console.log(modifiedArray);

   
    console.log(originalSum);

    
    console.log(modifiedSum);
}
