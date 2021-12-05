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


        // if (x1 === y2 && x2 === y1) {
        //     const diffY = y1 - y2;
        //     const incrementorY = diffY > 0 ? -1 : 1;
        //     //let x = y2;
        //     for (let y = y1; y !== (y2 + incrementorY);  y += incrementorY) {
        //         board[y][y] +=1;
        //         //x += incrementorY;
        //     }
        //     return;
        // }
        // if (x1 == x2) {
        //     //x's same
        //     const diffY = y1 - y2;
        //     const incrementorY = diffY > 0 ? -1 : 1;
        //     for (let y = y1; y !== (y2 + incrementorY);  y += incrementorY) {
        //         board[y][x1] +=1;
        //     }
        //     return;
        // }
        // if (y1 == y2) {
        //     const diffX = x1 - x2;
        //     const incrementorX = diffX > 0 ? -1 : 1;
        //     for (let x = x1; x !== (x2 + incrementorX);  x += incrementorX) {
        //         board[y1][x] +=1;
        //     }
        //     return;
        // }

    console.log(x1, y1, x2, y2);
       const diffY = y1 - y2;
       console.log(diffY)
       const incrementorY = diffY > 0 ? -1 : 1;
        console.log(incrementorY)

       const diffX = x1 - x2;
       console.log(diffX)
       const incrementorX = diffX > 0 ? -1 : 1;
       console.log(incrementorX)
        
        let x = x1;
        for(let y = y1; y !== (y2 + incrementorY) ; y += incrementorY) {
            console.log(x, y)
            board[y][x] += 1;
            x += incrementorX;
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

    
    const total = board.reduce((total, row) => {
        const over = row.filter(item => item > 1);
        return total += over.length;
    },0);

    return total;
    
}

console.log(getOverlap(demo))



