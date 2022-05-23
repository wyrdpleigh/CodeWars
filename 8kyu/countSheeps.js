// this challenge can be solved in a number of ways
// but we can create a simple variable solutution using an implicit return 
// and a Boolean filter tied to the array length

var countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length

// below are some other ways to solve this problem

// with a loop

// function countSheeps(arrayOfSheep) {
//     let counter = 0
//     for(let i = 0; i < arrayOfSheep.length; i++) {
//         if(arrayOfSheep[i]) counter += 1
//     }
//     return counter
// }

// function countSheeps(arrayOfSheep) {
//     let counter = 0
//     arrayOfSheep.forEach(sheep => {
//         if(sheep) counter++
//     })
//     return counter
// }



// Filter solutionsd

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(item => item === true).length
// }

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(Boolean).length
// }



// Reduce solution

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.reduce((acc, cur) => acc + cur, 0)
// }