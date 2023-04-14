let add = (...args) => {
    const sum = args.reduce((total, currentNumber) => {
        return total += currentNumber;
    }, 0);

    return sum;
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

let multiply = (...args) => {
    const multi = args.reduce((total, currentNumber) => {
        return total *= currentNumber;
    }, 1);

    return multi;
};