"""
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
"""

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        dicc = {}
        
        for i in range(0,len(nums)):
            
            if nums[i] in dicc:
                return [dicc[nums[i]], i]
            dicc[target-nums[i]]  = i
