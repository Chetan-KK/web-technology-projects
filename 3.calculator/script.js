function appendToOutput(value) {
    document.getElementById('output').value += value;
}

function clearOutput() {
    document.getElementById('output').value = '';
}

//adding a delete button 
function deleteLastDigit() {
    const display = document.getElementById('output');
    if (display && display.value) {
        display.value = display.value.slice(0, -1);
    }
}



function calculateResult() {
    try {
        const result = eval(document.getElementById('output').value);
        if (isNaN(result) || !isFinite(result)) {
            throw "Invalid input";
        }
        document.getElementById('output').value = result;
    } catch (error) {
        alert("Invalid input. Please enter a valid expression.");
        clearOutput();
    }
}

function square() {
    const inputValue = document.getElementById('output').value;
    if (inputValue !== '') {
        const result = eval(`Math.pow(${inputValue}, 2)`);
        document.getElementById('output').value = result;
    }
}
