//Add static method to one class, try to call it and investigate output.

class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }

    displayInfo() {
        console.log(`Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`)
    }
}
class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log(`I am starting transporting passengers`);
    }

    static getModel(a) {
        return a.model;
    }

    static nameMaxSpeed(a) {
        return `The car can speed up to a speed of ${a.maxSpeed} km/h.`;
    }
}

const audi = new Car("Audi A8", 2021, 250);
const chevrolet = new Car("Chevrolet Corvette", 2018, 300);

console.log(Car.getModel(audi));
console.log(Car.getModel(chevrolet));
console.log(Car.nameMaxSpeed(audi));
