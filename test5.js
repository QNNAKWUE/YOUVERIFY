//One Away

let oneAway = (s1, s2) => {
    let edits = 1;
    let maxLen = Math.max(s1.length, s2.length);
    let diff = Math.abs(s1.length - s2.length);
  
    if (diff > edits) {
      return false;
    }
    for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
      let c1 = s1[i];
      let c2 = s2[j];
      if (c1 !== c2) {
        edits--;
        if (edits < 0) {
          return false;
        }
        if (s1[i] === s2[j + 1]) { //inserted
          j++;
        } else if (s1[i + 1] === s2[j]) { //removed
          i++;
        }
      } 
    }
    return true;
  };
 
  console.log(
    oneAway('pale', 'ple') === true, //removed
    oneAway('pales', 'pale') === true, //inserted
    oneAway('pale', 'bale') === true, //replaced
    oneAway('pale', 'bake') === false,
    oneAway('p', '') === true,
    oneAway('', 'bake') === false,
    oneAway('pr', 'r') === true,
    oneAway('pr', 'rp') === false,
    oneAway('brrr', 'brrss') === false,
    oneAway('abc', 'acs') === false,
    oneAway('aple', 'aple') === true 
  );