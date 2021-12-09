import { importFile } from '../utils/dataUtils.js';

console.log([...Array(256)].reduce(a=>[...a.slice(1,6),a[7]+a[0],a[8],a[0]],importFile('data.txt').split(',').map(n=>parseInt(n)).reduce((a,n)=>[...a.slice(0,n),a[n]+1,...a.slice(n+1)],[...Array(9)].fill(0))).reduce((t,d)=>t+d))

// console.log(importFile('data.txt').split(',').reduce((a,d)=>a[d]+=1,[...Array(9)].fill(0)))

// const data = importFile('data.txt').split(',');

// const empty = [...Array(9)].fill(0)

// const filled = data

// console.log(filled)

// const initialData = importFile('demo.txt').split(',').map(n=>parseInt(n)).reduce((a,n)=>[...a.slice(0,n),a[n]+1,...a.slice(n+1)],[...Array(9)].fill(0));

// const dayArray = [...Array(18)]

// console.log(initialData[8])

// const filled = dayArray.reduce(a=> {
//     //console.log(a)
//     console.log(a[8])
//     console.log([...a.slice(1,6)], a[7] + a[0], a[8], a[0]  )
//     console.log(a[8])
//     // console.log(a[7])
//     return [ ...a.slice(1,7) , a[7]+a[0], a[8], a[0] ]}
//     ,
//     initialData)




// console.log(filled)
// const answer = filled.reduce((t,d)=>t+d)

// console.log(answer)