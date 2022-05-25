// This problem can be solved using an implicit return
// create a variable removeExclamationMarks
// use the .replace() method to replace exclamation marks
// we can use the regex expression (/ !/,g, '')

var removeExclamationMarks = (s) => s.replace(/!/g,'');