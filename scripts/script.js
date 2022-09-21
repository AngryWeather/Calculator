const container = document.querySelector(".container");
const input = document.querySelector("input");

function addEventToButtons() {
    const clear = document.querySelector("#clear");
    clear.addEventListener("click", clearInput);

    const typeButtons = document.querySelectorAll(".type");
    typeButtons.forEach(typeButton => {
        typeButton.addEventListener("click", typeInput)
    });
}

function typeInput(e) {
    input.value += e.target.textContent;
}

function clearInput() {
    input.value = "";
}

function operate(operator, numOne, numTwo) {
    operator(numOne, numTwo);
}

function add(numOne, numTwo) {
    console.log("hello");
}

addEventToButtons();