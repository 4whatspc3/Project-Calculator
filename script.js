let add = (a, b, ...args) => {
    let result = a + b;
    
    if (args.length > 0){
        const sum = args.reduce((total, currentNumber) => {
            return total += currentNumber;
        }, result);

        return sum;

    } else {
        return result;
    }
};

let subtract = (a, b, ...args) => {
    let result = a - b;
    
    if (args.length > 0){
        const sub = args.reduce((total, currentNumber) => {
            return total -= currentNumber;
        }, result);

        return sub;

    } else {
        return result;
    }
};

let multiply = (a, b, ...args) => {
    let result = a * b;

    if (args.length > 0){
        const multi = args.reduce((total, currentNumber) => {
            return total *= currentNumber;
        }, result);

        return multi;

    } else {
        return result;
    }
};

let divide = (a, b, ...args) => {
    let result = a / b;
    
    if (args.length > 0){
        const part = args.reduce((total, currentNumber) => {
            return total /= currentNumber;
        }, result);

        return part;

    } else {
        return result;
    }
};

let a,
    b,
    operator,
    args = [];

let operate = () => {
    operator = prompt("Enter an operator: +, -, / ou *");
    a = Number(prompt("Enter the first number"));
    b = Number(prompt("Enter the second number"));

    if (operator === '+'){
        return add(a, b, ...args);
    }

    if (operator === '-'){
        return subtract(a, b, ...args);
    }

    if (operator === '*'){
        return multiply(a, b, ...args);
    }

    if (operator === '/'){
        return divide(a, b, ...args);
    }
};

let getTheNumbers = (number) => {
    
    const display = document.querySelector('.display');

    display.textContent = `${number} `;

    return display;
};

const btn = document.querySelectorAll('.buttons.numbers');

btn.forEach(button => {
    
    button.addEventListener('click', (e) => {
        
        if(e.target.matches('.0')){

        }

        if(e.target.matches('.1')){
            
        }

        if(e.target.matches('.2')){
            
        }

        if(e.target.matches('.3')){
            
        }

        if(e.target.matches('.4')){
            
        }

        if(e.target.matches('.5')){
            
        }

        if(e.target.matches('.6')){
            
        }

        if(e.target.matches('.7')){
            
        }

        if(e.target.matches('.8')){
            
        }

        if(e.target.matches('.9')){
            
        }
    });
});