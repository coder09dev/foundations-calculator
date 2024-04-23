function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "OOPS.. CAN'T DIVIDE BY 0";
    return a / b;
}

let number1, number2;
let operatorValue;
const display = document.querySelector(".display");

// get digits and update display
const digits = document.querySelectorAll(".digits");
let displayValue;

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (!displayValue) {
            display.textContent = '';
        }
        display.textContent += digit.textContent;
        displayValue = display.textContent;
    })
})

// clear button
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    display.textContent = '';
    number1 = '';
    number2 = '';
})

// operators
const operators = document.querySelectorAll(".operator");
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (!number1) {
            number1 = Number(displayValue);
        } else {
            number2 = Number(displayValue);
        }
        if (number1 && number2 && operatorValue) {
            const result = Math.round(operate(number1, number2, operatorValue));
            display.textContent = result + '';
            number1 = Number(result);
        }
        operatorValue = operator.textContent;
        displayValue = '';
    })
})

// equal button
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    number2 = Number(displayValue);

    if (!number1 && !number2 && !operatorValue) {
        display.textContent = "No operation entered";
        return;
    }

    display.textContent = '';
    const result = operate(number1, number2, operatorValue);
    display.textContent = result + '';
    number1 = Number(result);
    displayValue = '';
    number2 = '';
    operatorValue = '';
})

function operate(number1, number2, operator) {
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
    }
}
