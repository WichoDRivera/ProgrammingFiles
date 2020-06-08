// Twitter Example
// Retrieve the first and last tweet from an account

const array = [{
  tweet: 'hi',
  date: 2012
}, {
  tweet: 'my',
  date: 2014
}, {
  tweet: 'teddy',
  date: 2018
}];

array[0]; //Older - O(1)
array[array.length-1] //recent - O(1)

//Big O: O(n*2) By compairing every element with each other tweet and compare dates

'helsoqwerjsoaw'.length //In JS, Big O: O(1) Because its an built in method and not a function (like python .length())
