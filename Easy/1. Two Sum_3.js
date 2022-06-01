// ! 1. Two Sum Hashing 2 pass approach

// *  Time complexity:- O(n)
// *  Space complexity:- O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let tom = {};
	nums.forEach((el, i) => {
		tom[el] = i;
	});
	for (let i = 0; i < nums.length; i++) {
		if (tom[target - nums[i]] && tom[target - nums[i]] !== i)
			return [i, tom[target - nums[i]]];
	}
};

console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSum([3, 2, 4], 6));

console.log(twoSum([3, 3], 6));