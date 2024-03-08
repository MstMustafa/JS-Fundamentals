function sortTravelDestinations(travelData) {
    const destinationsMap = createDestinationsMap(travelData);

    function createDestinationsMap(dataArray) {
        const destinations = {};

        dataArray.forEach(entry => {
            const [country, city, priceStr] = entry.split(" > ");
            const price = Number(priceStr);

            if (!destinations[country]) {
                destinations[country] = {};
            }

            if (!destinations[country][city] || destinations[country][city] > price) {
                destinations[country][city] = price;
            }
        });

        return destinations;
    }

    const sortedCountries = Object.keys(destinationsMap).sort((a, b) => a.localeCompare(b));

    sortedCountries.forEach(country => {
        console.log(`${country} -> ${formatCityPrices(destinationsMap[country])}`);
    });

    function formatCityPrices(cities) {
        const sortedCities = Object.entries(cities).sort((a, b) => a[1] - b[1]);
        const formattedCities = sortedCities.map(([cityName, price]) => `${cityName} -> ${price}`);
        return formattedCities.join(' ');
    }
}
