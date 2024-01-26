function numberModification(num)
{
    let numbertoStr = num.toString();
    let allNumbers=0
    let averageNum = 0
    let counter= 0

   for(let index = 0 ; index < numbertoStr.length ; index++)
   {

     let number= Number(numbertoStr[index])
     counter++
     allNumbers+= number
   }
   averageNum = allNumbers / counter

if(averageNum < 5)
{
            
    while(averageNum < 5)
    {
        counter++
        allNumbers+=9
        numbertoStr+=9

        averageNum = allNumbers / counter

        if(averageNum >5)
        {
            break;
        }
    }

}

console.log(numbertoStr);

}
