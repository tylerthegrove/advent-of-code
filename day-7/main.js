import { importFile } from '../utils/dataUtils.js';
import stats from "stats-lite";

const real = importFile('data.txt').split(',').map(num => parseInt(num));
const demo = importFile('demo.txt').split(',').map(num => parseInt(num));


const lessFuel1 = (data, padding = 1) => {
    const total = data.reduce((total, num) => total + parseInt(num))
    const avg = Math.round(total / data.length);
    const median = stats.median(data)

    console.log(avg, median)

    //start with the average and pad out a certain number on both sides
    //I tried different numbers to verify, but both are within 2 of the average
    const allTrials = [...Array(padding * 2)].map((item,i) => [avg + i, Math.abs(avg - i)] ).flat();
    //remove duplicates
    const trials = [...new Set(allTrials)];

    const attempts = trials.map(item => data.reduce(([total, trial], num) => {
        let diff = Math.abs(item - num);
        for(let i = 1; i <= diff; i++) {
            total += i
        }
        return [diff, item];
    },[0, null]));

    // return an array with the lowest total and the shared position
    return attempts.reduce(([low, key], [num, trial]) => Math.min(low, num) === low ? [low, key] : [num, trial])
}

console.log(lessFuel1(demo))
console.log(lessFuel1(real))

const lessFuel = (data, padding = 1) => {
    const total = data.reduce((total, num) => total + parseInt(num))
    const avg = Math.round(total / data.length);

    //start with the average and pad out a certain number on both sides
    //I tried different numbers to verify, but both are within 2 of the average
    const allTrials = [...Array(padding * 2)].map((item,i) => [avg + i, Math.abs(avg - i)] ).flat();
    //remove duplicates
    const trials = [...new Set(allTrials)];

    const attempts = trials.map(item => data.reduce(([total, trial], num) => {
        let diff = Math.abs(item - num);
        for(let i = 1; i <= diff; i++) {
            total += i
        }
        return [diff, item];
    },[0, null]));

    // return an array with the lowest total and the shared position
    return attempts.reduce(([low, key], [num, trial]) => Math.min(low, num) === low ? [low, key] : [num, trial])
}


// console.log(lessFuel(demo)); //demo answer should be 168 total with 5 as the shared position
// // console.log(lessFuel(demo, 5000));
// console.log(lessFuel(real));
// // console.log(lessFuel(real, 5000));
