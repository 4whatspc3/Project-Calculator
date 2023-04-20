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

    display.setAttribute('style', `display: flex;
                                   margin:0;
                                   padding: 0;`);

    const content = document.createElement('div');
  
    content.textContent = `${number} `;

    return display.appendChild(content);
};

const btn01 = document.querySelectorAll('.numbers button');

btn01.forEach(button => {
    
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

const btn02 = document.querySelectorAll('.operators button');

btn02.forEach(button => {
    
    button.addEventListener('click', (e) => {
        
        if(e.target.matches('.divide')){
            operator = '/';
            console.log(operator)
        }

        if(e.target.matches('.multiply')){
            operator = '*';
            console.log(operator)

        }

        if(e.target.matches('.subtract')){
            operator = '-';
            console.log(operator)

        }

        if(e.target.matches('.addition')){
            operator = '+';
            console.log(operator)

        }

        if(e.target.matches('.AC')){
            //clear all
            console.log("clear all")

        }

        if(e.target.matches('.equals')){
            operate();
            console.log("almost there")

        }
    });
});