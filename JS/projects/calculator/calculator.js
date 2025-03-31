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

