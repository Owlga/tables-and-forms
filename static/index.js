const resetButton = document.getElementById("resetButton");
const form = document.querySelector("form");
resetButton.addEventListener("click", () => {
    form.reset();
});