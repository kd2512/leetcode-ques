/**
 * time complexity - O(n)
 * space complexity - O(n)
 */

var productExceptSelf = function (nums) {
	const n = nums.length;
	const leftArr = Array(n).fill(0);
	const rightArr = Array(n).fill(0);
	const outputArr = Array(n).fill(0);

	leftArr[0] = nums[0];
	rightArr[n - 1] = nums[n - 1];

	for (let i = 1; i < n; i++) {
		leftArr[i] = leftArr[i - 1] * nums[i];
	}

	for (let i = n - 2; i > 0; i--) {
		rightArr[i] = rightArr[i + 1] * nums[i];
	}
	outputArr[0] = rightArr[1];
	outputArr[n - 1] = leftArr[n - 2];

	for (let i = 1; i < n - 1; i++) {
		outputArr[i] = leftArr[i - 1] * rightArr[i + 1];
	}

	return outputArr;
};
