function partyTime(input) {
  let vipGuests = [];
  let regularGuests = [];
  let partyIndex = input.indexOf('PARTY');

  for (let i = 0; i < partyIndex; i++) {
    if (/\d/.test(input[i][0])) {
      vipGuests.push(input[i]);
    } else {
      regularGuests.push(input[i]);
    }
  }

  for (let i = partyIndex + 1; i < input.length; i++) {
    let guest = input[i];
    let vipIndex = vipGuests.indexOf(guest);
    let regIndex = regularGuests.indexOf(guest);

    if (vipIndex !== -1) {
      vipGuests.splice(vipIndex, 1);
    } else if (regIndex !== -1) {
      regularGuests.splice(regIndex, 1);
    }
  }

  let remainingGuests = vipGuests.concat(regularGuests);
  console.log(remainingGuests.length);
  remainingGuests.forEach(guest => console.log(guest));
}
