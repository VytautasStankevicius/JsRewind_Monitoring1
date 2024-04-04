// Write a function titleCase that converts a sentence to title case (the first letter of each word capitalized).
// // Example usage:
// console.log(titleCase('this is a sample sentence')); // Output: "This Is A Sample Sentence"

const sentence = 'every first letter of word must be capitalized'

function sentenceCapital () {
  return sentence.split(' ').map((word, position) =>{
    if (position === 0) {
      return word;
    }
    return (word.charAt(0).toUpperCase() + word.slice(1))
    })
    .join(' ')
    
  // return sentence.split(' ').charAt(0).toUpperCase().join('')
}
console.log(sentenceCapital(sentence))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// nepagauna pirmo zodzio pirmos raides . . . .