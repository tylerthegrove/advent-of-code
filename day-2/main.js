import { importMulti } from "../utils/dataUtils.js";

const directions = importMulti('./data.txt', ["str", "num"]);


const answer1 = directions.reduce((prev, acc) => {
    const [depth, horizontal] = prev;
    const [direction, amount] = acc;
    if (direction === "forward"){
        return [depth + amount, horizontal]
    }
    if (direction === "down"){
        return [depth, horizontal + amount]
    }
    if (direction === "up"){
        return [depth, horizontal - amount]
    }
}, [0,0]);

console.log(answer1[0] * answer1[1]);


const answer2 = directions.reduce((prev, acc) => {
    const [depth, horizontal, aim] = prev;
    const [direction, amount] = acc;
    if (direction === "forward"){
        return [depth + (aim * amount),horizontal + amount, aim]
    }
    if (direction === "down"){
        return [depth, horizontal, aim + amount]
    }
    if (direction === "up"){
        return [depth, horizontal, aim - amount]
    }
}, [0,0,0]);

console.log(answer2[0] * answer2[1]);
