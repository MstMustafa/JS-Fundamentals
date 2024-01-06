function dungeon(dungeon)
{
    let dungeontoString = dungeon[0]
    let adventure = dungeontoString.split(`|`)

    let initialHealth = 100;
    let currentCoins= 0;

    let bestRoom = 0

    let Madeit = true

   for(let index of adventure)
   {
      let [encounter , gold] = index.split(" ");
      gold = Number(gold)
      bestRoom++

      if(encounter === "potion")
      {
        
             initialHealth += gold
             if(initialHealth > 100)
             {
                let advanced = initialHealth - 100
                gold -= advanced
                initialHealth = 100

             }


             console.log(`You healed for ${gold} hp.`) 
              console.log(`Current health: ${initialHealth} hp.`)

      }else if(encounter === "chest")
      {
        currentCoins += gold
        console.log(`You found ${gold} coins.`)
      }else
      {
         initialHealth -= gold

         if(initialHealth > 0)
         {
            console.log(`You slayed ${encounter}.`)
         }else
         {
            console.log(`You died! Killed by ${encounter}.`)
            console.log(`Best room: ${bestRoom}`)
            Madeit = false
            break;
            
         }
      }

   }
     
   if(Madeit == true)
   {

   
     console.log(`You've made it!`)
     console.log(`Coins: ${currentCoins}`)
     console.log(`Health: ${initialHealth}`)}

}
