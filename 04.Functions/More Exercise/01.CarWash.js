function carWash(arr)
{
    let cleanStatus = 0

     for(let index = 0 ; index < arr.length ; index++)
     {
        let command = arr[index]

        if(command === "soap")
        {
            cleanStatus +=10
        }else if(command === "water")
        {
            cleanStatus += cleanStatus * 0.2
        }else if(command === "vacuum cleaner")
        {
            cleanStatus += cleanStatus * 0.25
        }else if(command === "mud")
        {
            cleanStatus = cleanStatus - (cleanStatus * 0.1 )
        }
     }

   console.log(`The car is ${cleanStatus.toFixed(2)}% clean.`)

}
