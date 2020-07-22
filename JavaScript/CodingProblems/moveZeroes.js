/*
* Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*  Extra:
* 1. You must do this in-place without making a copy of the array.
* 2. Minimize the total number of operations.
*/

// Big O:   Time Complexity = O(n)       Space Complexity = O(1) ---> no more memory

var moveZeroes = function(nums) {
    
    let index = 0
    for( let i = 0; i < nums.length; i++){
        if ( nums[i] != 0){
            nums[index] = nums[i];
            index++;
        }
    }
    
    while (index < nums.le){
        nums[index] = 0
        index++
    }
    
    
    
};
