let numberInput = document.querySelectorAll('.nums');

console.log(numberInput)

numberInput.forEach(num => {
    num.addEventListener("click", function() {
        const outputValue = this.innerText;
        //console.log(outputValue)
    })
})

function add (num1, num2) {
    return Number(num1 + num2);
}

function subtract (num1, num2) {
    return Number(num1 - num2);
}

console.log(subtract(5, 7))