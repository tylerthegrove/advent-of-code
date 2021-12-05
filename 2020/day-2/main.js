import { importMulti } from '../../utils/dataUtils.js';

const data = importMulti('./data.txt');

const validate = ([times, letter, password]) => {
    const [bottom, top] = times.split("-");
    const l = letter.replace(":", "");

    const count = [...password].filter(n => n===l).length;

    return count >= bottom && count <= top;

}

const valid = data.filter(item => validate(item))


console.log(valid.length)

const validate2 = ([times, letter, password]) => {
    const [bottom, top] = times.split("-");
    const l = letter.replace(":", "");

    const pos1 = +bottom - 1;
    const pos2 = +top - 1;

    if (password[pos1] === l && password[pos2] === l) {
        return false;
    }

    return password[pos1] === l || password[pos2] === l


}


const answer2 = data.filter(item => validate2(item));


console.log(answer2.length);