const container = document.querySelector(".container");
const input = document.querySelector("input");
let numbers = [];
let currentOperator;
let activeResult = false;

function addEventToButtons() {
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", clearInput);

    const operators = document.querySelectorAll(".operator");
    operators.forEach(operator => {
        operator.addEventListener("click", checkOperator);
    });

    const typeButtons = document.querySelectorAll(".type");
    typeButtons.forEach(typeButton => {
        typeButton.addEventListener("click", typeInput)
    });
}

function checkOperator(operator) {
    numbers.push(Number(input.value));
    clearScreen();

    if (numbers.length == 2) {
        switch (currentOperator.target.value) {
            case "+":
                operate(add, numbers[0], numbers[1]);
                break;
            case "-":
                operate(subtract, numbers[0], numbers[1]);
              break;
            case "/":
                operate(divide, numbers[0], numbers[1]);
                break;
            case "=":
                operate(currentOperator, numbers[0], numbers[1]);
                break;
        }
        activeResult = true;
    } else {
       activeResult = false;
    }
    currentOperator = operator;
}

function typeInput(e) {
    if (activeResult) {
        clearScreen();
    }
    input.value += e.target.textContent;

}

function clearInput() {
    input.value = "";
    numbers = [];
}

function clearScreen() {
    input.value = "";
}

function operate(operator, numOne, numTwo) {
    const result = operator(numOne, numTwo);
    numbers = [];
    numbers.push(result);
    input.value = result;
}

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function divide(numOne, numTwo) {
    if (numTwo === 0) {
        clearInput();
        return "Error";
    } else {
        return numOne / numTwo;
    }
}

addEventToButtons();