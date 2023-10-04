/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/**
 * time Complexity - O(nlogn) + O(n)         //due to sorting and a loop
 * space complexity - O(n)
 */

var merge = function (intervals) {
	intervals = intervals.sort((a, b) => a[0] - b[0]);
	let curr_pair = intervals[0];
	let resArr = [];
	for (const item of intervals) {
		if (item[0] <= curr_pair[1]) {
			curr_pair[1] = Math.max(curr_pair[1], item[1]);
		} else {
			resArr.push(curr_pair);
			curr_pair = item;
		}
	}
	resArr.push(curr_pair);
	return resArr;
};
