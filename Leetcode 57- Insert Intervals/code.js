/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

/**

* time Complexity - O(n)
* space complexity - O(n)

 */

var insert = function (intervals, newInterval) {
	let [newStart, newEnd] = newInterval;
	let left = [],
		right = [];
	for (item of intervals) {
		let [start, end] = item;
		if (end < newStart) left.push(item);
		else if (start > newEnd) right.push(item);
		else {
			newStart = Math.min(newStart, start);
			newEnd = Math.max(newEnd, end);
		}
	}
	return [...left, [newStart, newEnd], ...right];
};
