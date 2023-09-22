// Given an integer array nums, find the subarray with the largest sum, and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * time complexity: O(n)
 * space complexity: O(1)
 */

var maxSubArray = function (nums) {
	let maxSum = nums[0];
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum = sum + nums[i];
		if (sum > maxSum) maxSum = sum;
		if (sum < 0) sum = 0;
	}
	return maxSum;
};
