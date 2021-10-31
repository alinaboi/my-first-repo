//Write a JavaScript function to get the last element  of an array.

//Here's the first option

function getTheLastElement(array) {
    return array.slice(-1).pop();
}

//And the second option

function getTheLastElementV2(array) {
    return array[(array.length -1)];
}

console.log(getTheLastElement([10, 12, 4, 72, 990, 01, 56, 8, 39]));
console.log(getTheLastElement(['cat', 'dog', 'parrot', 'rabit', 'rat', 'humster']));
console.log(getTheLastElement(['red', 'yellow', 'blue', 'brown', 'orange', 'green']));

console.log(getTheLastElementV2([10, 12, 4, 72, 990, 01, 56, 8, 39]));
console.log(getTheLastElementV2(['cat', 'dog', 'parrot', 'rabit', 'rat', 'humster']));
console.log(getTheLastElementV2(['red', 'yellow', 'blue', 'brown', 'orange', 'green']));


/* If you need to use the function to a string, thy this one:
function getTheLastElement(string){
    let coventedString = string.split(' ');
    let lastElement = coventedString.pop();
    return lastElement;
}

console.log(getTheLastElement("10, 12, 4, 72, 990, 01, 56, 8, 39"));
console.log(getTheLastElement("cat, dog, parrot, rabit, rat, humster"));
console.log(getTheLastElement("red, yellow, blue, brown, orange, green")); */