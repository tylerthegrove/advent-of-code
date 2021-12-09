import { importFile } from "../utils/dataUtils.js";

const letters = importFile('alphabet.txt').split(',');

let words = []

function addLetters(string) {
    if(string.length > 5) {
        words.push[string]
        return;
    }
    for(let i = 0; i <=25; i++) {
        
        addLetters(string+letters[i])
    }
}

addLetters("ba")