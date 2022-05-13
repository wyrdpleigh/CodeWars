// prep
// 1 to num, 3 fizz, 5 buzz, 3&5 fizzbuzz
// p: num, whole, +
// r: console
// e:

// function fizzBuzz(n) {
//     //loop
//     //conditionals % 3&5, % 3, % 5
//     for (var i = 1; i < 101; i++) {
//         if (i % 15 == 0) console.log("FizzBuzz");
//         else if (i % 3 == 0) console.log("Fizz");
//         else if (i % 5 == 0) console.log("Buzz");
//         else console.log(i);
//     }
// }

fizzBuzz = n => new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i)