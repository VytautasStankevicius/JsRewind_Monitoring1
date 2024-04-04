// Write a function reverseString that takes a string as input and returns the reverse of that string.
// // Example usage:
// console.log(reverseString('Hello')); // Output: "olleH"

const sentence = 'this is the best sentence ever'

function reverseSentence () {
  return sentence.split('').reverse().join('')
}

console.log(reverseSentence(sentence))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join