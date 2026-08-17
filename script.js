const numberInput = document.querySelectorAll(".nums");
const symbols = document.querySelectorAll(".symbol")
const finalDisplay = document.getElementById("final-display");
const equalTo = document.getElementById("equals");

let currentNum = "";
let operator = "";
let prevNum = "";

function updateDisplay () {
    if (prevNum !== "" && operator !== "") {
        finalDisplay.textContent = `${prevNum} ${operator} ${currentNum}`.trim();
    } else {
        finalDisplay.textContent = currentNum || prevNum
    }
}

function getNumber (digit) {
    if (currentNum === "") {
        currentNum = String(digit);   
    } else {
        currentNum += String(digit);
    }
    updateDisplay();
    return currentNum;

}

function getOperator (op) {
    if (currentNum === "" && prevNum === "") {
        return;
    }

    /*if (currentNum === "" || prevNum !== "") {
        operator = op;
        finalDisplay.textContent = `${prevNum} ${operator}`;
        return;
    }*/

    if (prevNum !== "" && currentNum !== "") {
        calculate();
    } else if (currentNum !== "") {
        prevNum = currentNum;
    }
    
    operator = op;
    currentNum = "";
    updateDisplay();
}

function calculate () {
    if (currentNum === "" && operator === "" && prevNum !== "") return

    const num1 = Number(prevNum);
    const num2 = Number(currentNum);

    let result;

    if (operator === "+") result = add(num1, num2);
    else if (operator === "-") result = subtract(num1, num2);
    else if (operator === "*") result = multiply(num1, num2);
    else if (operator === "/") {
        if (num2 === 0) {
            prevNum = "";
            currentNum = "";
            operator = "";
            return 0;
        }
        result = divide(num1, num2);
    }
    
    prevNum = String(result);
    currentNum = "";

    return result;
}


numberInput.forEach((number) => {
    const output = number.textContent
    number.addEventListener("click", () => {
        getNumber(output);
    }) 
});

symbols.forEach((symbol) => {
    const output = symbol.textContent
    symbol.addEventListener("click", () => {
        getOperator(output)
    })
})

equalTo.addEventListener("click", () => {
    if (currentNum === "" || operator === "" || prevNum === "") {
        return;
    }

    const result = calculate();

    finalDisplay.textContent = result;

    currentNum = String(result);
    prevNum = "";
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