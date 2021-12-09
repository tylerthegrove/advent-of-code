import { importFile } from '../utils/dataUtils.js';
import chunk from 'lodash.chunk';

// const real = importFile('data.txt').split('|');

// conso
const demo = chunk(importFile('demo.txt').split('\n').map(entry => entry.replace('|', '').trim()), 2)
const real = importFile('data.txt').split('\n').map(entry => entry.split('|').map(item => item.trim()))

// console.log(demo, real)


const validators = {

    1: (str) => str.length === 2, 
    4:(str) => str.length === 4,
    7: (str) => str.length === 3, 
    8: (str) => str.length === 7
}

// const nonUniquesValidators =  {
//     5: findFiveDigit,//2, 3, 5
//     6: findSixDigit,//0, 6, 9
// }
// // 0,
// // 1,
// 2,
// // 3,
// // 4,
// 5, //ALL EXIST IN 6
//6, // LAST 6 DIGIT
// 7,
// 8,
// 9 // all 3 exist in 9 

//find uniques
//find 3 (str includes 1)
//find 9 (str includes 3 && length === 6) || 9 = 3 + 4
//
//0 = // IN COMMON BETWEEN 3 AND 4, TAKE AWAY 1

// 2 is only one that doesn't have f 

// find all 10 patterns
// a = 8 times
// b = 6 times
// c = 8 times
// d = 7 times
// e = 4 times // contained by 5
// f = 9 times
// g = 7 times


// // 0 = a + b + c + e + f + g
// 1 = c + f
// // 2 = a + c + d + e + g
// 3 = a + c + d + f + g
// 4 = b + c + d + f
// // 5 = a + b + d + f + g
// // 6 = a + b + d + e + f + g
// 7 = a + c + f
// 8 = a + b + c + d + e + f + g
// 9 = a + b + c + d + f + g

// a = 4, b = 3, c = 6, d = 4, f = 6, e = 1, g = 3

// find uniques (1, 4, 7, 8)  find 3 (find 9 find e) find 0 find 6 find 2 find 5


// function getDigits(str){
//     return str.split("");
// }

function alphabetize(text){
    return text.split('').sort().join('');
}

function compareStrings(string1, string2) {
    // console.log(`comparing ${string1} and ${string2}`)
    return alphabetize(string1) === alphabetize(string2)
}

function stringContainsLetters(needles, haystack) {
    // console.log(needles)
    return needles.split("").filter(needle => !haystack.includes(needle)).length === 0
}

function findNumbers(pattern) {
    let numbers = [...Array(10)];

    const filtered = [...new Set(pattern.split(" "))];
    // console.log(numbers)
    //find 1, 4, 7, 8
    const nonUniques = filtered.filter(test => {
        let pass = true;
        Object.entries(validators).forEach(([key, validator]) => {
            if(validator(test)) {
                numbers[key] = test;
                pass = false;
            }
        })
        return pass;
    })

    // console.log(numbers)

    const [fiveDigits, sixDigits] = nonUniques.reduce(([five, six], string) => {
        if(string.length === 5) {
            return [[...five, string], six]
        }
        if (string.length === 6) {
            return [five, [...six, string]]
        }
    }, [[],[]]);

    // console.log(fiveDigits, sixDigits)

    //find 3
    const withoutThree = fiveDigits.filter(str => {
        // console.log("str without 3", str)
        if (stringContainsLetters(numbers[1], str)) {
            numbers[3] = str;
            return false;
        } 
        return true;
    });

    // console.log(numbers)
    //find 9 
    const withoutNine = sixDigits.filter(str => {
        if (stringContainsLetters(numbers[3], str)) {
            numbers[9] = str;
            return false;
        } 
        return true;
    });
    //find e 
    const e = numbers.reduce((remaining, current, i) => {
        if (i === 8 || !current) {
            return remaining;
        } 
        return current.split("").reduce((string, letter) => string.replace(letter, ""), remaining );
    }, numbers[8]);

    //find d
    // console.log(numbers)
    const [three, four] = numbers[1].split("").reduce(([three, four], letter) => [three.replace(letter, ""), four.replace(letter,"")], [numbers[3], numbers[4]]);

    const d = four.split("").filter(letter => three.includes(letter));

    //find 0 and 6 

    numbers[0] = withoutNine.filter(string => {
        if (string.includes(d)) {
            numbers[6] = string;
            return false;
        }
        return true;
    })[0]

    numbers[5] = withoutThree.filter(string => {
        if (string.includes(e)) {
            numbers[2] = string;
            return false;
        }
        return true;
    })[0]

    const returnNums = numbers.map(number => alphabetize(number));

    const trial = returnNums.map(number => parseInt(number, 36))

    const mappy = trial.map((t, i) => {
        return {[i]: t}
    });

    const obj = mappy.reduce((object, entry) => {
        return {...object, ...entry}
    }, {})
    // const sortable  = Object.fromEntries(
    //     Object.entries(obj).sort(([,a],[,b]) => a-b)
    // );

    console.log(Object.entries(obj).sort(([,a],[,b]) => a-b))

    console.log(obj)
    // console.log(sortable)

    return returnNums
}

// c = 4 + 1 + 1 = 5
// f = 4 + 1 + 1 = 5
// b = 2 + 1
// d = 2 + 1 + 1 = 4
// a = 2 + 1 + 1 = 4
// e = 1
// g = 1 + 1 + 1 = 3

// find unique letters ()


function findFiveDigit(str, object) {
    if (str.includes(object[1])) {
        return 3;
    }
    // 
}

//FIND 1, 4, 7, 8, USE 1 TO FIND 3'S, 

function findTotalUnique(data) {
    return data.reduce((count, item) => count + findUnique(item), 0)
}

function findUnique([p, s]) {
    let signal = s.split(" ");
    return signal.reduce((count, str) => {
        if (str.length === 2 || str.length === 4 || str.length === 3 || str.length === 7) {
            console.log(str)
            return count + 1;
        }
        return count;
    }, 0)
}



// console.log(findTotalUnique(demo))
// console.log(findTotalUnique(real))

// console.log(findSignalTotal(demo))

function getSignalTotals(data) {
    return data.reduce((count, [pattern, signal]) => {
        console.log("pattern", pattern, "signal", signal)
        const key = findNumbers(pattern);
        const total = signal.split(" ").map(num => key.indexOf(alphabetize(num))).join('');
        console.log(total)
        return parseInt(count) + parseInt(total);
    }, 0)
};

console.log(getSignalTotals(demo))
console.log(getSignalTotals(real))