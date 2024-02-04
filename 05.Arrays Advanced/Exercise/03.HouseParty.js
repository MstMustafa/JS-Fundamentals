function trackHouseParty(guestsInput) {
  let guestsList = [];

  for (let i = 0; i < guestsInput.length; i++) {
    let [name, action] = guestsInput[i].split(' is ');
    if (action === 'going!') {
      if (guestsList.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guestsList.push(name);
      }
    } else if (action === 'not going!') {
      if (guestsList.includes(name)) {
        guestsList = guestsList.filter(guest => guest !== name);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }

  guestsList.forEach(guest => console.log(guest));
}
