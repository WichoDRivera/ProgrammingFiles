/*Example of code in JS*/
// Find nemo in an array

const nemo = ["nemo"];

function findNemo(array){
  for (let i = 0; i < array.length; i++){
    if (array[i] === 'nemo'){
      console.log('Found NEMO!');
    }
  }
}

findNemo(nemo);
