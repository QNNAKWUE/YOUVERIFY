//String Compression

let stringCompression = (s) => {
    let out = '';
    let count = 1;
  
    for (let i = 0; i < s.length; i++) {
      let cur = s[i];
      let next = s[i + 1];
      if (cur === next) {
        count++;
      } else {
        out += cur + String(count);
        count = 1;
      }
    }
    return out.length < s.length ? out : s;
  };
  
  console.log(
    stringCompression('aabcccccaaa') === 'a2b1c5a3',
    stringCompression('aa') === 'aa',
    stringCompression('aaAAaa') === 'aaAAaa',
    stringCompression('aaaAAaa') === 'a3A2a2',
    stringCompression('') === ''
  );