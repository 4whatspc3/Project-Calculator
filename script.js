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
    number,
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

const btn = document.querySelectorAll('div.numbers');

btn.forEach(button => {
    
    button.addEventListener('click', (e) => {
        
        if(e.target.matches('.zero')){
            number = 0;
        }

        if(e.target.matches('.one')){
            number = 1;
        }

        if(e.target.matches('.two')){
            number = 2;
        }

        if(e.target.matches('.three')){
            number = 3;
        }

        if(e.target.matches('.four')){
            number = 4;
        }

        if(e.target.matches('.five')){
            number = 5;
        }

        if(e.target.matches('.six')){
            number = 6;
        }

        if(e.target.matches('.seven')){
            number = 7;
        }

        if(e.target.matches('.eight')){
            number = 8;
        }

        if(e.target.matches('.nine')){
            number = 9;
        }

        getTheNumbers(number);
    });
});