function extractValidNames(input) {

    const regex = /\b[A-Z][a-z]+\s[A-Z][a-z]+\b/g;
    let match;
    let validNames = [];

    while ((match = regex.exec(input)) !== null) {
        validNames.push(match[0]);
    }

    console.log(validNames.join(' '));
}
