import {importFile, importNums, importStrings, importMulti } from '../utils/dataUtils.js';

const demo = importFile('demo.txt').split(",").map(str => parseInt(str))
const data = importFile('data.txt').split(",").map(str => parseInt(str))

const DAYS_UNTIL = 6;
const NEW_DAYS_UNTIL = 8;

function countFish(fishes, days) {
    if (days === 0) {
        return fishes;
    }

    let newFishes = [];

    const ageFishes = fishes.map(fish => {
        let newAge = fish - 1;

        if (newAge < 0) {
            newFishes.push(NEW_DAYS_UNTIL);
            newAge = DAYS_UNTIL;
        };

        return newAge;
    });
    return countFish(ageFishes.concat(newFishes), days - 1);

}

console.log(countFish(demo, 18).length);
console.log(countFish(demo, 80).length)
console.log(countFish(data, 80).length)
console.log(countFish(demo, 150).length)