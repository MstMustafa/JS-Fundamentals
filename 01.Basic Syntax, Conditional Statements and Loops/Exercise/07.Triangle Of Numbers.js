function triangleofNumbers(n)
{

    for (let i = 1 ; i <= n ; i++)
    { 
        let row = "";
        for(let y = 1 ; y <= i; y++)
            {
                 row  += i + " ";
            }

            console.log(row)
    }

}
