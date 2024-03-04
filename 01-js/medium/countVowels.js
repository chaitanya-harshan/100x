/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  str = str.toLowerCase();
  let count=0;
  for( let i=0; i<str.length; i++){
    if( str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
      count++;
    }
  }
  return count;
  // let vowels = ['a','e','i','o','u'];      ------- NOT WORKING becasue set only checks for 1 occurance.
  // const string = new Set(str);
  // for(let i=0; i<5; i++){
  //   if(string.has(vowels[i])){
  //     count++;
  //   }
  // }
  // return count;
}

module.exports = countVowels;