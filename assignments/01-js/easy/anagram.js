/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  str1 = str1.replace(/\s/g,'');
  str2 = str2.replace(/\s/g,'');

  if (str1.length != str2.length) {
    return false;
  }

  let used = new Array(str2.length); // Creating an arr of length 5 for storing the used charcters
  used.fill(0);

  for(let i=0; i< str1.length; i++){
    for (let j = 0; j < str2.length; j++) {
      if( str1[i]===str2[j] && used[j]===0 ){
        used[j] = 1;
        break;
      }
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (used[i] != 1) {
      return false;
    }    
  }
  return true;
}

module.exports = isAnagram;
console.log(isAnagram("lis ten", "Silent"));