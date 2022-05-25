// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// return num using the negative value of the absolute value of num
// using the negative value of Math.abs() will return the negative value if num is positive
// Math.abs() will also return the negative value of num if it is already negative

function makeNegative(num) {
    return -Math.abs(num)
  }