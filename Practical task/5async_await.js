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

async function test(data) {
    try {
        displayResult(await sortNumber(data));
    } catch (e) {
        if (e !== 'error') {
            displayResult(e)
        } else {
            console.log('Error! It is not a number! Try again, please!')
        }
    }
}

console.log('Doing some testing...');
test(1);
test(2);
test('aaaa');