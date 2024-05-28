function registerHeroes(input) {

    const heroes = [];

    input.forEach(heroString => {

        let [name, level, items] = heroString.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

     
        heroes.push({ name, level, items });
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}
