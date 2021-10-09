
//Palindrome Permutation:

let palPerm = (s) => {
    //if even: there must be two of every char
    //if odd: there must be only one unique char
  
    //use hash table to store letters
    //if we see the same letter again, delete from hash
    //check hash at the end: odd - 1 key left, even - no keys left
    //skip spaces
  
    let hash = {};
    let charCount = 0;
  
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (c === ' ') {
        continue;
      }
      if (hash[c]) {
        delete hash[c];
      } else {
        hash[c] = true;
      }
      charCount++;
    }
    if (charCount % 2 === 0) {
      return Object.keys(hash).length === 0;
    } else {
      return Object.keys(hash).length === 1;
    }
  };
  
  console.log(
    palPerm('taco cat') === true,
    palPerm('atco cat') === true,
    palPerm(' rac  ecar rara ') === true,
    palPerm('chirpingmermaid') === false,
    palPerm('aabbc') === true,
    palPerm('aaaabbbbcc') === true,
    palPerm('aabc') === false,
    palPerm('') === true
  );