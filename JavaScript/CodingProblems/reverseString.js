// Create a function that reverses a string:
// 'Hi my name is Andrei'
// 'ierdnA si eman ym iH'

function reverse(str){
  let arr = str.split('');
  let arr2 = [];

  for (let x = arr.length - 1; x >= 0; x-- ){
    arr2.push(arr[x]);
  }
  let str2 = arr2.join('');
  console.log(str2)
  return str2;
  
}


function reverse2(str){
  //Check Input
  if (!str || str.length < 2 || typeof str !== 'string'){
    return 'Not a String';
  }

  // Convertion
  const backwards = [];
  const totalItems = str.length -1;
  for (let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
  }
  //console.log(backwards);
  return backwards.join('');

}

reverse('Hi my name is Andrei');
reverse2('Hi my name is Luis');

// Built In function
function reverse3 (str){
//Check Input
  if (!str || str.length < 2 || typeof str !== 'string'){
    return 'Not a String';
  }
  return str.split('').reverse().join('');
}

// JS 6th edition of syntax
const reverse4 = str => str.split('').reverse().join('');


// JS 6th edition of syntax without split
const reverse5 = str => [...str].reverse().join('');

reverse('Hi my name is Andrei');
reverse2('Hi my name is Luis');
reverse3('Hi my name is Daniel');
reverse4('Hi my name is Marco Polo');
reverse5('Hi my name is Vladmir Stojkovic');
