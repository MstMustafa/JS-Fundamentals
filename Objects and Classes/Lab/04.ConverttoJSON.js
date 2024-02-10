function convert(name,lastName,eyeColour)
{
    let myObj = {
        name ,
        lastName ,
        hairColor : eyeColour
    }

    let str = JSON.stringify(myObj)

    console.log(str)

}
