import { importMulti } from "../../utils/dataUtils.js";

const maze = importMulti('./data.txt').map(row => row[0].split(""));

function getTrees(columnTravel, rowTravel) {
    let trees = 0;
    function travel(row, column) {
        if (row >= maze.length) {
            return;
        }
        if (column >= maze[0].length) {
            column = column % maze[0].length;
        }
        if (maze[row][column] === "#") {
            trees += 1;
        }
        return travel(row + rowTravel, column + columnTravel);
    }
    travel(0,0);
    return trees;
}

const answer1 = getTrees(3,1);
console.log(answer1);

const answer2 = getTrees(1,1) * getTrees(3,1) * getTrees(5,1) * getTrees(7,1) * getTrees(1,2);

console.log(answer2);
