const fs = require('fs');


const data = fs.readFileSync("data.txt", "utf-8").split("\n");

const split = data.map((t) => t.split(""))

function arrayToString(arr){
    return arr.toString().replace(/,/g, "")
}

function arraySum(arr) {
    const numBits = arr[0].length;
    return arr.reduce((prev, curr) => [...Array(numBits)].map((v, i) => +prev[i] + +curr[i]))
}

const findPattern = finder => (data, numItems) => {
    const pattern = data.map(sum => finder(sum, numItems));
    return arrayToString(pattern);
}
const mostCommonBit = (sum, numItems) => sum >= numItems / 2 ? 1 : 0;
const leastCommonBit = (sum, numItems) => sum >= numItems / 2 ? 0 : 1;


const mostCommon = findPattern(mostCommonBit);
const leastCommon = findPattern(leastCommonBit);


const added = arraySum(split);

const gamma = mostCommon(added, split.length);
const epsilon = leastCommon(added, split.length);

const answer1 = parseInt(gamma, 2) * parseInt(epsilon, 2);
console.log("answer 1", answer1)


//2

const filterData = filter => data => {
    return [...Array(data[0].length + 1)].reduce((prev, curr, i) => {
        if (prev.length > 1) {
            const sum = arraySum(prev);
            const measure = filter(sum, prev.length)[i];
            return prev.filter(p => p[i] === measure)
        }
        return prev;
    }, data);
}

const filterMore = filterData(mostCommon);
const filterLess = filterData(leastCommon);


const o2 = arrayToString(filterMore(split)[0])
const co2 = arrayToString(filterLess(split)[0])

const answer2 = parseInt(o2, 2) * parseInt(co2, 2);
console.log("answer 2", answer2);
