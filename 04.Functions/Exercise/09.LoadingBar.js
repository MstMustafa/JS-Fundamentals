function loadingBar(number) {
    let bar = '';
    for (let i = 0; i < 100; i += 10) {
        if (i < number) {
            bar += '%';
        } else {
            bar += '.';
        }
    }

    if (number === 100) {
        console.log('100% Complete!');
        console.log(`[${bar}]`);
    } else {
        console.log(`${number}% [${bar}]`);
        console.log('Still loading...');
    }
}
