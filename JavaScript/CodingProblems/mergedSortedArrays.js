/*
* Merge 2 sorted arrays in ascendant order
* mergeSortedArrays([0,3,4,31], [3,4,6,30]);
*/

function mergeSortedArrays(array1, array2){

 //Check Input
  if(array1.length === 0){
    return array2;
  }
  if(array2.length === 0){
    return array1;
  }

  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let indexArray1 = 1;
  let indexArray2 = 1

  while(array1Item || array2Item ){
    console.log(array1Item, array2Item)
    if( array2Item === undefined || array1Item < array2Item){
      mergedArray.push(array1Item);
      array1Item = array1[indexArray1];
      indexArray1++;
    }
    else{
      mergedArray.push(array2Item);
      array2Item = array2[indexArray2];
      indexArray2++;
    }
  }

  return mergedArray;
}



//Test Cases

mergeSortedArrays([0,3,4,31], [3,4,6,30]);
mergeSortedArrays([1],[5,6,7,8])
mergeSortedArrays([0,0,0,0],[1,2,3,4])
mergeSortedArrays([11,12,13],[1])
mergeSortedArrays([5],[1,2,3,4,6,7,8])
