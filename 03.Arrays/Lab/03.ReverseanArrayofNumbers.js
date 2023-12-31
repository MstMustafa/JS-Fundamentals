function arrayofNumbers(n,arr)
{
    let newArray = []

    for(let i = 0 ; i <n ; i++)
    {
        let number = arr[i]
        newArray.push(number)

    }
    
    console.log(newArray.reverse().join(" "))

}
