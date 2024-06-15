function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
