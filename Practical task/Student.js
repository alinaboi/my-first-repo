export class Student {
    constructor(firstName, lastName, rate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rate = rate;
    }
    displayInfo() {
        console.log(this.firstName, this.lastName, this.rate);
    }
}