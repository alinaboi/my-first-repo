//Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Name Surname")) – should be “N.S.” (should convert lower case names to upper)

function abbreviatedForm(string) {

    let arrayGiven = string.trim().split(" ");
    let result = [];
    let index = 0;

    if (arrayGiven.length === 0)
        return "Given string is empty";

    while (index < arrayGiven.length) {
        result.push(arrayGiven[index].charAt(0) + ". ");
        index++;
    }
    return result.join(' ').toUpperCase();
}



console.log(abbreviatedForm("name surname"));
console.log(abbreviatedForm("Жак ів кусто"));
console.log(abbreviatedForm("cost per click"));