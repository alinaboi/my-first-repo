//Write a JavaScript function with conditional statement to sort three numbers .

function threeNumSorting(a, b, c) {
    let firstResult = [c, b, a];
    let secondResult = [b, c, a];
    let thirdResult = [a, b, c];
    let fourthResult = [b, a, c];
    let fifthResult = [c, a, b];
    let sixthResult = [a, c, b];

    if (a > b && a > c) {
        if (b > c) {
            return firstResult;
        } else {
            return secondResult;
        }
    } else if (b > a && b > c) {
        if (a > c) {
            return fifthResult;
        } else {
            return sixthResult;
        }
    } else if (c > a && c > b) {
        if (a > b) {
            return fourthResult;
        } else {
            return thirdResult;
        }


    } else {
        return 'Please, enter digits only.';
    }
}

console.log(threeNumSorting(4, 0, 1));
console.log(threeNumSorting(78, 9, 105));
console.log(threeNumSorting(-2, 22, -2));
console.log(threeNumSorting(12, 7, "digit"));