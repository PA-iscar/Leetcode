// ! 1. Two Sum Hashing 1 pass approach

// *  Time complexity:- O(n)
// *  Space complexity:- O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let tom = {};
	for (let i = 0; i < nums.length; i++) {
		if (tom[target - nums[i]] || tom[target - nums[i]] === 0)
			return [i, tom[target - nums[i]]];
		tom[nums[i]] = i;
	}
};

console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSum([3, 2, 4], 6));

console.log(twoSum([3, 3], 6));
