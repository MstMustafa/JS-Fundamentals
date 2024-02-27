function solve(input) {

    const storage = new Map();
    
    input.forEach(item => {
        
        const [itemName, itemQuantity] = item.split(' ');
        const quantity = Number(itemQuantity);
        
        if (storage.has(itemName)) {
          
            storage.set(itemName, storage.get(itemName) + quantity);
        } else {
           
            storage.set(itemName, quantity);
        }
    });
    
    for (const [itemName, quantity] of storage) {
        console.log(`${itemName} -> ${quantity}`);
    }
}
