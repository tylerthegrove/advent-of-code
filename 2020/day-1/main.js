import { importNums } from '../../utils/dataUtils.js';

const data = importNums('./data.txt');
const demo = importNums('./demo.txt');

const is2020 = (a, b) => a + b === 2020;

let answer;

data.forEach(first => {
    data.forEach(second => {
        if (first + second === 2020) {
            answer = first * second;
        } 
    }) 
});

console.log(answer);

let answer2;

data.forEach(first => {
    data.forEach(second => {
        data.forEach(third => {
            if (first + second + third === 2020) {
                answer2 = first * second * third;
            } 
        })

    }) 
});

console.log(answer2)