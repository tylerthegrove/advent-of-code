const data = require('./data.js');
let counter = 0;



data.reduce((prev, current) => {
    if (current > prev) {
        counter += 1;
    }
    return current;
});

console.log(counter);
