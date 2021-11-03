//Replicate code from slide 11, create instances of car and truck. Try to call different methods for both, investigate output using console.log().

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
}
class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportContainer() {
        console.log(`I am starting transporting heavy contairner`);
    }
}
const audi = new Car("Audi A8", 2021, 250);
const chevrolet = new Car("Chevrolet Corvette", 2018, 300);
const honda = new Truck("Honda Ridgeline", 2017, 240);

console.log('Displaying info about Vehicles in my garage:')
audi.displayInfo();
honda.displayInfo();
chevrolet.transportPeople();
honda.transportContainer();