const numberInput = document.querySelectorAll(".nums");
const symbols = document.querySelectorAll(".operation-symbol")
const finalDisplay = document.getElementById("final-display");
const equalTo = document.getElementById("equals");

let currentNum = "";
let operator = "";
let prevValues = [];

function getNumber (digit) {
    if (currentNum === "") {
        currentNum = String(digit);
    } else {
        currentNum += digit
    }
    return currentNum;
}


function getOperator (op) {
    if (currentNum === "") {
        return
    }
    if (currentNum) {
        prevValues.push(currentNum);
        switch (op) {
            case "+":
                break;
            case "-":
                break;
            case "*":
                break;
            case "/":
                break;
            prevValues.push(op);
        }
    }
    if (operator !== "") {

    }
}


numberInput.forEach((number) => {
    number.addEventListener("click", (e) => {
        const output = e.target.textContent
        finalDisplay.textContent += output;
    }) 
});
symbols.forEach((symbol) => {
    symbol.addEventListener("click", (e) => {
        const output = e.target.textContent
        finalDisplay.textContent += output;
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

console.log(getNumber(6));
console.log(getNumber(6));
console.log(getNumber(4));

