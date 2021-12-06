import {importFile, importNums, importStrings, importMulti } from '../utils/dataUtils.js';

const real = importFile('data.txt').split('\n').map(row => row.split("->"));
const demo = importFile('demo.txt').split('\n').map(row => row.split("->"));

function getOverlap(data){
    const [boardXSize, boardYSize] = data.reduce(([largestX, largestY], item) => {
        const [x1,y1] = (item[0].trim().split(","));
        const [x2,y2] = (item[1].trim().split(","));
        return [Math.max(largestX, x1, x2), Math.max(largestY, y1, y2)]
    },[0,0])
    
    const board = Array.from(Array(boardYSize + 1), () => Array(boardXSize + 1).fill(0));
    
    
    data.forEach(item => {
        const [x1s,y1s] = (item[0].trim().split(","));
        const [x2s,y2s] = (item[1].trim().split(","));

        const x1 = parseInt(x1s);
        const x2 = parseInt(x2s);
        const y1 = parseInt(y1s);
        const y2 = parseInt(y2s);
    
        if (x1 == x2) {
            //x's same
            if (y1 <= y2) {
                for (let i = y1; i <= y2; i++) {
                    board[i][x1] += 1;
                }
            }
            if (y1 >= y2) {
                for (let i = y2; i <= y1; i++) {
                    board[i][x1] += 1;
                }
            }
            return;
        }
        if (y1 == y2) {
            //y's same
            if (x1 <= x2) {
                for (let i = x1; i <= x2; i++) {
                    board[y1][i] += 1;
                }
            }
            if (x1 >= x2) {
                for (let i = x2; i <= x1; i++) {
                    board[y1][i] += 1;
                }
            }
            return;
        }
    
    });

    let totalOther = 0;

    board.forEach(row => {
        row.forEach(num => {
            if (num >= 2) {
                totalOther += 1;
            }
        })
    })

    console.log(totalOther)
    
    const total = board.reduce((total, row) => {
        const over = row.filter(item => item > 1);
        return total += over.length;
    },0);

    return total;
    
}

console.log(getOverlap(demo), getOverlap(real))



