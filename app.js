function add(a, b) {
    return parseInt(a) + parseInt(b);
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
        expression = add(a, b);
    }
    else if (operator == "-"){
        expression = subtract(a, b);
    }
    else if (operator == "*"){
        expression = multiply(a, b);
    }
    else if (operator == "/"){
            expression = divide(a, b);
    }
}

// Function to reset values to default
function reset() {
    a = "";
    b = "";
    operator = "";
}

// Variables for each part of a calculator operation
let a = "";
let b = "";
let operator = "";
let expression = "Waiting for numbers";

// Variables to store HTML elements
const display = document.querySelector("#display");
const buttonsContainer = document.querySelector("#buttons-container");

// Buttons container event listener
buttonsContainer.addEventListener("click", event => {
    // Check if the clicked element is a number button 
    if (event.target.tagName === "BUTTON" && 
        event.target.parentElement.id === "number-buttons-container") {
        // If it is the first number
        if (operator == "") {
            a += event.target.innerText;
        }
        // If it is the second number
        else {
            b += event.target.innerText;
        }
        expression = a + " " + operator + " " + b;
    }

    // Check if the clicked button is an operation button 
    if (event.target.tagName === "BUTTON" &&
        event.target.parentElement.id == "operation-buttons-container") {
        operator = event.target.innerText;

        expression = a + " " + operator + " " + b;
    }

    // Check if the clicked button is a functionality button
    if (event.target.tagName === "BUTTON" &&
        event.target.parentElement.id === "functionality-buttons-container") {
        // If we have to delete the current expression
        if (event.target.innerText == "A/C") {
            reset();
            expression = "Waiting for numbers";
        }
        // If we have to calculate the current expression
        if (event.target.innerText == "=") {
            if (b != "/" && b != "0") {
                operate(a, b, operator);
                a = expression;
                b = "";
                operator = "";
            }
            else {
                window.alert("Are you seriously trying to divide by 0? How dumb");
                reset();
                expression = "Waiting for numbers";
            }
        }
    }
    
    display.innerText = expression;
});



