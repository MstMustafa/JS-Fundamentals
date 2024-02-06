function updateInventory(commands) {
    let inventory = commands[0].split(' ');

    for (let i = 1; i < commands.length; i++) {
        let [action, item] = commands[i].split(' ', 2);
        
        if (action === 'Buy' && !inventory.includes(item)) {
            inventory.push(item);
        } else if (action === 'Trash') {
            inventory = inventory.filter(equip => equip !== item);
        } else if (action === 'Repair') {
            if (inventory.includes(item)) {
                inventory = inventory.filter(equip => equip !== item);
                inventory.push(item);
            }
        } else if (action === 'Upgrade') {
            let [equipment, upgrade] = item.split('-', 2);
            let index = inventory.indexOf(equipment);
            
            if (index !== -1) {
                inventory.splice(index + 1, 0, `${equipment}:${upgrade}`);
            }
        }
    }

    console.log(inventory.join(' '));
}
