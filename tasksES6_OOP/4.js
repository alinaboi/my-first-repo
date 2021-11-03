//Override method of father’s class.

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
        console.log('100 years! I\'m an overrided method! I will display the same output for every Object!!!')
    }

    transportContainer() {
        console.log(`I am starting transporting heavy contairner`);
        console.log('Displaying basic information about the truck:');
        super.displayInfo()
    }
}

const honda = new Truck("Honda Ridgeline", 2017, 240);
const hondaNew = new Truck("Honda Ridgeline New Super Special Edition", 2021, 940);

honda.transportContainer();
honda.displayInfo();
console.log('Verifying that the method of Truck is called:');
honda.displayAge();
hondaNew.displayAge();
