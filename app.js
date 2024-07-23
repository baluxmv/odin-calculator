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

// Buttons container event listener
buttonsContainer.addEventListener("click", event => {
    // Check if the clicked element is a number button within 
    // the number-buttons-container
    if (event.target.tagName === "BUTTON" && 
        event.target.parentElement.id === "number-buttons-container") {
        if (display.innerText == "Waiting for numbers") {
            display.innerText = "";
        }

        a += event.target.innerText;
        display.innerText = a;
    }
});



