/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * @param {number[]} nums
 * @return {number}
 */
 
 // Big O:    Time complexity: O(n)     Space Complexity: O(n)
 
var maxSubArray = function(nums) {
    let maxGlobal = nums[0]
    let currMax = nums[0]
    
    for (let i = 1; i < nums.length; i++){
        currMax = Math.max(nums[i], currMax + nums[i]);
        maxGlobal = Math.max(maxGlobal, currMax);
    }
    return maxGlobal;
};
