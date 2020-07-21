"""
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
"""

# Big O:    Time complexity: O(n)     Space Complexity: O(n)

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxLocal = nums[0]
        maxGlobal = nums[0]
        
        for i in range(1, len(nums)):
            maxLocal = max(nums[i], maxLocal + nums[i])
            maxGlobal = max(maxGlobal, maxLocal)
        
        return maxGlobal
