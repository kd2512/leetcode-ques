/**
 * @param {number[]} height
 * @return {number}
 */

/**
 * time Complexity - O(n)
 * space complexity - O(1)
 */
var maxArea = function (height) {
	let left = 0;
	let right = height.length - 1;
	let max = 0;

	while (left < right) {
		let curr_max = Math.min(height[left], height[right]) * (right - left);
		max = Math.max(curr_max, max);
		if (height[left] < height[right]) left++;
		else if (height[left] > height[right]) right--;
		else {
			left++;
			right--;
		}
	}
	return max;
};
