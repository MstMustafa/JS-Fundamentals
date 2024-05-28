function login(input)
{
   let username = input[0]

   let password = username.split("").reverse().join("");

   let counter = 0

   let index = 1
   let command = input[index]
   index++

   while (command !== password)
   {
    counter++

    if(counter === 4)
    {
        console.log(`User ${username} blocked!`)
        return;
    }

    console.log(`Incorrect password. Try again.`)
  
    command = input[index]
    index++

   }
   
   console.log(`User ${username} logged in.`)

}
