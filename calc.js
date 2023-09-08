let displayValue = "0";

function updateDisplay() {
    document.getElementById("display").textContent = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === "0" && value !== ".") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function deleteFromDisplay() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = "0";
    }
    updateDisplay();
}

updateDisplay();
