function mergeArrays(firstArray,secondArray)
{
         
    let thirdArray = [];

    for(let i =0 ; i < firstArray.length ; i++)
    {
          if(i % 2 ===0)
          {
             thirdArray.push(Number(firstArray[i]) + Number(secondArray[i]))

          }else
          {
            thirdArray.push(firstArray[i] + secondArray[i])
          }


    }


   console.log(thirdArray.join(` - `))


}
