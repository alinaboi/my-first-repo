import chance from 'chance';
import fs from 'fs';
import {
    Student
} from './Student.js'

let randomFirstName = chance().first();
let randomLastName = chance().last();
let randomRate = Math.trunc((Math.random() * 100) + 1);


let firstStudent = new Student(randomFirstName, randomLastName, randomRate);
console.log(firstStudent);

myTask(firstStudent);

function myTask(object) {
    const fileName = 'studentInfo.txt';

    try {
        fs.writeFileSync(fileName, JSON.stringify(object));

        let objectFromFile = JSON.parse(fs.readFileSync(fileName, 'utf-8'));
        console.log(objectFromFile);

        objectFromFile.firstName = 'Richard';

        console.log(objectFromFile.firstName);
        console.log(objectFromFile);

        fs.appendFileSync(fileName, '\n' + JSON.stringify(objectFromFile));
        console.log(fs.readFileSync(fileName, 'utf-8'));
    } catch (error) {
        console.error('Oops! Something went wrong.', error);
    }
};