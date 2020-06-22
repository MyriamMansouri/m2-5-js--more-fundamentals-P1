// Exercise 2-9
// ------------

// Make this function return the longest word in the input string. If the input
// string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  if (typeof str != "string") {
    return undefined;
  }
  let strToArray = str.split(' ');
  let strLength = strToArray.map(el => el.length);
  let max = strLength.lastIndexOf(Math.max(...strLength))
  return strToArray[max]
}

// We need 5 test cases
expect(longestWord("hello mom you are beautiful !"), "beautiful");
expect(longestWord(123), undefined);
expect(longestWord("hi you are"), "are");
expect(longestWord(), undefined);
expect(longestWord(''), '');
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
