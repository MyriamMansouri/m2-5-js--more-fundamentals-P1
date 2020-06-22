// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  return typeof str === 'string' ? str[index] :  undefined;
}

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o');
expect(getLetterAtIndex('goodbye', 0), 'g');
expect(getLetterAtIndex('hello', 7), undefined);
expect(getLetterAtIndex('', ''), undefined);
expect(getLetterAtIndex('hello', ''), undefined);
expect(getLetterAtIndex('hello', -1), undefined);
expect(getLetterAtIndex('heLlo', 2), 'L');
expect(getLetterAtIndex(123, 2), undefined);
expect(getLetterAtIndex(['a', 'b'], 1), undefined);
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
