"""
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Extra: 
1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.
"""

# Big O:    Time complexity: O(n)     Space Complexity: O(n)

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """        
        for value in nums:
            if value == 0:
                nums.remove(value)
                nums.append(0)
