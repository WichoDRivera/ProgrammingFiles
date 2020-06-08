// Big O Rule 4: Drop all the lower values

function printAllNumbersThenAllPairSums(numbers) {

  //O(n)
  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) { //O(n)
    numbers.forEach(function(secondNumber) { //O(n)
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5]); 
// O(n) = n + n*n
