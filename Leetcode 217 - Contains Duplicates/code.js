// Approach 1
var containsDuplicate = function (nums) {
	const arr = [...new Set(nums)];
	return JSON.stringify(arr) !== JSON.stringify(nums);
};

/**
 *
 */

// Approach 2
var containsDuplicate = function (nums) {
	const set = new Set(nums);
	return nums.length !== set.size;
};
