let a,
    b,
    result,
    operator,
    number,
    displayOn,
    listOfNumbers = [],
    listA = [],
    listB = [];

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

let showTheNumbers = (number) => {
    
    const display = document.querySelector('.display');

    display.setAttribute('style', `display: flex;
                                   margin:0;
                                   padding: 0 10px;`);

    const content = document.createElement('div');

    content.setAttribute('style', `display: flex;
                                            align-items: center;
                                            margin: 0;
                                            padding: 0;
                                            font-size: 30px;`);
  
    content.textContent = `${number} `;

    return display.appendChild(content);
};

let undoTheNumbers = (listOfNumbers) => {
    
    const display = document.querySelector('.display');

    display.setAttribute('style', `display: flex;
                                   margin:0;
                                   padding: 0 10px;
                                   align-items: center;
                                   font-size: 30px;`);
    
    if(listOfNumbers === 0){
        display.textContent =``;
    } else {
        display.textContent = `${listOfNumbers} `;
    }

    return display;
};

let numberA = (listA) => {
    return Number(listA.join(''));
};

let numberB = (listB) => {
    return Number(listB.join(''));
};

function empty(element) {
    element.replaceChildren(); 
}

let operate = () => {
    if(result !== undefined){
        a = result;
    } else {
        a = numberA(listA);
    }
    
    b = numberB(listB);

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
        if(b === 0){
            result = "NO U =)";
        } else {
            result = divide(a, b);
        }
    }

    displayOn = true;

    const display = document.querySelector('.display');

    display.setAttribute('style', `display: flex;
                                   margin:0;
                                   padding: 0 10px;
                                   align-items: center;
                                   font-size: 30px;`);

    display.textContent = `${result} `;

    return display;
};

const btn01 = document.querySelectorAll('.numbers button');

btn01.forEach(button => {

    button.addEventListener('click', (e) => {
        if(displayOn == true){
            const display = document.querySelector('.display');

            empty(display);

            displayOn = undefined;
        }

        if(e.target.matches('.point')){
            number = '.';
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

        showTheNumbers(number);

        if(operator === undefined){            
            result = undefined;

            listA.push(number);

            if(listA.includes('.')){
                document.querySelector('.numbers .point').disabled = true;
            }
        }
        
        if(operator !== undefined){
            document.querySelector('.numbers .point').disabled = false;
            
            listB.push(number);

            if(listB.includes('.')){
                document.querySelector('.numbers .point').disabled = true;
            }
        }

        console.log("essa é A "+listA);
        console.log("essa é B "+listB);
        
    });
});

const btn02 = document.querySelectorAll('.operators button');

btn02.forEach(button => {
    
    button.addEventListener('click', (e) => {
        if(operator !== undefined){
            operate();

            listB = [];

            operator = undefined;
        }

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

        if(e.target.matches('.equals')){
            if (listA.length === 0 && listB.length === 0){
                
                if(result === undefined){
                    const display = document.querySelector('.display');
    
                    empty(display);
                }
                
            } else {
                operate();
          
                listA = [];
                
                listB = [];
    
                operator = undefined;

                document.querySelector('.numbers .point').disabled = false;
            }
        }

        if(displayOn !== true){
            const display = document.querySelector('.display');

            empty(display);
        }

        console.log(operator)

    });
});

const btn03 = document.querySelectorAll('.moreTools button');

btn03.forEach(button => {
    
    button.addEventListener('click', (e) => {        
        if(e.target.matches('.backspace')){
            if(operator === undefined){
                listA.pop();

                listOfNumbers = numberA(listA);

                undoTheNumbers(listOfNumbers);
            } else {
                listB.pop();

                listOfNumbers = numberB(listB);

                undoTheNumbers(listOfNumbers);
            }
        }
    
        if(e.target.matches('.AC')){
            //clear all
            a = undefined;
    
            b = undefined;
    
            result = undefined;
    
            displayOn = undefined;
            
            listA = [];
    
            listB = [];
    
            operator = undefined;

            document.querySelector('.numbers .point').disabled = false;
    
            const display = document.querySelector('.display');
    
            empty(display);
    
            console.log("clear all")
    
        }
    });
});