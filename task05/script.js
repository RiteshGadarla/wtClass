const display = document.getElementById("display");

function append(value) {
    const display = document.getElementById("display");
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.slice(-1);

    if (display.value.length === 0 && operators.includes(value) && value !== '-') {
        return;
    }

    if (
        operators.includes(lastChar) &&
        operators.includes(value)
    ) {
        if (!(value === '-' && lastChar !== '-')) {
            return;
        }
    }

    display.value += value;
}


function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}