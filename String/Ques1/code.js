/**
 * Question --
 *
 * The question is to remove the duplicates from a string.
 *
 * e.g.1 - Input : hello world
 *         Output: helo wrd
 *
 * e.g.2 - Input : leetcode
 *         Output: letcod
 *
 */

/**
 * Below is the code:
 */

const removeDuplicates = (sentence) => {
	const map = new Map();
	const stringArr = sentence.split("");

	for (const item of stringArr) {
		if (!map.has(item)) map.set(item, 0);
	}

	const stringArr1 = Array.from(map.keys());
	const resString = stringArr1.join("");

	//console.log(resString);
	return resString;
};

console.log(removeDuplicates("hello world"));
