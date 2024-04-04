// Write a function findLongestWord that takes a string of words and returns the longest word in the string.
// / Example usage:
// console.log(findLongestWord('This is a sample sentence')); // Output: "sentence"

const sentence = 'lets find the longest word'

function longestWord () {
  const sentenceSplit = sentence.split(' ')
  // return sentenceSplit.sort((a, b) => a.length - b.length)[0] /////////////trumpiausias pirmas array, parodo ji
  return sentenceSplit.sort((a, b) => b.length - a.length)[0] 
}
console.log(longestWord(sentence))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length