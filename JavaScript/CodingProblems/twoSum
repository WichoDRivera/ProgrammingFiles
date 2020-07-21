/*
* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
* You may assume that each input would have exactly one solution, and you may not use the same element twice
*/

// Big O:   Time Complexity = O(n)       Space Complexity = O(n) --> since we are using a hash

var twoSum = function(nums, target) {
    const dicc = {};
    
    for (let i = 0; i < nums.length; i++){
        if (dicc[nums[i]] >= 0){
            return [dicc[nums[i]], i];
        }
        dicc[target-nums[i]] = i;
    }
    
};
