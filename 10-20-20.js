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

/**Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself. */

var plusOne = function(digits) {
  if(digits[0]===9) digits.unshift(0);
  for (let i=digits.length-1; i>-1;i--){
      if(digits[i]+1 < 10) {
          digits[i] = digits[i] + 1;
          break;
      } else {
          digits[i] = 0;
          continue;
      }
  }
  if(digits[0]===0) digits.shift();
  return digits
};