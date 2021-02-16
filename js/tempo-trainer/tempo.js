// DOES NOT WORK

let timingArray = [];
let counter = 0;
let x;

function takeTempo() {
    console.log(`this is raw count: ${timerRaw()}`);
    timingArray.push(timerRaw());
    
    x = timingArray.reduce((acc, val) => {
        return acc - val
    });
    console.log(`this is x: ${x}`);
    let y = x / timingArray.length - 1;
    console.log(`this is the math export: ${y}`);
    console.log(`this is whole array: ${timingArray}`)
    console.log('new');
}

function timerRaw() {
    setInterval(function () {
        counter++;
    }, 1);

    return counter;

}

// DOES NOT WORK END