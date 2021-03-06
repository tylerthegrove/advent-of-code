import {importFile, importNums, importStrings, importMulti } from '../utils/dataUtils.js';

import chunk from "lodash.chunk";

// const data = importStrings('./data.txt');
// const demo = importStrings('./demo.txt');

const bingo = importFile('./boards.txt').split("\n").filter(val => val !== "");
const numbers = importFile('./numbers.txt').split(",");

// const bingo = importFile('./demo.txt').split("\n").filter(val => val !== "");
// const numbers = importFile('./demoNums.txt').split(",");

const boards = chunk(bingo, 5).map(board => board.reduce((acc, row) => {
    return [...acc, row.split(" ").filter(val => val !== "")]
},[] ));


const hasMatch = (board, num) => board.includes(num);

let matches = boards.map(board => {
    return {
        rows: [0,0,0,0,0],
        columns: [0,0,0,0,0]
    }
})

function addUncalled(board, nums) {
    return board.flat().reduce((total, num) => {
        if (nums.includes(num)) {
            return total;
        }
        return total + +num;
    },0)
}


let match = null;
let called = [];
numbers.forEach(num => {
    if (match){return;}
    called.push(num);
    boards.forEach((board, boardIndex) => {
            if (match){return;}
            board.forEach((row, rowIndex) => {
                if (hasMatch(row, num)) {
                    matches[boardIndex].rows[rowIndex] += 1;
                }
                const column = [board[0][rowIndex],board[1][rowIndex],board[2][rowIndex],board[3][rowIndex],board[4][rowIndex]];
                if (hasMatch(column, num)) {
                    matches[boardIndex].columns[rowIndex] +=1;
                }
    
            });
            if (matches[boardIndex].columns.includes(5) && !match) {
                const column = matches[boardIndex].columns.indexOf(5);
                console.log(board);
                match = true;
                console.log(addUncalled(board, called) * num);
                console.log(`bingo on board:${boardIndex} column:${column} number:${num}`)

            }
            if (matches[boardIndex].rows.includes(5) && !match) {
                console.log(board.flat())
                const row = matches[boardIndex].rows.indexOf(5);
                match=true;
                console.log(addUncalled(board, called) * num);
                console.log(`bingo on board:${boardIndex} row:${row} number:${num}`)
            }
    })
});

// console.log(bingo, boards)


