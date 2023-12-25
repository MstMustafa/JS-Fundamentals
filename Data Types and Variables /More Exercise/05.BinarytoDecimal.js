function binarytoDecimal(binary)
{
     let arraysBinary = binary.split(" ");
     let binaryNum = arraysBinary[0]
     
     let sum = 0
     let counter = 0

     for(let index = binaryNum.length-1 ; index >= 0; index--)
     {
              let number = binaryNum[index]
              sum += number * Math.pow(2, counter)

              counter++
 
     }

     console.log(sum)

}
