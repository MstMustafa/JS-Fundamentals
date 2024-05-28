function createSortedCatalog(products) {
    const productsArray = products.map(product => {
        const [name, price] = product.split(" : ");
        return { name, price: Number(price) };
    });

    productsArray.sort((a, b) => a.name.localeCompare(b.name));

    const groupedProducts = {};
    productsArray.forEach(product => {
        const initial = product.name[0];
        if (!groupedProducts[initial]) {
            groupedProducts[initial] = [];
        }
        groupedProducts[initial].push(product);
    });

    Object.entries(groupedProducts).forEach(([initial, products]) => {
        console.log(initial);
        products.forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    });
}
