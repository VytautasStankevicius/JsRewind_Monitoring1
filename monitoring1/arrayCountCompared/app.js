const n = 5
const val1 = 6
const arr = [2, 4, 6, 8, 10]

function arrayCounter(n, val1, arr) {
  
  let lowerValue = 0
  let sameValue = 0
  let higherValue = 0

  for (let i = 0; i < n; i++) {
      if (arr[i] < val1) {
          lowerValue++
      } else if (arr[i] === val1) {
          sameValue++
      } else {
          higherValue++
      }
  }

  return [lowerValue, sameValue, higherValue]
}

console.log(arrayCounter(n, val1, arr))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration