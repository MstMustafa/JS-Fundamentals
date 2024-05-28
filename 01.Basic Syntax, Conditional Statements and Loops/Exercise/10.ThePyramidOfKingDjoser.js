function calculateResources(baseSide, blockHeight) {
    baseSide = Number(baseSide);
    blockHeight = Number(blockHeight);
    let stoneTotal = 0;
    let marbleTotal = 0;
    let lapisTotal = 0;
    let goldTotal = 0;
    
    let floor = 0;

    while (baseSide > 1) {
        let totalBlocks = baseSide * baseSide * blockHeight;
        let innerBlocks = (baseSide - 2) * (baseSide - 2) * blockHeight;
        let outerBlocks = totalBlocks - innerBlocks;

        if (baseSide - 2 === 0) {
            break;
        }

        floor++;
        baseSide -= 2;

        if (floor % 5 === 0) {
            lapisTotal += outerBlocks;
            stoneTotal += innerBlocks;
        } else {
            marbleTotal += outerBlocks;
            stoneTotal += innerBlocks;
        }
    }

    floor++;
    let finalHeight = Math.floor(floor * blockHeight);
    goldTotal += Math.ceil(baseSide * baseSide * blockHeight);

    console.log(`Stone required: ${Math.ceil(stoneTotal)}`);
    console.log(`Marble required: ${Math.ceil(marbleTotal)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisTotal)}`);
    console.log(`Gold required: ${Math.ceil(goldTotal)}`);
    console.log(`Final pyramid height: ${finalHeight}`);
}
