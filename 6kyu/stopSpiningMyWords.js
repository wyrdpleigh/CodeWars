// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// p: string of words
// r
// e
// p

// failed one-line solution
// stopSpin = string => new String(string).split(' ').map((a,word) => (word.length > 4) ? word.split('').reverse().join('') : word).join(' ') 

// clunky but workable version

// create a function spinWords which takes in words

function spinWords(words){
    // create a constant that will hold the sentence string as an array
    // split the sentence on each space
    const sentenceArray = words.split(' ');
    // create a variable of an empty string for the result
    let result = '';
    // map the array
    sentenceArray.map((str, i) => {
        // if individual string length is greater than or equal to five letters, split it, reverse the string, then rejoin it
      if (str.length >= 5){
        sentenceArray[i] = str.split('').reverse().join('');
        // otherwise leave the string alone
      } else {
        sentenceArray[i] = str;
      }
    // new result equals the sentence array joined at the spaces
    result = sentenceArray.join(' ');
    });
  return result;
  }


  // below is a clever regex solutions

  // use string.replace to replace all words with 5 ore more letters with a reversed string
  // within the /regex/ solution, \w is words, {5,} is a Quantifier to match 5 or more of the preceding tokens (letters), g, is global
  // use a function (w) within the return to return each 5 letter or longer word split, reversed, and joined

  function spinWords(string){
    return string.replace(/\w{5,}/g, 
      function(w) {return w.split('').reverse().join('')}
    )
  }

