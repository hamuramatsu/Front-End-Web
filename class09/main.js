const textInput = document.getElementById("textInput");
const colorPicker = document.getElementById("colorPicker");
const fontSelector = document.getElementById("fontSelector");
const displayArea = document.getElementById("displayArea");
const resetButton = document.getElementById("resetButton");

updateText = () => {
    displayArea.textContent = textInput.value;
};

applyStyles = () => {
    displayArea.style.color = colorPicker.value;
    displayArea.style.fontFamily = fontSelector.value;
};

resetStyles = () => {
    textInput.value = "Enter your text here";
    displayArea.textContent = "Your text will appear here.";
    displayArea.style.color = "#000000";
    displayArea.style.fontFamily = "Helvetica";
};


// Event listeners
textInput.addEventListener("input", updateText);
colorPicker.addEventListener("change", applyStyles);
fontSelector.addEventListener("change", applyStyles);
resetButton.addEventListener("click", resetStyles);



