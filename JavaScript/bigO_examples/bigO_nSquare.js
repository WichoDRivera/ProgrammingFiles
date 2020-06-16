// Example of Big O = O(n^2)

//Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

// For nested loops , will be n^2
/* If there is m loops it will be :
* O(n^2)  for 2 nested loops
* O(n^3)  for 3 nested loops
* O(n^m)  for m nested loops
*/
