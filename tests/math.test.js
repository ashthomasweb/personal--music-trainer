// Unit test file for basic testing exploration and learning

let {sum, trial} = require('./math');

// trial = "trial"
// console.log(trial)
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// END of document
