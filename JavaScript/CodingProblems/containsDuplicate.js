/*
* Given an array of integers, find if the array contains any duplicates.
* Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

// Big O      Time Complexity: O(n)             Space Complexity O(n)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    if(nums.length <= 1){
        return false;
    }
    
    let dicc = {};
    for(let i = 0; i < nums.length; i++){
        if (nums[i] in dicc == true){
            return true;
        }
        dicc[nums[i]] = nums[i];
    }
    return false
};
