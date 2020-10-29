function adjacentElementsProduct(inputArray) {
  let left=0;
  let max = -Infinity;

  for (let i=1; i<inputArray.length;i++) {
      if (inputArray[left] * inputArray[i] > max ) {
          max = inputArray[left] * inputArray[i];
      }
      left +=1;
  }
  return max;
}

/** Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is
obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim,
side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.



Example

For n = 2, the output should be
shapeArea(n) = 5;
For n = 3, the output should be
shapeArea(n) = 13. */

function shapeArea(n) {
  if (n===1) return 1;
  let sum = 1;

  for (let i=2; i<=n; i++) {
      sum = sum + ((i-1) *4)
  }
  return sum;
}