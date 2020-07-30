/*
* Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
* If there are two or more words that are the same length, return the first word from the string with that length.
* Ignore punctuation and assume sen will not be empty.
*/

// Big O          Complexity: O(n)       Space: O(n)

function LongestWord(sen) { 
  let tempSen = sen.replace(/[^a-zA-Z0-9 ]/g, '');

  let arr = tempSen.split(" ");

  let maxTime = arr[0];
  for(let i = 1; i < arr.length; i++){
    let tempMax = arr[i];
    if (tempMax.length > maxTime.length ){
      maxTime = tempMax
    }
  }
  return maxTime; 
}
   
// keep this function call here 
console.log(LongestWord(readline()));
