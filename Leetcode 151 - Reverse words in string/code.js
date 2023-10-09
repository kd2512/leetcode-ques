/**
 * @param {string} s
 * @return {string}
 */

/**
 Time complexity - O(n)
 space complexity - O(1)
 */

var reverseWords = function (s) {
	const tempString = s.split(" ").reverse().join();
	const resString = tempString
		.trim()
		.split(/[\s,\t,\n]+/)
		.join(" ")
		.trim();
	return resString;
};
