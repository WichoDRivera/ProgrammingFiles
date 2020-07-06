/* 3 Main concepts in JavaScript and in Object Oriented Programming
* Difference between Reference, Context VS Scope , Instantiation 
*/

// Reference Type

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 === object2);
console.log(object2 === object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

// False: its not stored in the same memory location
console.log( ['2'] === ['2'] );

// True: its located in the same memory since its the same content
console.log( 'aws' === 'aws');


// Context vs Scope
// Scope: when created with curve brackets {} like a function
function b() {
  let a = a;
  //scope in this function, not global
}
// Error because a is not in scope
//console.log(a);

// It works on browser terminal
this.alert("Hello");

function a(){
  console.log(this);
}

//a()
//window.a()

const object4 = {
  a: function(){
    console.log(this);
  }
}

// Instantiation
// When make a copy of the object and use the code

class Player{
  // Each time player is ran, create the properties of the player object
  constructor(name,type){
    console.log('player', this);
    this.name = name;
    this.type = type;
  }

  introduce(){
    console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
  }
}

// Extends: Get anything that the other class have
class Wizard extends Player{

  //Whenever extends, in the constructor use the super() to access to the original constructor
  constructor(name,type){
    super(name,type);
    console.log('Wizard', this);
  }

  play(){
    console.log(`Weeee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');

wizard1.play()
wizard1.introduce()

/* Classical Inheritance with Prototype*/

var Player2 = function(name,type){
  this.name = name;
  this.type = type;
}

Player2.prototype.introduce = function(){
  console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
}

var wizard3 = new Player2("Sharon", "Warlock")
var wizard4 = new Player2('Osborn', 'Stormcaller')

wizard3.play = function(){
  console.log(`WEEEE, I'm a ${this.type}` )
}

wizard4.play = function(){
  console.log(`WEEEE, I'm a ${this.type}` )
}
