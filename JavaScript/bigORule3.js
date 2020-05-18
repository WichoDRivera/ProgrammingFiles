//Big O Rule 3 Different terms of inputs

function compressBoxesTwice(boxes, boxes2){
  //Since boxes and boxes2 are 2 diff inputs

  // O(a) = depends on how long the 1st input is
  boxes.forEach(function(boxes){
    console.log(boxes);
  });

  // O(b) = depends on how long the 2nd input is
  boxes2.forEach(function(boxes){
    consol.log(boxes;)
  });
}

// So, the overall Big O is O (a + b)
// Its a common mistake to think that:
// First loop is O(n) and second is O(n) so its gonna be O(2n) == O(n)
// But O(2n) != O(a + b)

