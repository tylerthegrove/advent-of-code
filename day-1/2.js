const numbers = require('./data.js');
let counter = 0;

const windows = numbers.map((number, index, arr) => number + arr[index + 1] + arr[index + 2]);

windows.reduce((prev, current) => {
    if (current > prev) {
        counter += 1;
    }
    return current;
});

console.log(counter);
