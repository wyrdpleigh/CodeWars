// prep
// 1 to num, 3 fizz, 5 buzz, 3&5 fizzbuzz
// p: num, whole, +
// r: console
// e:

// function fizzBuzz(n) {
//     // for loop
//     //conditionals % 3&5 fizzbuzz, % 3 fizz, % 5 buzz
//     for (var i = 1; i < 101; i++) {
//         if (i % 15 == 0) console.log("FizzBuzz");
//         else if (i % 3 == 0) console.log("Fizz");
//         else if (i % 5 == 0) console.log("Buzz");
//         else console.log(i);
//     }
// }


// fizzBuzz = n => new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i)

// Use an implicit return to solve fizzBuzz

// call fizzBuzz for n
// Create a new Array class from n
// fill array n to separate it into an array of individual elements equal to the array length starting from zero
// map the array using an accumulator and the index
// creating a map structure that 
// iterates the index ++i and 
// returns an empty string if mod 3 is truthy, or fizz if mod 3 is falsy
// plus
// an empty string if mod 5 is truthy, or buzz if mod 5 is falsy 
// or 
// an empty string plus the index value 

fizzBuzz = n => new Array(n).fill(0).map((a,i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i)

console.log(fizzBuzz(26))