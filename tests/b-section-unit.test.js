const switchParallelMode = require('./b-section-unit')
const currentHarmony = require('./b-section-unit')


test('b section skateboard test', () => {
    switchParallelMode()

    expect(currentHarmony).toBe(major)
})

// END of document
