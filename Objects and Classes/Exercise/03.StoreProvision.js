function updateStock(currentStock, newDelivery) {

  const stock = {};


  const addToStock = (item, quantity) => {
    if (stock[item]) {
      stock[item] += Number(quantity);
    } else {
      stock[item] = Number(quantity);
    }
  };


  for (let i = 0; i < currentStock.length; i += 2) {
    const item = currentStock[i];
    const quantity = currentStock[i + 1];
    addToStock(item, quantity);
  }


  for (let i = 0; i < newDelivery.length; i += 2) {
    const item = newDelivery[i];
    const quantity = newDelivery[i + 1];
    addToStock(item, quantity);
  }

  for (const [item, quantity] of Object.entries(stock)) {
    console.log(`${item} -> ${quantity}`);
  }
}
