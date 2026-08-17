const numberInput = document.querySelectorAll(".nums");
const symbols = document.querySelectorAll(".symbol")
const finalDisplay = document.getElementById("final-display");
const equalTo = document.getElementById("equals");

let currentNum = "";
let operator = "";
let prevValues = [];

function getNumber (digit) {
    if (currentNum === "") {
        currentNum = String(digit);
        finalDisplay.textContent += currentNum;
        return currentNum;
    }

    if (currentNum) {
        currentNum += String(digit);
        finalDisplay.textContent += currentNum;
        return currentNum;
    }
}

function getOperator (op) {
    if (currentNum === "") {
        return;
    }

    prevValues.push(currentNum);
    operator = op;

    finalDisplay.textContent = prevValues + operator;
    currentNum = ""

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

equalTo.addEventListener("click", () => {
    if (currentNum === "" || operator === "") {
        return;
    }

    prevValues.push(currentNum);

    const num1 = Number(prevValues[0]);
    const num2 = Number(prevValues[1]);

    let result;

    if (operator === "+") {
        result = add(num1, num2);
    } else if (operator === "-") {
        result = subtract(num1, num2);
    }if (operator === "*") {
        result = multiply(num1, num2);
    } if (operator === "/") {
        result = divide(num1, num2);
    }

    finalDisplay.textContent = result;

    currentNum = String(result);
    prevValues = [];
    operator = "";
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