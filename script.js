const numberInput = document.querySelectorAll(".nums");
const symbols = document.querySelectorAll(".symbol")
const finalDisplay = document.getElementById("final-display");
const equalTo = document.getElementById("equals");

let currentNum = "";
let operator = "";
let prevNum = "";
let expression = [];

function updateDisplay () {
    finalDisplay.textContent = expression.join("") || "0";
}

function getNumber (digit) {
    currentNum += String(digit);
    
        if (expression.length === 0 || ["+", "-", "/", "*"].includes(expression[expression.length - 1])) {
            expression.push(currentNum);
        } else {
            expression[expression.length - 1] = currentNum
        }

    updateDisplay();
}

function getOperator (op) {
    if (currentNum === "" && prevNum === "") {
        return;
    }

    if (["+", "-", "/", "*"].includes(expression[expression.length - 1])) {
        expression[expression.length - 1] = op;
    } else {
        expression.push(op);
    }

    prevNum = currentNum;
    currentNum = "";
    operator = op;

    updateDisplay();
}

function calculate () {
    if (expression.length === 0) return

    let result = Number(expression[0]);

    for (let i = 1; i < expression.length; i+=2) {
        const op = expression[i];
        const num = Number(expression[i + 1]);

        if (op === "+") result += num;
        else if (op === "-") result -= num;
        else if (op === "*") result *= num;
        else if (op === "/") {
            if (num === 0) {
                return 0;
            }
            result /= num;
        }
        
    }

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
    if (expression.length < 3) {
        return;
    }

    const result = calculate();

    finalDisplay.textContent = result;

    expression = [String(result)];
    currentNum = String[result];
    prevNum = "";
    operator = "";
})



console.log(currentNum);