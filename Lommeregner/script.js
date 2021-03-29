class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


//Event for adding numbers to the calculator CurrentOperandTextElement
numberButtons.forEach(n => n.addEventListener('click', () => {currentOperandTextElement.innerHTML = currentOperandTextElement.innerHTML + n.innerHTML}));

//Event for clearing numbers in CurrentOperandTextElement
allClearButtons.addEventListener('click', () => {
currentOperandTextElement.innerHTML = '';
previousOperandTextElement.innerHTML = '';
});

//Event for deleting one number in CurrentOperandTextElement
deleteButtons.addEventListener('click', () => {currentOperandTextElement.innerHTML = currentOperandTextElement.innerHTML.slice(0,-1)});

//Event for operations
operationButtons.forEach(n => n.addEventListener('click', () => {
currentOperandTextElement.innerHTML = currentOperandTextElement.innerHTML + ' ' + n.innerHTML;
previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML;
currentOperandTextElement.innerHTML = '';
}))

function addNumberString(number, addNumberToString) {



return number.innerHTML =+ addNumberToString;
}


function checkNumber() {
console.log(currentOperandTextElement.innerHTML);
};

