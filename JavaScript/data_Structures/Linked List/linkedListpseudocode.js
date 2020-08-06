/*
Linked List Pseaudocode

const basket = ['apples', 'grapes', 
'pears'];

linked list: apples --> grapes --> pears

apples
8947 (Memory) --> grapes
                  8742   -->  pears
                              372   --> null 
*/

let obj1 = {a: true}
let obj2 = obj1; // ---> pointer to obj1, its the same location in memory as obj1

obj1.a = 'booya';
delete obj1
obj2 = 'hello'

console.log('1' , obj1);
console.log('2. ', obj2);
