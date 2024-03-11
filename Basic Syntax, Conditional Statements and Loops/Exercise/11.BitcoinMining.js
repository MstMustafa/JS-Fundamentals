function bitcoinMining(input) {

    let totalWonMoney = 0
    let dayofPurchase = 0
    let boughBitcoins = 0
    let days = 0

    for (let i = 0; i < input.length; i++) {

        days++
        let minedGold = Number(input[i])
        if(days === 3)
        {
              minedGold = minedGold * 0.70
              days=0
        }


        totalWonMoney += minedGold * 67.51

        
        if (totalWonMoney >= 11949.16)
         {
            while(totalWonMoney >=11949.16)
            {
            totalWonMoney -= 11949.16
            boughBitcoins++}

            if (dayofPurchase === 0) 
            {
                dayofPurchase += i + 1

            }

        }

    }

    console.log(`Bought bitcoins: ${boughBitcoins}`)

    if(dayofPurchase > 0)
    {
    console.log(`Day of the first purchased bitcoin: ${dayofPurchase}`)
    }

    console.log(`Left money: ${totalWonMoney.toFixed(2)} lv.`)

}
