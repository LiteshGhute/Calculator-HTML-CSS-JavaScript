var buttons = document.getElementsByTagName('td');
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; i < buttons.length; i++){ // setting EventListener for every button
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if(value == '+'){ // if + is clicked
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerText = null;
        }
        else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerText = null;
        }
        else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerText = null;
        }
        else if(value == '/'){
            operator = '/';
            operand1 = parseFloat(display.textContent);
            display.innerText = null;
        }
        else if(value == '%'){
            operator = '%';
            operand1 = parseFloat(display.textContent);
            display.innerText = null;
        }
        else if(value == 'AC'){
            operator = null;
            operand1 = 0;
            display.innerText = "";
        }
        else if(value == 'plus-minus'){
            var temp = display.innerText;
            display.innerText = -temp;
        }
        else if(value == '.'){
            display.innerText += '.';
        }
        else if(value == '='){
            operand2 = parseFloat(display.textContent);

            //evaluating the result
            var result = eval(operand1 + " " + operator + " " + operand2);

            //displaying the result
            display.innerText = result;
        }
        else{// if any number is clicked then value is appended
            display.innerText += value;
        }
    });
}
