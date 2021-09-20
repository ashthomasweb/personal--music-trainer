const u = require('./b-section-unit')


test('b section skateboard test', () => {
    
    console.log(u.currentHarmony)
    u.switchParallelMode()
    console.log(u.currentHarmony)
    console.log('round 2')
    u.switchParallelMode()

    console.log(u.currentHarmony)

    expect(u.currentHarmony).toBe(u.minor)
})

// END of document
