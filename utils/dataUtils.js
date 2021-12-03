import { readFileSync } from 'fs';

export const importFile = path => readFileSync(path, "utf-8");

export const textToArray = text => text.split("\n");

export const importStrings = path => textToArray(importFile(path));

export const importNums = path => importStrings(path).map(str => parseInt(str));

export const importMulti = (path, types) => {
    const data = importStrings(path).map(item => item.split(" "));
    if (!types) {
        return data;
    }
    if (types.length !== data[0].length) {
        throw new Error("types needs same length as arrays")
    }
    return data.map(items => {
        return items.map((item, index) => {
            if (types[index] === "num") {
                return parseInt(item);
            }
            return item;
        });
   
    })
}

export const arrayToString = arr => arr.toString().replace(/,/g, "");
