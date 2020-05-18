// What is the Big O of the below function? (Hint, you may want to go line by line)

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  // O(n)
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); //O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// Answer = O(3) + O(4n)
//      O (4n+3) = O(N)
