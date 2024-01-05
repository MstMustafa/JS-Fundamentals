function printNelement(input)
{
    let Nstep = Number(input[input.length-1])
    let buff=""
    for(let i = 0;i<input.length-1;i++)
    {
        let number = input[i]
        buff +=number + " "

        i += Nstep - 1

    }

 console.log(buff)

}
