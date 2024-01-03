function commonElements(firstArray ,secondArray)
{
    let buff = "";
        for(let index = 0 ; index < firstArray.length ; index++)
        {
           let commmand = firstArray[index]

             if(secondArray.includes(commmand))
             { 
                    buff += commmand + "\n"
             }
        }

  console.log(buff)

}
