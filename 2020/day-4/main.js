import { importFile, importStrings } from "../../utils/dataUtils.js";

// const data = importStrings('./demo.txt').reduce(([final, temp], current)=>{
//     if (current === ""){    
//         return [[...final, temp], []]
//     }
//     return [final, [temp+ " ", current]]
// },[[],[]])[0];

const data = importStrings('./data.txt').reduce(([prev, str], current) => {
    if (current === "") {
        return [[...prev, str], ""]
    }
    return [prev, str + " " + current]
}, [[], ""]).flat()


const dataObj = data.map(str => {
    const newData = str.replace(" ", "").split(" ").reduce((obj,item) => {
        const[key, value] = item.split(":");
        return {...obj, [key]: value}
    },{});
    return newData;
})

let answer1 = 0;


dataObj.forEach(obj => {
    if (Object.keys(obj).length === 8) {
        answer1 += 1;
        return;
    }
    if (Object.keys(obj).length === 7 && !obj.cid) {
        answer1 += 1;
        return;
    }

})

console.log(answer1)


const numValid = (low, high) => num => parseInt(num) >= low && parseInt(num) <= high;
const digitValid = digits => num => num.toString().length === digits;

const byr = (num) => digitValid(4)(num) && numValid(1920, 2002)(num);
const iyr = (num) => digitValid(4)(num) && numValid(2010, 2020)(num);
const eyr = (num) => digitValid(4)(num) && numValid(2020, 2030)(num);

console.log(byr(800))

const hgt = (value) => {
    if (value.includes("cm")) {
        return numValid(150,193)(value.replace("cm", ""))
    }
    if (value.includes("in")) {
        return numValid(59,76)(value.replace("in", ""))
    }
    return false;
}

const hcl = (value) => {
    if (value.charAt(0) === "#" && value.length === 7) {
        const num = value.replace("#", "");
        //console.log(num, parseInt(num,16))
        return parseInt(num,16).toString(16) ===  num.toLowerCase();
    }
    return false;
}

const ecl = (value) => {
    const valid = ["amb","blu","brn","gry","grn","hzl","oth"];
    return valid.includes(value);
}

const pid = digitValid(9);

const cid = (num) => true;

const validators = {    
    byr,
    iyr,
    eyr,
    hgt,
    hcl,
    ecl,
    pid,
    cid,
}

let answer2 = 0;

dataObj.forEach(obj => {

    
    if (Object.keys(obj).length === 8 || (Object.keys(obj).length === 7 && !obj.cid)) {
        //console.log(`testing ${JSON.stringify(obj)}`)
        for (const property in obj) {
            if (!validators[property](obj[property])) {
                //console.log(`invalid ${property} ${obj[property]}`)
                return;
            }
            if(property === "hcl") {
                console.log(`valid ${property} ${obj[property]}`)
            }
            

        }
        answer2 += 1;
        return;
    }
    return;
})

console.log(answer2)
