// space complexity - O(n)
// time complexity - O(n)
var twoSum = function (nums, target) {
	const map = new Map();
	const resArr = [];
	for (let i = 0; i < nums.length; i++) {
		if (map.has(target - nums[i])) {
			resArr.push(i);
			resArr.push(map.get(target - nums[i]));
			break;
		}
		map.set(nums[i], i);
	}
	return resArr;
};
