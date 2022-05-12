// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    // declare a variable for the new string and declar
    let newStr = "",
        i;
        // loop through the string
        // if an index of the string contains "aeiou", continue the loop
        for (i = 0; i< str.length; i++) {
            if ("aeiou".includes(str[i].toLowerCase())) 
            continue;
        // if the index element isn't a vowel, add it to the new string.
            newStr += str[i];
        }
    // return the new string
    return newStr;
}