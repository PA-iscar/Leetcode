// ! 1. Two Sum Brute sorting + two pointer approach (DO NOT SUBMIT)

// *  Time complexity:- O(n.log n)
// *  Space complexity:- O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    nums.sort((a,b)=>a-b)
    let l = 0, r = nums.length-1;

    while(l<r){
        if(nums[l]+nums[r] === target){
            return [nums[l], nums[r]]
        }
        else if(nums[l] + nums[r] < target){
            l++
        }
        else {
            r--;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSum([3, 2, 4], 6));

console.log(twoSum([3, 3], 6));
