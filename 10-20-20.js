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

/**Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only. */

var lengthOfLastWord = function(s) {
  let wordsArr = s.trim().split(' ')
  return wordsArr[wordsArr.length-1].length;

};