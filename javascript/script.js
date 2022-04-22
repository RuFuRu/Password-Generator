const rangeInput = document.querySelector('.range-div input[type = "range"]');
const numInput = document.querySelector('.range-div input[type = "number"]');
const radioAscii = document.querySelector('#ascii');
const utf16 = document.querySelector('#utf16');
const display = document.querySelector('.display');
const button = document.querySelector('button');

numInput.value = rangeInput.value

rangeInput.addEventListener('input', () => {
    numInput.value = rangeInput.value;
})

numInput.addEventListener('input', () => {
    rangeInput.value = numInput.value;
})

button.addEventListener('click', generatePassword);


let numInputValue;
let rangeInputValue;

function generatePassword() {
    numInputValue = parseInt(numInput.value);
    rangeInputValue = parseInt(rangeInput.value);

    if(typeof numInputValue !== 'number' || numInputValue < 1 || numInputValue > 100) {
        alert("Bad Input!");
    }
    console.log(numInputValue);
}