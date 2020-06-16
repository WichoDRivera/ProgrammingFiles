// Space Complexity

// O(1) : Only 1 input, and we are not adding any space, just the i variable
function boooo(n){
  for (let i = 0; i < n.length; i++){
    console.log("boooo!");
  }
}
boooo([1,2,3,4,5]);


// O(n): Because creating the data structure and adding items within it
function arrayOfHiNTimes(n){
  let hiArray = []; //O(n)
  for (let i = 0; i < n; i++){ //O(1)
    hiArray[i] = "Hi"; 
  }
  return hiArray;
}
arrayOfHiNTimes(6)
