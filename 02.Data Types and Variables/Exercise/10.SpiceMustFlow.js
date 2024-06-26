function spiceMining(startingYield) {
    const dailyDecrease = 10;
    const minimumYield = 100;
    const spiceConsumedPerDay = 26;

    let days = 0;
    let totalSpiceExtracted = 0;

    while (startingYield >= minimumYield) {
        totalSpiceExtracted += startingYield;
        startingYield -= dailyDecrease;
        totalSpiceExtracted -= spiceConsumedPerDay;

        days++;
    }

    totalSpiceExtracted -= spiceConsumedPerDay;

    console.log(days);
    console.log(totalSpiceExtracted < 0 ? 0 : totalSpiceExtracted);
}
