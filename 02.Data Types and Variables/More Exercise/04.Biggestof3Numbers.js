function biggestofThree( a , b, c)
{

   let theBiggestofThree = 0

   if( a > b)
   {
    theBiggestofThree += a
   }else
   {
    theBiggestofThree +=b
   }

   if(theBiggestofThree < c )
   {
    theBiggestofThree = c
   }


   console.log(theBiggestofThree)

}
