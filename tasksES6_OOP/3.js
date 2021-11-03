//Call method of father’s class.

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

    displayAge() {
        const yearNow = 2021;
        console.log(yearNow - this.year);
    }
}
class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }
    displayInfo() {
        console.log('It is message from child class! Calling parent\'s method.')
        super.displayInfo()
    }

    displayAge() {
        return super.displayAge()
    }

    transportContainer() {
        console.log(`I am starting transporting heavy contairner`);
        console.log('Displaying basic information about the truck:');
        super.displayInfo()
    }
}

const honda = new Truck("Honda Ridgeline", 2017, 240);

honda.displayInfo();
honda.displayAge();
honda.transportContainer();