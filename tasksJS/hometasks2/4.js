//Write a JavaScript function that accept two integers and display the larger.

function comparingInt(a, b){
    if(a > b){
        return a + " is bigger";
    } else if(b > a){
        return b + " is bigger";
    } else if(b === a){
        return "The integers are equal.";
    } else {
        return "Please, try to enter other itegers.";
    }

}

console.log(comparingInt(20, 74));
console.log(comparingInt(01, 2));
console.log(comparingInt("name", 9));
console.log(comparingInt(9, 0.5));