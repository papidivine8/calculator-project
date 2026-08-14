const numberInput = document.querySelectorAll(".nums");
const symbols = document.querySelectorAll(".operation-symbol")
const finalDisplay = document.getElementById("final-display");

/*let num1 = 0;
let num2 = 0;*/

let total = null;


numberInput.forEach(num => {
    num.addEventListener("click", (event) => {
        const outputValue = event.target.textContent;
        finalDisplay.textContent += outputValue
        //alert(`You clicked ${outputValue}`)
    })
})

symbols.forEach(symbol => {
    symbol.addEventListener("click", (event) => {
        const outputValue = event.target.textContent;
        finalDisplay.textContent += outputValue;
    })
})

function sumAll (...inputs) {
    total = inputs.reduce((total, current) => total + current, 0)
}

function subtract (num1, num2) {
    return Number(num1 - num2);
}

console.log(subtract(5, 7))