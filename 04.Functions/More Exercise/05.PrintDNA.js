function printDNAHelix(length) {
    const sequence = "ATCGTTAGGG";
    let sequenceIndex = 0;

    for (let i = 0; i < length; i++) {
        switch (i % 4) {
            case 0:
                console.log(`**${sequence[sequenceIndex % 10]}${sequence[(sequenceIndex + 1) % 10]}**`);
                break;
            case 1:
                console.log(`*${sequence[sequenceIndex % 10]}--${sequence[(sequenceIndex + 1) % 10]}*`);
                break;
            case 2:
                console.log(`${sequence[sequenceIndex % 10]}----${sequence[(sequenceIndex + 1) % 10]}`);
                break;
            case 3:
                console.log(`*${sequence[sequenceIndex % 10]}--${sequence[(sequenceIndex + 1) % 10]}*`);
                break;
        }
        sequenceIndex += 2;
    }
}
