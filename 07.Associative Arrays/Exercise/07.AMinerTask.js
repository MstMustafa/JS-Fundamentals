function collectResources(input) {
    const resources = {};

    for (let i = 0; i < input.length; i += 2) {
        const resource = input[i];
        const quantity = parseInt(input[i + 1], 10);

        if (!resources[resource]) {
            resources[resource] = 0;
        }
        resources[resource] += quantity;
    }

    for (const resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`);
    }
}
