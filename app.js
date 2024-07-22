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

// Function to reset values to default
function reset() {
    a = "";
    b = "";
    operator = "";
    display.innerText = "Waiting for numbers";
}

// Variables for each part of a calculator operation
let a = "";
let b = "";
let operator = "";

// Variables to store HTML elements
const display = document.querySelector("#display");
const buttonsContainer = document.querySelector("#buttons-container");
const numberButtons = buttonsContainer.querySelectorAll("#number-buttons-container"); 

// Add event listener to each number button
numberButtons.forEach(button => {
    button.addEventListener('click', event => {
        if (display.innerText == "Waiting for numbers") {
            display.innerText = "";
        }
    
        a += event.target.innerText;
        display.innerText = a;
    });
});

