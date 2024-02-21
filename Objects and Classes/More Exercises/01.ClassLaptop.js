class Laptop {
    constructor(info, quality) {
        this.info = info; // Object containing producer, age, and brand
        this.isOn = false; // Boolean, false by default
        this.quality = quality; // Number
    }

    turnOn() {
        this.isOn = true;
        this.quality -= 1; // Decrease quality by 1
    }

    turnOff() {
        this.isOn = false;
        this.quality -= 1; // Decrease quality by 1
    }

    showInfo() {
        return JSON.stringify(this.info); // Return info as JSON
    }

    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5); // Calculate price
    }
}
