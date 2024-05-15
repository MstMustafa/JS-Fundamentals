function extractEmails(input) {
    const pattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))/g;

    const matches = input.match(pattern);

    if (matches) {
        matches.forEach(email => console.log(email));
    } else {
        console.log("No valid emails found.");
    }
}
