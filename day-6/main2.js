import {importFile, importNums, importStrings, importMulti } from '../utils/dataUtils.js';

const demo = importFile('demo.txt').split(",").map(str => parseInt(str))
const data = importFile('data.txt').split(",").map(str => parseInt(str))

const countFish = (starting, days) => {

    let lifeCycle = [...Array(9)].fill(0);
    starting.forEach(time => lifeCycle[time] += 1)

    for(let i = 0; i< days; i++) {
        let numNew = lifeCycle.shift();
        // console.log(numNew)
        lifeCycle[6] += numNew;
        lifeCycle[8] = numNew;
        
    }

    return lifeCycle.reduce((total, day, i) => total + day)

}
console.log(countFish(data, 256))
