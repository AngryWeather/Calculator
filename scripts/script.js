const container = document.querySelector(".container");

function addEventToButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", typeInput)
    });
}

function typeInput(e) {
    const input = document.querySelector("input");
    input.value += e.target.textContent;
}

addEventToButtons();