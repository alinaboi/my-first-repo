//Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank). 

function blankStrCheck(string) {
    if (string.trim().length > 0) {
        return "The string is not blank";
    } else {
        return "The string is blank";
    }
}

console.log(blankStrCheck("  "));
console.log(blankStrCheck(""));
console.log(blankStrCheck("UserName99"));
console.log(blankStrCheck("!@#$%"));