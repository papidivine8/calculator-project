const numberInput = document.querySelectorAll(".nums");
const symbols = document.querySelectorAll(".symbol")
const finalDisplay = document.getElementById("final-display");
const equalTo = document.getElementById("equals");

let currentNum = "";
let operator = "";
let prevValues = [];

function getNumber (digit) {
    currentNum += String(digit);
    finalDisplay.textContent = currentNum;
    return currentNum;
}

function getOperator (op) {
    if (currentNum === "") {
        return;
    }

    prevValues.push(currentNum);
    operator = op;

    finalDisplay.textContent = currentNum + operator;

    return operator;
}

numberInput.forEach((number) => {
    const output = number.textContent
    number.addEventListener("click", () => {
        getNumber(output);
        /*const output = e.target.textContent
        finalDisplay.textContent += output;*/
    }) 
});
symbols.forEach((symbol) => {
    const output = symbol.textContent
    symbol.addEventListener("click", () => {
        getOperator(output)
    })
})

function add(...inputs) {
    return inputs.reduce((total, current) => {
        return total + current;
    })
}

function subtract(...inputs) {
    return inputs.reduce((total, current) => {
        return total - current;
    })
}

function divide(...inputs) {
    return inputs.reduce((total, current) => {
        return total / current;
    })
}

function multiply(...inputs) {
    return inputs.reduce((total, current) => {
        return total * current;
    })
}


console.log(currentNum);