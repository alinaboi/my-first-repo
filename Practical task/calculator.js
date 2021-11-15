
export function calculator(firstNumber, operator, secondNumber) {
    let result;
    try {
        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            throw new Error('Error. Your input is not correct.');
        } 
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                //console.log(`${firstNumber} + ${secondNumber} = ${result}`);
                return result;

            case '-':
                result = firstNumber - secondNumber;
                //console.log(`${firstNumber} - ${secondNumber} = ${result}`);
                return result;

            case '*':
                result = firstNumber * secondNumber;
                //console.log(`${firstNumber} * ${secondNumber} = ${result}`);
                return result;

            case '/':
                if (secondNumber == 0) {
                    throw new Error('Error. Cannot devide by 0.');
                }
                result = firstNumber / secondNumber;
                //console.log(`${firstNumber} / ${secondNumber} = ${result}`);
                return result;

            default:
                //console.log('Invalid operator');
                return 'Invalid operator';
        }
    } catch (error) {
        console.log(error.message);
        return 'Error was found!';
    }
};


/*calculator(4, '+', 2);
calculator(4, '*', 2);
calculator(4, '/', 0);
calculator(4, '+', 'aaa');
calculator(4, '-', '2..');
calculator(4, '-', '2px');
calculator(4, '/', true);
calculator('aaa', '*', 2);
calculator(4, 3, 2);*/
