function manageAddressBook(input) {
    const addressBook = {};

    input.forEach(entry => {
        const [name, address] = entry.split(':');
        addressBook[name] = address;
    });

    Object.keys(addressBook)
        .sort()
        .forEach(name => {
            console.log(`${name} -> ${addressBook[name]}`);
        });
}
