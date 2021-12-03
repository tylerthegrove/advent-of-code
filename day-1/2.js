import { importNums } from "../utils/dataUtils.js";

const data = importNums("./data.txt");

let counter = 0;

const windows = data.map((number, index, arr) => number + arr[index + 1] + arr[index + 2]);

windows.reduce((prev, current) => {
    if (current > prev) {
        counter += 1;
    }
    return current;
});

console.log(counter);
