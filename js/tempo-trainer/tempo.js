// Tempo measurement file for "Music Trainer"

let timingArray = [];
let newTimingArray = [];
let counter = 0;
let x;

function takeTempo() {
  let userTempo = document.getElementsByClassName('tempo-display')[0].innerText;

  if ( tempoTrainBool === true ) { 
    if ( newTimingArray.length === 9 ) {
      console.log('hey');
      document.getElementById('tempo-btn').style.pointerEvents = 'none';
      if ( userTempo > practiceTempo + correctWithin || userTempo < practiceTempo - correctWithin ) {
        displayMessage(5);

      } else {
        displayMessage(6);
        
      }
    }
  }
    
  playClick(0);

  function sumAvgLog() {
    // subtract value from previous value in array, push to newTimingArray
    newTimingArray.push(timingArray[timingArray.length - 1] - timingArray[timingArray.length - 2]);
    // average newTimingArray
    sum = newTimingArray.reduce((acc, val) => {
      return acc + val
    });
    avg = (sum / newTimingArray.length);
    average = (60000 / avg).toFixed(1);
    console.log(`Average BPM: ${average}`);
    document.getElementsByClassName('tempo-display')[0].innerText = average;
    console.log(`newTimingArray: ${newTimingArray}`);
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
    newTimingArray.shift();
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
  document.getElementById('tempo-btn').style.pointerEvents = 'auto';
  tempoTrainBool = false;

  document.getElementsByClassName('tempo-display')[0].innerText = '...';

  timingArray = [];
  newTimingArray = [];
  counter = 0;

}


let tempoTrainBool = false;
let practiceTempo;
let correctWithin;
let tempoArray = [
  20, 30, 40, 50, 55, 60, 66, 72, 76, 80, 92, 96, 100, 105, 110, 120, 126, 132, 140, 144, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240
];

function startTraining() {
  tempoTrainBool = true;
  // get tempo range tested
  lowRange.value;
  highRange.value;
  let practiceArray = [...tempoArray];
  function getTempos() {
    if (Number(lowRange.value) > Number(highRange.value)) {
      displayMessage(3);
    } else {

      for (let i = 0; i < lowRange.value - 1; i++) {
        practiceArray.shift();
      }
      for (let i = 0; i < 30 - highRange.value; i++) {
        practiceArray.pop();
      }
      // pick from tempoArray
      practiceTempo = practiceArray[ Math.floor(Math.random() * (practiceArray.length - 1 ) ) ];
      return practiceArray;
    }
  }

  getTempos(); 

  // get tempo sensitivity
  correctWithin = Number(sensSetting.value) * 5;
  
  // send start message
  displayMessage(4)
  document.getElementsByClassName('tempo-target')[0].innerHTML = practiceTempo;
  // listen for tempo
  
  
  // check tempo against question
  
  // send messgae 
  // return getTempos();

}

// number of chords
var lowRange = document.getElementById("lowRange");
var highRange = document.getElementById("highRange");

var lowOutput = document.getElementById("low-num");

lowRange.oninput = function () {
  lowOutput.innerHTML = tempoArray[this.value - 1];
  if (Number(lowRange.value) >= Number(highRange.value)) {
    highRange.value = lowRange.value;
    highOutput.innerHTML = tempoArray[Number(highRange.value) - 1];
    
  }
}

var highOutput = document.getElementById("high-num");

highRange.oninput = function () {
  highOutput.innerHTML = tempoArray[this.value - 1];
  if (Number(highRange.value) <= Number(lowRange.value)) {
    lowRange.value = highRange.value;
    lowOutput.innerHTML = tempoArray[Number(lowRange.value) - 1];

  }
}


var sensSetting = document.getElementById('sensRange');

sensSetting.oninput = function () {
  document.getElementById('sens-num').innerHTML = sensSetting.value * 5;
}
// END of document