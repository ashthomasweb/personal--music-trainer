const unit = require('./b-section-unit')

test('b section skateboard test', () => {
    unit.switchParallelMode()

    expect(unit.currentHarmony).toBe(unit.major)
})

// END of document
