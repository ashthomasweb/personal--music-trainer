// Page Elements for Music Generator

// number of repeats
var numRepeatsSlider = document.getElementById("num-repeats-slider");
var numRepeatsSliderOutput = document.getElementById("num-repeats-output");
numRepeatsSliderOutput.innerHTML = numRepeatsSlider.value;

numRepeatsSlider.oninput = function () {
    numRepeatsSliderOutput.innerHTML = this.value;
    options.numOfRepeats = this.value;
}

// number of chords
var numChordsSlider = document.getElementById("num-chords-slider");
var numChordsOutput = document.getElementById("num-chords-output");
numChordsOutput.innerHTML = numChordsSlider.value;

numChordsSlider.oninput = function () {
    numChordsOutput.innerHTML = this.value;
    options.numOfChords = this.value;
}

// start progression on given harmony
var startingChordSlider = document.getElementById("starting-chord-slider");
var startingChordOutput = document.getElementById("starting-chord-output");
startingChordOutput.innerHTML = currentHarmony[startingChordSlider.value - 1];

startingChordSlider.oninput = function () {
    startingChordOutput.innerHTML = currentHarmony[this.value - 1];
    options.startingChord = this.value;
}

// type of cadence 
var cadenceSlider = document.getElementById("cadence-slider");
var cadenceSliderOutput = document.getElementById("cadence-output");
cadenceSliderOutput.innerHTML = cadenceType[cadenceSlider.value - 1];

cadenceSlider.oninput = function () {
    cadenceSliderOutput.innerHTML = cadenceType[this.value - 1];
    options.typeOfCadence = this.value;
}


// major / minor
let modeArray = [major, minor];
var keyModeSlider = document.getElementById("key-mode-slider");
var keyModeSliderOutput = document.getElementById("key-mode-output");
keyModeSliderOutput.innerHTML = "Major";

keyModeSlider.oninput = function () {
    if ( modeArray[this.value - 1] === major ) {
        keyModeSliderOutput.innerHTML = "Major";
    } else {
        keyModeSliderOutput.innerHTML = "Minor";
    }
    options.keyMode = modeArray[this.value - 1];
}

// // major / minor
// let modeArray = [major, minor];
// var keyModeSlider = document.getElementById("key-mode-slider");
// var keyModeSliderOutput = document.getElementById("key-mode-output");
// keyModeSliderOutput.innerHTML = "Major";

// keyModeSlider.oninput = function () {
//     if ( modeArray[this.value - 1] === major ) {
//         keyModeSliderOutput.innerHTML = "Major";
//     } else {
//         keyModeSliderOutput.innerHTML = "Minor";
//     }
//     options.keyMode = modeArray[this.value - 1];
// }


// On-screen diagnostic/helper functions 

function clearPlayContainers() {
    phraseContainer = [];
    allVoicesPlaybackArray = [
        [],
        [],
        [],
        []
    ];
    tempPlaybackArray = [];
}

function allStop() {
    // empty setTimeout to establish variable name
    var queuedNote = window.setTimeout(() => {}, 0);
    // while setTimeout's exist with positive integers, clear them
    while (queuedNote--) {
        window.clearTimeout(queuedNote);
    }
}

function checkForUndefined() {
    for ( i = 0; i <= phraseContainer.length - 1; i++) {
        console.log('test ' + i);
        phraseContainer[i][0].voiceLeading[0].includes(undefined) && console.log('undefined value occured bass');
        phraseContainer[i][0].voiceLeading[1].includes(undefined) && console.log('undefined value occured t');
        phraseContainer[i][0].voiceLeading[2].includes(undefined) && console.log('undefined value occured a');
        phraseContainer[i][0].voiceLeading[3].includes(undefined) && console.log('undefined value occured s');
    }
}

function makePersist() {
    if (options.persistState !== undefined) {
        options.persistState = !options.persistState;
    }
    if (options.persistState === undefined) {
        options.persistState = true;
    }
    if (options.persistState === true) {
        document.getElementById('persist-toggle').style.backgroundColor = 'pink';
    } else {
        document.getElementById('persist-toggle').style.backgroundColor = 'grey';
    }
}

function preset1() {
    options.numOfChords = 7;
    options.keyCenter = keyOfF;
}

function preset2() {
    options.numOfChords = 7;
    options.keyCenter = keyOfC;
    options.numOfRepeats = 3;
    options.typeOfCadence = 2;
    options.startingChord = 2;
    options.makePersist = true;
}

// END of document