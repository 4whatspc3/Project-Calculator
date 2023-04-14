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