 // Hash table example and types
 
let user = {
  age: 54,
  name : 'Kylie',
  magic: true,
  scream : function(){
    console.log('aaaaaa!');
  }
}

user.age // O(1)
user.spell = 'Abra Kadrabra'  // O(1)
user.scream()  // O(1)

/* Collision
 O(n/k) ---> O(n)
 Functions as key is a valid option
*/ 


/*
* Map : Any data type as the key
* Object: Only save the key as string
* Maintain insertion order, with objects there is no order
*/
const a = new Map();
a;

/*
* Sets: Only stores the key, no values
*/
const b = new Set();

