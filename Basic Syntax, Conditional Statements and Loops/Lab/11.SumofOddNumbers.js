function summofOddNumbers(n)
{
   let counter = Number(n)

   let counter2 = 0

   let sum = 0
    
   for(let i = 1 ; counter2 < counter ; i++)
   {
      if (i % 2 !== 0)
      {
          sum += i
          console.log(i)
          
          counter2++
      }
   }
   console.log(`Sum: ${sum}`)

}
