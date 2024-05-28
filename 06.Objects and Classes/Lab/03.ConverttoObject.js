function convert(obj)
{
   let personalInfo = JSON.parse(obj)

   for(let key in personalInfo)
   {
        console.log(`${key}: ${personalInfo[key]}`)
   }


}
