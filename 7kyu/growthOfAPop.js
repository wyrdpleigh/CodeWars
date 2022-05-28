// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year 
// and moreover 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// p: p0, percent, aug, p 
// r: n years
// e: 2 years 1141 pop
// ps: nb_years, finalCatch, percentage conversion, current value within loop


function nbYear(p0, percent, aug, p) {
    // initialize array
    
      var finalCatch = [];
    
    // Convert percentage
    
      var percent = percent / 100 
      
    // Loop through
      
      for( var p0; p0 < p; p0 +=p0 * percent + aug) {
        
        // Create a current value placeholder
        
        currValue = p0 + p0 * percent + aug;
        
        // Push the current value to the finalCatch until loop ends
        
        finalCatch.push(currValue);
      }
    
      // Return final catch once the loop ends
        return finalCatch.length;
  }