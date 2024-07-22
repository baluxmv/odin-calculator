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
    return a / b;
}

function operate(a, b, operator) {
    if (operator == "+") {
        add(a, b);
    }
    else if (operator == "-"){
        subtract(a, b);
    }
    else if (operator == "*"){
        multiply(a, b);
    }
    else if (operator == "/"){
        divide(a, b);
    }
}

// Variables for each part of a calculator operation
let a;
let b;
let operator;

// Variables to store html elements
const display = document.querySelector("display");
const buttonsContainer = document.querySelector("buttons-container");
 

