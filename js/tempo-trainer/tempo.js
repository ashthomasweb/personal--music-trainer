// Tempo measurement file for "Music Trainer"

let timingArray = [];
let newArray = [];
let counter = 0;
let x;

function takeTempo() {

  playClick(0);

  function sumAvgLog() {
    // subtract value from previous value in array, push to newArray
    newArray.push(timingArray[timingArray.length - 1] - timingArray[timingArray.length - 2]);
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

  if (counter === 0) {
    // start timerRaw
    timerRaw();
  } else if (timingArray.length > 2 && timingArray.length < 12) {
    sumAvgLog();

  } else if (timingArray.length >= 12) {
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


function resetTempo() {
  document.getElementsByClassName('tempo-display')[0].innerText = '...';

  timingArray = [];
  newArray = [];
  counter = 0;

}

let tempoArray = [
  20, 30, 40, 50, 55, 60, 66, 72, 76, 80, 92, 96, 100, 105, 110, 120, 126, 132, 140, 144, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240
];

function startTraining() {
  // get tempo range tested
  lowRange.value;
  highRange.value;
  let newArray = [...tempoArray];
  console.log(newArray);

  function getTempos() {
    for ( let i = 0; i < lowRange.value - 1; i++ ) {
      newArray.shift();
    }
    for ( let i = 0; i < 30 - highRange.value; i++ ) {
      newArray.pop();
    }
    return newArray;
  }

  return getTempos();

  // get tempo sensitivity

  // pick from tempoArray

  // send start message

  // listen for tempo

  // check tempo against question

  // send messgae 

}

// number of chords
var lowRange = document.getElementById("lowRange");
var highRange = document.getElementById("highRange");

var lowOutput = document.getElementById("low-num");

lowRange.oninput = function () {
  lowOutput.innerHTML = tempoArray[this.value - 1];
}

var highOutput = document.getElementById("high-num");

highRange.oninput = function () {
  highOutput.innerHTML = tempoArray[this.value - 1];
}

// END of document