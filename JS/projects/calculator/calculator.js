let string = "";

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.getElementById('input').value = string
        } else if (e.target.innerHTML == "AC") {
            document.getElementById('input').value = "";
            string = ""
        }
        else if (e.target.innerHTML == "C") {

            string = string.slice(0, -1);
            document.getElementById('input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.getElementById('input').value = string;
        }
    })
})
//alternate method for eval()
function evaluateMathExpression(expression) {
    let operators = [];
    let values = [];
    
    let precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
    
    function applyOperator() {
        let b = values.pop();
        let a = values.pop();
        let op = operators.pop();
        
        switch (op) {
            case '+': values.push(a + b); break;
            case '-': values.push(a - b); break;
            case '*': values.push(a * b); break;
            case '/': values.push(a / b); break;
        }
    }
    
    let tokens = expression.match(/\d+|\+|\-|\*|\//g);
    
    for (let token of tokens) {
        if (!isNaN(token)) {
            values.push(parseFloat(token));
        } else {
            while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
                applyOperator();
            }
            operators.push(token);
        }
    }
    
    while (operators.length) {
        applyOperator();
    }
    
    return values[0];
}

// console.log(evaluateMathExpression("3+5*2-8/4")); // Output: 9

