import { importNums } from "../utils/dataUtils.js";

const data = importNums('./data.txt');

let counter = 0;

data.reduce((prev, current) => {
    if (current > prev) {
        counter += 1;
    }
    return current;
});

console.log(counter);
