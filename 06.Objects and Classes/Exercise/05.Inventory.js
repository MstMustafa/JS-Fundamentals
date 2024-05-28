function registerHeroes(input) {

    const heroes = [];

    input.forEach(heroString => {

        let [name, level, items] = heroString.split(' / ');
        level = Number(level); // Convert level from string to number
        items = items ? items.split(', ') : []; // Split items into an array, or default to empty array if no items

     
        heroes.push({ name, level, items });
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}
