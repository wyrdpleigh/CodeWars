// use Math.min to return the smallest 
// the spread syntax ... takes in an iterable (e.g an array) and expands it into individual elements.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }