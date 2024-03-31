function generatePassword(strings) {
    const [firstString, secondString, replacementString] = strings;
    let concatenatedString = firstString + secondString;
    let password = '';
    let replacementIndex = 0;

    for (let i = 0; i < concatenatedString.length; i++) {
        let char = concatenatedString.charAt(i);
        if ('aeiouAEIOU'.includes(char)) {
            password += replacementString[replacementIndex].toUpperCase();
            replacementIndex = (replacementIndex + 1) % replacementString.length;
        } else {
            password += char.toLowerCase();
        }
    }

    password = password.split('').reverse().join('');

    console.log(`Your generated password is ${password}`);
}
