function processCatsAndMeow(catStrings) {
  function meow(name, age) {
    console.log(`${name}, age ${age} says Meow`);
  }

  for (const catString of catStrings) {
    const parts = catString.split(' ');
    const name = parts.slice(0, -1).join(' ');
    const age = parts[parts.length - 1];
    meow(name, age);
  }
}
