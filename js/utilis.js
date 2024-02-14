function getInputFiledValueById(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputString = inputElement.value;
    const inputFieldAmout = parseFloat(inputString);
    inputElement.value = '';
    return inputFieldAmout;
}

function getElementValueByID(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementAmount = parseFloat(elementString);
    return elementAmount;
}

function setElementValue(elementId, value) {
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = value;
}