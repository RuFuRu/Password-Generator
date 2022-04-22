const rangeInput = document.querySelector('.range-div input[type = "range"]');
const numInput = document.querySelector('.range-div input[type = "number"]');
const ascii = document.querySelector('#ascii');
const utf16 = document.querySelector('#utf16');
const display = document.querySelector('.display');
const button = document.querySelector('button');

if(display.textContent === '') {
    display.setAttribute('style', 'padding: 1rem;')
}

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
let clicked = 0;

function generatePassword() {
    display.setAttribute('style', 'padding: 0.5rem');
    numInputValue = parseInt(numInput.value);
    rangeInputValue = parseInt(rangeInput.value);
    let random;

    if(typeof numInputValue !== 'number' || numInputValue < 1 || numInputValue > 100) {
        alert("Bad Input!");
    }
    
    if(utf16.checked) {

        if(clicked === 1) {
            display.textContent = '';
            clicked = 0;
        }

        for(let i = 1; i <= numInputValue; i++) {
            random = randomInt(33,65535);
            display.textContent += String.fromCharCode(random);
        }
        
        clicked++;
    }

    if(ascii.checked) {
        if(clicked === 1) {
            display.textContent = '';
            clicked = 0;
        }

        for(let i = 1; i <= numInputValue; i++) {
            random = randomInt(33,126);
            display.textContent += String.fromCharCode(random);
        }

        clicked++;

    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}