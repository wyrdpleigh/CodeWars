// Your task is to write a function which returns the sum of following series upto nth term(parameter).

function SeriesSum(n){
    // use a for loop to iterate through the array
    // create var s in the loop to serve as the reaverager
    // iterate through array n
    // for the reaverager, add 1 divided by 1 plus the index value multiplied by three
    // finally, return the reaverager with a fixed decimal value using .toFixed()
    for (var s = 0, i = 0; i < n; i++) {
       s += 1 / (1 + i * 3)
     }
     return s.toFixed(2)
  }