const container = document.querySelector(".container");

function addEventToButtons() {
    const typeButtons = document.querySelectorAll(".type");
    typeButtons.forEach(typeButton => {
        typeButton.addEventListener("click", typeInput)
    });
}

function typeInput(e) {
    const input = document.querySelector("input");
    input.value += e.target.textContent;
}

addEventToButtons();