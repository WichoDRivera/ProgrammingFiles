// For Loops examples


const large = ['pepe','paola','Nemo','napoleon','elizabeth','Juan']

//Ex 1: Normal For Loop
function findNemo(array){
  for (let i = 0; i < array.length; i++){
    if (array[i] === 'Nemo'){
      console.log('Found Nemo!!')
    }
  }
}
findNemo(large);

//Ex 2: For each --> New in ES6
const findNemo2 = array => {
  array.forEach(i =>{
    if(i === 'Nemo'){
      console.log('Found Nemo!!')
    }
  })
}
findNemo2(large)

//Ex 3: Hybird For Each
const findNemo3 = array => {
  for (let i of array) {
    if(i === 'Nemo'){
      console.log('Found Nemo!!')
    }
  }
}
findNemo3(large)
