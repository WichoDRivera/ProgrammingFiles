
// Luis Rivera Solution
// No colission solution

class HashTable {
  constructor(size){
    this.data = new Array(size);
    /* Bucket example:
    ['key', value]
    */
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value){
    // splice(index, remove n elements, new value)
    let newKey = myHashTable._hash(key);
    this.data.splice(newKey,1,value);
  }

  get(key){
    key = myHashTable._hash(key);
    if(this.data[key] != undefined){
      return this.data[key];
    }
    return 'Not found'
  }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')


// Course Solution
// Colission Solution: Separate Chaining

class HashTable2 {
  constructor(size){
    this.data = new Array(size);
    /* Bucket example:
    ['key', value]
    */
  }

// _name => if its a private property, but its just meaningless, not technially
  _hash(key) {
    /*
    Grab length and Grab the UTF code of the letter
    % --> modular operator, to be in the size of the data (50)
     */
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
        //console.log(hash)
    }
    return hash;
  }

  set(key, value){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key,value])
    return this.data
  }

  get(key){
    // Avr: O(1) --> if no colission
    // Worst: O(n) --> if colision and bad colision policy 
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket){
      for (let i = 0; i < currentBucket.length; i++){
        if (currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  // Loop through all keys in the table with no order at all
  // This is better with arrays 
  // O(n)
  keys(){
    const keyArr = []
    for (let i = 0; i < this.data.length; i++){
      if(this.data[i]){
        //console.log(this.data[i][0][0]);
        keyArr.push(this.data[i][0][0]);
      }
    }
    return keyArr;
  }

  // keys with collision detection
   keysNoColl() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
  }


}

const myHashTable2 = new HashTable2(20);
myHashTable2.set('grapes',1000);
myHashTable2.set('apples',54 );
myHashTable2.set('oranges',2 );myHashTable2.keys();
