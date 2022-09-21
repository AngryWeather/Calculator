const container = document.querySelector(".container");
const input = document.querySelector("input");
let numbers = [];
let currentOperator;

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
    clearInput();

    if (numbers.length == 2) {
        switch (currentOperator.target.value) {
            case "+":
                operate(add, numbers[0], numbers[1]);
                break;
        }
    } else {
       currentOperator = operator;
    }
    console.log(numbers);
    console.log(currentOperator.target.value);

}

function typeInput(e) {
    input.value += e.target.textContent;

}

function clearInput() {
    input.value = "";
}

function operate(operator, numOne, numTwo) {
    const result = operator(numOne, numTwo);
    numbers = [];
    numbers.push(result);
    console.log(numbers);

}

function add(numOne, numTwo) {
    return numOne + numTwo;
}

addEventToButtons();