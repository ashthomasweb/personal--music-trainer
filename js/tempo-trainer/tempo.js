// Tempo measurement file for "Music Trainer"

let timingArray = [];
let newArray = [];
let counter = 0;
let x;

function takeTempo() {

  function sumAvgLog() {
    // subtract value from previous value in array, push to newArray
    newArray.push(timingArray[timingArray.length-1] - timingArray[timingArray.length-2]);
    // average newArray
    sum = newArray.reduce((acc, val) => {
      return acc + val
    });
    avg = (sum / newArray.length);
    average = (60000 / avg).toFixed(1);
    console.log(`Average BPM: ${average}`);
    document.getElementsByClassName('tempo-display')[0].innerText = average;
    console.log(`newArray: ${newArray}`);
    // console.log(`counter is: ${counter}`);
    console.log('new');
  }

  // push to array on click
  timingArray.push(counter);

  if ( counter === 0 ) {
    // start timerRaw
    timerRaw();
  } else if ( timingArray.length > 2  && timingArray.length < 12) {
    sumAvgLog();

  } else if ( timingArray.length >= 12 ) {
    // average of last 9 in new array
    console.log('Most recent 9. (Two measures of 4/4 plus downbeat)');
    newArray.shift();
    sumAvgLog();

  }

}

function timerRaw() {
    setInterval(function () {
        counter = counter + 10;
    }, 10);

    return counter;

}

// END of document
