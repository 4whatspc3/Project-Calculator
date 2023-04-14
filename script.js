let add = (...args) => {
    const sum = args.reduce((total, currentNumber) => {
        return total += currentNumber;
    }, 0);

    return sum;
};