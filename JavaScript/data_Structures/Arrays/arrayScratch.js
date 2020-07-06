/*
* Create an Array from scrath
*/
// Array: Are objects with integer based keys

class MyArray {
  constructor(){
    this.length = 0;
    this.data = {}
  }

  // O(1)
  get(index){
    return this.data[index];
  }

  // O(1)
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length
  }

  // O(1)
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  // O(n)
  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
  }

  // O(n)
  shiftItems(index){
    for (let i = index; i < this.length - 1; i++ ){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1]
    this.length--;
  }

}

const newArray = new MyArray();
//Push
newArray.push('Hi');
newArray.push('You');
newArray.push('!');

//Pop
//newArray.pop();

//Delete
newArray.delete(0);

//Push
newArray.push('are');
newArray.push('nice');

//Delete
newArray.delete(1);

//Overall
console.log(newArray);

