//Write a JavaScript function to check if given string includes given symbol. 

function checkTheSymbol(string, symbol) {
    if(string.indexOf(symbol) !== -1) {
        return true;
    } else {
        return false;
    }
}
function returnMessage(string, symbol) {
    if(checkTheSymbol(string, symbol) === true) {
        return  "The symbol was found";
    } else {
        return  "The symbol wasn't found";
    }
}
 console.log(returnMessage("A system is only as effective as your level of commitment to it.", "f"));
 console.log(returnMessage("A system is only as effective as your level of commitment to it.", "1"));
 console.log(returnMessage("A system is only as effective as your level of commitment to it.", "z"));
 console.log(returnMessage("A system is only as effective as your level of commitment to it.", "."));
