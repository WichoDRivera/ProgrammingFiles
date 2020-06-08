// Example of Big O = O(n!)

let counter = 1;

function nFacRuntimeFunc(n){
  for (let i = 0; i<n; i++){
    console.log(n)
    nFacRuntimeFunc(n-1);
  }
}

nFacRuntimeFunc(3)
