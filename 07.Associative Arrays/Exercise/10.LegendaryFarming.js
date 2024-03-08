function legendaryFarming(input) {
    const keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    const junk = {};
    let legendaryObtained = '';
    let legendaryItems = {
        shards: "Shadowmourne",
        fragments: "Valanyr",
        motes: "Dragonwrath"
    };

    const materials = input.split(' ');
    for (let i = 0; i < materials.length; i += 2) {
        let quantity = parseInt(materials[i]);
        let material = materials[i + 1].toLowerCase();

        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += quantity;
            if (keyMaterials[material] >= 250 && !legendaryObtained) {
                keyMaterials[material] -= 250; 
                legendaryObtained = legendaryItems[material];
                break; 
            }
        } else {
            if (!junk[material]) junk[material] = 0;
            junk[material] += quantity;
        }
    }

    if (legendaryObtained) {
        console.log(`${legendaryObtained} obtained!`);
    }

    Object.entries(keyMaterials)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(([material, quantity]) => console.log(`${material}: ${quantity}`));

    // Sorting and printing junk items
    Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([material, quantity]) => console.log(`${material}: ${quantity}`));
}
