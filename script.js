let a,
    b,
    result,
    whereOperator,
    operator,
    number,
    displayOn,
    args = [],
    listOfItems = [];

let add = (a, b) => {
    return a + b;
};

let subtract = (a, b) => {
    return a - b;
};

let multiply = (a, b) => {
    return a * b;
};

let divide = (a, b) => {
    return a / b;
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

let convertTheList = (listOfItems) => {
    whereOperator = listOfItems.indexOf(operator);

    return {
        firstNumber : Number(listOfItems.slice(0, whereOperator).join('')),
        secondNumber: Number(listOfItems.slice(whereOperator + 1, listOfItems.length).join('')),
    };
};

function empty(element) {
    element.replaceChildren(); 
}

let operate = () => {
    if(result !== undefined){
        a = result;
    } else {
        a = convertTheList(listOfItems).firstNumber;
    }
    
    b = convertTheList(listOfItems).secondNumber;

    if (operator === '+'){
        result = add(a, b);
    }

    if (operator === '-'){
        result = subtract(a, b);
    }

    if (operator === '*'){
        result = multiply(a, b);
    }

    if (operator === '/'){
        result = divide(a, b);
    }

    listOfItems = [];
    displayOn = true;

    const display = document.querySelector('.display');

    display.setAttribute('style', `display: flex;
                                   margin:0;
                                   padding: 0;`);

    display.textContent = `${result} `;

    return display;
};

const btn01 = document.querySelectorAll('.numbers button');

btn01.forEach(button => {

    button.addEventListener('click', (e) => {
        if(displayOn == true){
            const display = document.querySelector('.display');

            empty(display);

            displayOn = false;
        }

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

        listOfItems.push(number);

        console.log(listOfItems);
        
    });
});

const btn02 = document.querySelectorAll('.operators button');

btn02.forEach(button => {
    
    button.addEventListener('click', (e) => {
        if(e.target.matches('.divide')){
            operator = '/';
        }

        if(e.target.matches('.multiply')){
            operator = '*';
        }

        if(e.target.matches('.subtract')){
            operator = '-';
        }

        if(e.target.matches('.addition')){
            operator = '+';
        }

        if(e.target.matches('.AC')){
            //clear all
            a = undefined;

            b = undefined;

            result = undefined;

            displayOn = false;

            listOfItems = [];

            operator = false;

            const display = document.querySelector('.display');

            empty(display);

            console.log("clear all")

        }

        if(e.target.matches('.equals')){
            operate();
          
            operator = false;
        }

        if(listOfItems.includes(operator)){            
            operate();
        }

        if (operator !== false){
            
            listOfItems.push(operator);

            console.log(listOfItems);

            if(displayOn !== true){
                const display = document.querySelector('.display');

                empty(display);
            } 
        }

    });
});