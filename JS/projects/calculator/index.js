

const calculator = function (input, symbolArr) {
    let result = 0
    const currentInput = input


    for (let i = 0; i < symbolArr.length; i++) {

        if (currentInput.includes(symbolArr[i])) {
            const parts = currentInput.split(symbolArr[i])

            let num1 = parseFloat(parts[0])
            let num2 = parseFloat(parts[1])
            if (symbolArr[i] === "+") {
                result = num1 + num2
            }
            else if (symbolArr[i] === "-") {
                result = num1 - num2
            }
            else if (symbolArr[i] === "*") {
                result = num1 * num2
            }
            else if (symbolArr[i] === "/") {
                result = num1 / num2
            }
            return result

        }

    }

    return result
}




document.querySelectorAll("button").forEach(button => button.addEventListener("click",
    function () {
        let value = button.innerText
        if (value === "=") {
            input.value = calculator(input.value, symbolArr)
        } else if (value === "AC") {
            input.value = ""
        } else {
            input.value += value
        }

    }))

// const buttonSymbolArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "="]

const input =   document.getElementById("input")
const symbolArr = ["+", "-", "*", "/", "="]


console.log(calculator(input, symbolArr))







