//Write a JavaScript function with conditional statement to sort three numbers .

function threeNumSorting(a, b, c) {
    const firstResult = [c, b, a];
    const secondResult = [b, c, a];
    const thirdResult = [a, b, c];
    const fourthResult = [b, a, c];
    const fifthResult = [c, a, b];
    const sixthResult = [a, c, b];

    if (a >= b && a>= c) {
        if (b>= c) {
            return firstResult;
        } else {
            return secondResult;
        }
    } else if (b>= a && b>= c) {
        if (a>= c) {
            return fifthResult;
        } else {
            return sixthResult;
        }
    } else if (c>= a && c>= b) {
        if (a>= b) {
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
console.log(threeNumSorting(0.5, 0.5, 0.5));