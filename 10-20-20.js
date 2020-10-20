/**Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 **/

function maxSum(arr) {
  let totalMax = -Infinity;
  let currentMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    currentMax = Math.max(currentMax + arr[i], arr[i]);
    totalMax = Math.max(totalMax, currentMax)
  }

  return totalMax;
}
