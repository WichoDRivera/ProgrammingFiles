"""
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

"""

# Big O      Time Complexity: O(n)             Space Complexity O(n)

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if len(nums) <= 1:
            return False
        
        dicc = {}
        for element in nums:
            if element in dicc:
                return True
            dicc[element] = element
        return False
