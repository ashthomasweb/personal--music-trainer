const u = require('./b-section-unit')


test('b section skateboard test', () => {
    
    u.switchParallelMode()
    u.switchParallelMode()

    expect(u.currentHarmony).toBe(u.minor)
})

// END of document
