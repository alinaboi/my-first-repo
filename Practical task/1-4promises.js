function sortNumber(data) {
    return new Promise((resolve, reject) => {
        if (typeof data === 'number') {
            if ((data % 2) !== 0) {
                setTimeout(() => {
                    resolve('odd');
                }, 1000);
            } else {
                setTimeout(() => {
                    reject('even');
                }, 2000);
            }
        } else {
            reject('error');
        }
    });
}

function displayResult(result) {
    console.log(`Your number is ${result}`);
}

console.log('Doing some testing...');
sortNumber(1)
    .then(r => displayResult(r))
    .catch(e => {
        if ('error' !== e) {
            displayResult(e);
        } else {
            console.log('Error! It is not a number! Try again, please!')
        }
    });

sortNumber(2)
    .then(r => displayResult(r))
    .catch(e => {
        if ('error' !== e) {
            displayResult(e);
        } else {
            console.log('Error! It is not a number! Try again, please!')
        }
    });

sortNumber('aaaa')
    .then(r => displayResult(r))
    .catch(e => {
        if ('error' !== e) {
            displayResult(e);
        } else {
            console.log('Error! It is not a number! Try again, please!')
        }
    });