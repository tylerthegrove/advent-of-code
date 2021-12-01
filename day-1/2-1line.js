console.log(require('./data.js').reduce((p,c,i,a)=>[p[1]<c+a[i+1]+a[i+2]?p[0]+1:p[0],c+a[i+1]+a[i+2]],[-1,0])[0]);

//readable version
// console.log(
//     require('./data.js').reduce((previous, current, index, array) => {
//         const windowTotal = current + array[index + 1] + array[index + 2];
//         let counter = previous[0];
//         const previousWindow = previous[1];

//         if (windowTotal > previousWindow) {
//             counter += 1;
//         }
//         return [counter, windowTotal];
//     },[-1, 0])[0]
// )