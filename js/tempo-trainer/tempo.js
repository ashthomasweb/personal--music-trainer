// DOES NOT WORK

let timingArray = [];
let newArray = [];
let counter = 0;
let x;

function takeTempo() {
  // push to array on click
  timingArray.push(counter);

  if ( counter === 0 ) {
    // start timerRaw
    timerRaw();
  } else if ( timingArray.length > 2 ) {
    newArray.push(timingArray[timingArray.length-1] - timingArray[timingArray.length-2]);
    // subtract value from previous value in array, push to newArray

    sum = newArray.reduce((acc, val) => {
      return acc + val
    });

    let avg = sum / newArray.length;

    console.log(`newArray: ${newArray}`);
    console.log(`average time: ${avg}`);
    console.log(`counter is: ${counter}`);
    console.log('new');
  }




}
// average of last 10 in new array

function timerRaw() {
    setInterval(function () {
        counter = counter + 10;
    }, 10);

    return counter;

}

// DOES NOT WORK END
