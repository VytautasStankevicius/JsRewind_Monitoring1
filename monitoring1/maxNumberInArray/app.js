// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.
// / Example usage:
// console.log(findMax([3, 7, 1, 9, 4])); // Output: 9





const numberArr = [1, 2, 3]

function findMax () {
  return Math.max.apply(null, numberArr)
}

console.log(findMax(numberArr))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max


