let numberInput = document.querySelectorAll(".nums");
let finalDisplay = document.getElementById("final-display");

numberInput.forEach(num => {
    num.addEventListener("click", (event) => {
        const outputValue = event.target.textContent;
        finalDisplay.textContent += outputValue
        //alert(`You clicked ${outputValue}`)
    })
})

function add (num1, num2) {
    return Number(num1 + num2);
}

function subtract (num1, num2) {
    return Number(num1 - num2);
}

console.log(subtract(5, 7))