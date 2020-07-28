/*
* Given an array, rotate the array to the right by k steps, where k is non-negative
*/

// Big O         Time Complexity : O(n)       Space Complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k <= 0){
        return
    }
    for (let x = 0; x < k ; x++){
        let toAdd = nums.pop();
        nums.splice(0,0,toAdd);
    }
};
