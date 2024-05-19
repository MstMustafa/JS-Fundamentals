function merlahShake(input) {
    let text = input[0];
    let pattern = input[1];

    while (pattern.length > 0) {
        let firstMatch = text.indexOf(pattern);
        let lastMatch = text.lastIndexOf(pattern);

        if (firstMatch > -1 && lastMatch > -1 && firstMatch !== lastMatch) {
            text = text.substring(0, firstMatch) + text.substring(firstMatch + pattern.length);
            lastMatch = text.lastIndexOf(pattern);
            text = text.substring(0, lastMatch) + text.substring(lastMatch + pattern.length);

            if (pattern.length > 1) {
                let removeFromPattIndex = Math.floor(pattern.length / 2);
                pattern = pattern.substring(0, removeFromPattIndex) + pattern.substring(removeFromPattIndex + 1);
            } else {
                pattern = "";
            }

            console.log('Shaked it.');
        } else {
            break;
        }
    }

    console.log('No shake.');
    console.log(text);
}
