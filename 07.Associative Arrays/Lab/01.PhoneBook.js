function createPhoneBook(arr) {
    const phoneBook = {};

    arr.forEach(entry => {
        const [name, number] = entry.split(' ');
        phoneBook[name] = number;
    });

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
