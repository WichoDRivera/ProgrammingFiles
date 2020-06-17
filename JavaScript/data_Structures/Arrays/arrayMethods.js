// Arrays : Organize items sequentially 

const strings = ['a','b','c','d']
// 4 shells per item = 16 bytes of storage

strings[2]

// Push: Adds at the end of the array
strings.push('e');      // O(1)
console.log(strings);  

// Pop: Remove last item
strings.pop();         // O(1)
console.log(strings);  

// Unshift: Adds at the begginig of the array
strings.unshift('x');   // O(n)
console.log(strings);


/** Splice: Can divide the array into parts
/* Can also be used to insert in the
 * desire position */
strings.splice(2,0,'alien');   // O(n)
console.log(strings);

