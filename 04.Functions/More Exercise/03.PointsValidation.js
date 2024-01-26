function checkPoints(points) {
    let [x1, y1, x2, y2] = points;

    let checkDistance = (x1, y1, x2, y2) => {
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance === Math.round(distance);
    };

    console.log(`{${x1}, ${y1}} to {0, 0} is ${checkDistance(x1, y1, 0, 0) ? 'valid' : 'invalid'}`);

    console.log(`{${x2}, ${y2}} to {0, 0} is ${checkDistance(x2, y2, 0, 0) ? 'valid' : 'invalid'}`);

    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkDistance(x1, y1, x2, y2) ? 'valid' : 'invalid'}`);
}
