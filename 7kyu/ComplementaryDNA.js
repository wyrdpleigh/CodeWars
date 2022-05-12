// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// create a constant called mapping
// create a map of DNA complements

const mapping = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  
  // create a constant DNAStrand
  // call an arrow function seq to sequence the DNA
  // split the string
  // map the indexes to change their complements according to mapping
  // join the new DNSStrand string
  
  const DNAStrand = seq =>
    seq
      .split('')
      .map(x => mapping[x])
      .join('');