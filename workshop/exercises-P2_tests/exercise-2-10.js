// Exercise 2-10
// -------------

// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string


const capitalizeWord = (str) => {
  let strArr = str.split('');
  return strArr.map(el => strArr.indexOf(el) === 0 ? el.toUpperCase() : el.toLowerCase() ).join('');
}

function makeIntoTitle(sentence) {
  if (typeof sentence != "string") {
    return undefined;
  }

  let sentenceArr = sentence.split(' ').map(el => capitalizeWord(el));
  return sentenceArr.join(' ');
}


// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);
expect(
  makeIntoTitle(), undefined
);
expect(
  makeIntoTitle(''), ''
);
expect(
  makeIntoTitle('ALL YOUR BASE ARE BELONG'), 
  'All Your Base Are Belong'
);
expect(
  makeIntoTitle(1023), undefined
);
expect(
  makeIntoTitle("hello you", "are beautiful"), "Hello You"
  );
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
