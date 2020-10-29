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