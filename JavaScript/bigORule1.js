// Big O Rule 1: Worst Case Scenario

const nemo = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

function findNemo(array){
  for (let i = 0; i < array.length; i++){
    console.log('Running')
    if (array[i] === 'nemo'){
      console.log('Found NEMO!');
      break;
    }
  }
}

findNemo(nemo);

// If nemo at first place = O(1)
//If is at the end = O(n)

