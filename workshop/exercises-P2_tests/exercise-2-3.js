// Exercise 2-3
// ------------

// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  let sum = 0;
  if (input.length === 2 && typeof input[0] === "number" && typeof input[0] === "number") {
    sum =  input[0] + input[1];
  } else {
    sum = undefined;
  }
  return sum;
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits([-1, 0, 5]), undefined);
expect(sumDigits({ a: 1, b: 2}), undefined);
expect(sumDigits(1, 2), undefined);
expect(sumDigits(["tutu", "toto"]), undefined);
expect(sumDigits('12'), undefined);
expect(sumDigits(12), undefined);
expect(sumDigits([]), undefined);
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
