"""
Given an array, rotate the array to the right by k steps, where k is non-negative

"""

#  Big O         Time Complexity : O(n)       Space Complexity: O(1)

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        for x in range(0, k):
            nums.insert(0,nums.pop())
