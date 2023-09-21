//Approach 1
var isAnagram = function (s, t) {
	return s.split("").sort().join("") === t.split("").sort().join("");
};

//Approach 2
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	const map = new Map();

	for (const i of s) {
		if (map.has(i)) map.set(i, map.get(i) + 1);
		else map.set(i, 1);
	}

	for (const i of t) {
		if (!map.has(i)) return false;
		if (map.has(i)) map.set(i, map.get(i) - 1);
		if (map.get(i) == 0) map.delete(i);
	}

	if (map.size > 0) return false;

	return true;
};
