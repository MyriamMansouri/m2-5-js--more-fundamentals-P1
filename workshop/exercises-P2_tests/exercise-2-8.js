// Exercise 2-8
// ------------

// Write a function that returns the input string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
//
// You are NOT ALLOWED to use the `reverse` method.
// You must use a loop of some kind (for, while, forEach, map, etc)
//
// HINT (one possible approach):
//  - Split your string into an array of characters
//  - Create an empty array
//  - Loop over the array of split characters in reverse order and fill the
//    empty array by pushing each character into it
//  - Convert the filled array into a string (use the join method) and return it

function reverse(str) {
  if (typeof str != "string") {
    return undefined;
  }
  let strToArray = str.split('');
  let reverseArray = [];
  strToArray.forEach(el => reverseArray.unshift(el));

  return reverseArray.join('');
}

// We need 5 test cases
expect(reverse('love'),'evol');
expect(reverse(123), undefined);
expect(reverse(), undefined);
expect(reverse(''), '');
expect(reverse('loVe'),'eVol');

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
