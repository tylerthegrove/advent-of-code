import { importFile } from '../utils/dataUtils.js';

const demo = importFile('demo.txt').split('\n').map(row => row.split('').map(num => parseInt(num)))
const real = importFile('data.txt').split('\n').map(row => row.split('').map(num => parseInt(num)))



function getLows(data) {
    const lows = data.reduce((lowPoints, row, index) => {
        let rowLows = [];
        //console.log("row" + index)
        row.forEach((num, i) => {

            let myRow = index;
            let myPosition = i;
            
            let top = (myRow - 1) >= 0 ? data[(myRow - 1)][myPosition] : 10;
            let bottom = (myRow + 1) < data.length ? data[(myRow + 1)][myPosition] : 10;
            
            let left = (myPosition - 1) >= 0 ? row[(myPosition - 1)] : 10;
            let right = (myPosition + 1) < row.length ? row[(myPosition + 1)] : 10;



            // console.log(`number: ${num} top: ${top} left:${left} right:${right} bottom:${bottom}`);
            // console.log(Math.min(num, top, left, right, bottom) === num);


            
            if (isLower([top, bottom, left, right], num)) {
                rowLows.push(num);
            }
        });
        // console.log(index, rowLows)
        return [...lowPoints, ...rowLows];
    },[]);
    // console.log(lows)
    return lows;
}

function isLower(array, num) {
    const filtered = array.filter(direction => {
        return num >= direction
    });
    return filtered.length === 0;
}

function countLows(lows) {
    let addOne = lows.map(num => num + 1);

    return addOne.reduce((total, num) => total + num)
}

console.log(countLows(getLows(demo)))
console.log(countLows(getLows(real)))