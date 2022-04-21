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


function generatePassword() {
    
}