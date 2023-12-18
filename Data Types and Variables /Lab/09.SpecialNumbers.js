function specialn(n)
{

for(let i = 1 ; i <= n ; i++)
{
    let specNum = i
    
    if(specNum >= 10)
    {
        let numberString = specNum.toString()
        let firstDigit = Number(numberString[0])
        let secondDigit = Number(numberString[1])
        let sum = firstDigit + secondDigit
        specNum = sum
    }

    if(specNum === 5 || specNum === 7 || specNum ===11)
    {
        console.log(`${i} -> True `)
    }else
    {
        console.log(`${i} -> False `)
    }


}
  
}
