
const { expect } = require('@jest/globals')
const concatKeyInfo = require('./unit-file')

test('Outputs key info', () => {
    expect(concatKeyInfo()).toBe('C major')
})
