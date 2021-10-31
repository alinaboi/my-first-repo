//There  are two arrays with individual  values, write a JavaScript program  to compute  the sum  of each individual  index  value from  the given arrays and  save them  to third array.

function sumOfTwoArrays(firstArrayGiven, secondArrayGiven) {
    let result = [];
    let index = 0;

    if (firstArrayGiven.length === 0)
        return "firstArrayGiven is empty";
    if (secondArrayGiven.length === 0)
        return "secondArrayGiven is empty";

    while (index < firstArrayGiven.length && index < secondArrayGiven.length) {
        result.push(firstArrayGiven[index] + secondArrayGiven[index]);
        index++;
    }

    if (index === firstArrayGiven.length) {
        for (index; index < secondArrayGiven.length; index++) {
            result.push(secondArrayGiven[index]);
        }
    } else {
        for (index; index < firstArrayGiven.length; index++) {
            result.push(firstArrayGiven[index]);
        }
    }
    return result;
}
let firstArrayGiven = [10, 12, 4, 72, 990, 01, 56, 8, 39];
let secondArrayGiven = [25, 33, 17, 6, 1, 40, 101, 8, 0];

console.log(sumOfTwoArrays(firstArrayGiven, secondArrayGiven));
