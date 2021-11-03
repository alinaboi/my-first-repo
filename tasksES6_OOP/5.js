//Move classes to separate files and import them into the app using import/export.
import {
    Car
} from "./Car.js";
import {
    Truck
} from "./Truck.js";

const audi = new Car("Audi A8", 2021, 250);
const honda = new Truck("Honda Ridgeline", 2017, 240);

console.log('Starting testing method of Car Object:');
audi.displayInfo();

console.log('Starting testing method of Truck Object:');
honda.displayInfo();

console.log('Testing was finished successfuly!');