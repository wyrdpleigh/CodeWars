// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is 
// divisible by both integers a and b.

// this challenge can be solved using an implicit return
// create a var isDividedBy with the values (number, a, b)
// return whether number is divisible by a and b 
// do this by comparing the value of a and b using a mod with equal value and type as 0

var isDivideBy = (number, a, b) => (number % a === 0) && (number % b === 0)