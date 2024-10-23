const body = document.querySelector('body');
const val1 = document.querySelector('#val1');
const val2 = document.querySelector('#val2');
const calc = document.querySelector('#calculate0');
const sum = document.querySelector('#sum');
const dif = document.querySelector('#dif');
const pro = document.querySelector('#pro');
const div = document.querySelector('#div');

const res = document.createElement('h2');

function calculate() {
    let value1 = Number(val1.value);
    let value2 = Number(val2.value);
    let resValue = 0;
    if (sum.checked) {
        resValue = value1 + value2;
    } else if (dif.checked) {
        resValue = value1 - value2;
    } else if (pro.checked) {
        resValue = value1 * value2;
    } else {
        resValue = value1 / value2;
    }
    resValue = `The calculted value is: ${resValue}`;
    res.innerHTML = resValue;
    body.append(res);
}