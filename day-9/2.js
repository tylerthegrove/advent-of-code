import { importFile } from '../utils/dataUtils.js';

const demo = importFile('demo.txt').split('\n').map(row => row.split('').map(num => parseInt(num)))
const real = importFile('data.txt').split('\n').map(row => row.split('').map(num => parseInt(num)))


function basinRowCount (row, index) {
    let basinCount = 0;
    let sample = row.slice(index);

}


function getBasins(data) {
    let simple = data.map(row => row.map(num => num === 9 ? 0 : 1))

    let filtered = data.map(row => row.reduce((array, num, index) => num === 9 ? [...array, " "] : [...array, index], [])); 

    let grouped = filtered.map(row => {
        return row.reduce((matches, entry, index, base) => {
            if (entry === " ") {
                if ((index - 1 >= 0)) {
                    if (base[index - 1] !== " ") {
                        return [...matches, "s"]
                    }
                    else {
                        return matches;
                    }
                }
                else {
                    return [...matches, "s"]
                }
            }
            if(matches.length <= 0 || matches[matches.length-1] === "s") {
                return [...matches, [entry]]
            }

            else {
                return [...matches.slice(0, matches.length-1), [...matches[matches.length - 1], entry]]
            }
        },[]).filter(n => n !== "s")
    })

    console.table(grouped)

    let groups = findGroup(grouped);

    console.log(groups)
    
    let groupsCount = groups.map(group => group.flat().length).sort((a, b) => a - b);
    console.log(groupsCount)
    let last3 = groupsCount.slice(-3)
    console.log(last3)
    let fullCount = last3.reduce((sum, num) => sum * num)
    console.log(fullCount)


//     let zones;

//    for each row 

//    if row [0] and nextRow [0] contain any similarities check next row ...

//    group and remove duplicates

//    do it again

//    not strings, arrays of indexes
}

function shareAny(arr1, arr2) {
    let hasSimilar = false;
    arr1.forEach(num => {
        if(hasSimilar) {
            return;
        }
        if (arr2.includes(num)) {
            hasSimilar = true;
        }
    })
    return hasSimilar;
}
function findAllGroups(array) {
    let allGroups = [];
    

}
function findGroup(ar, groups = []) {
    // console.log(ar, groups)


    let filterEmpty = ar.filter(row => row.length > 0);

    console.log("\n\n\n\n\n\n\n\n")
    console.log("remaining array")
    console.log(filterEmpty)

    console.log("existing groups")
    console.log(groups)
   
    if (filterEmpty.length === 0) {
        return groups;
    }
    function findSimilar(array, row = 0, index = 0, group=[]) {
        let test = array[row][index];
        group.push(test)
        array[row].splice(index, 1);
        if (array[row + 1]) {

            array[row + 1].map((entry, itemIndex) => {
                if (shareAny(test, entry)) {
                   matches.push(test);
                }
                let subgroups = matches.map(group => {
                    return (findSimilar(array, row + 1, itemIndex, group)[1])
                })
            })

        }
        
        return [array, [group, ...subgroups]];
        
    }

    let [newArray, newGroup] = findSimilar(filterEmpty);
    // console.log(newArray)
    // console.log(newGroup)


    return findGroup(newArray, [...groups, ...newGroup])
}

 
    
    
    //return simple;



getBasins(demo)
// getBasins(real)