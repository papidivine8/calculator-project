const numberInput = document.querySelectorAll(".nums");
const symbols = document.querySelectorAll(".operation-symbol")
const finalDisplay = document.getElementById("final-display");
const equals = document.getElementById("equals");
let calculate = parseInt(finalDisplay.textContent)

let num1 = 0;
let num2 = 0;
let total = "";

equals.addEventListener("click", (e) => {
    let final = finalDisplay.textContent.trim()
    if (final.length === 0) {
        alert("input empty");
        return;
    }
    const result = sumAll(final)
    finalDisplay.textContent = result
})

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
    return inputs.reduce((total, current) => total + current, 0);

}

function subtract (...inputs) {
    //inputs = numberInput
    return inputs.reduce((tot, current) => tot - current); 
}

console.log(subtract(5, 7))