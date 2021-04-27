// Page Elements for Music Generator




// number of repeats
var numRepeatsSlider = document.getElementById("num-repeats-slider");
var numRepeatsSliderOutput = document.getElementById("num-repeats-output");
numRepeatsSliderOutput.innerHTML = '...';

numRepeatsSlider.oninput = function () {
    numRepeatsSliderOutput.innerHTML = this.value;
    onScreenFirstPassOptions.numOfRepeats = this.value;
    repeatsCheck.checked = false;
    numOfRepeatsRandom = repeatsCheck.checked;
}

var repeatsCheck = document.getElementById("numOfRepeats-check");

repeatsCheck.oninput = () => {
    numOfRepeatsRandom = repeatsCheck.checked;
    if (repeatsCheck.checked === true) {
        document.getElementById('num-repeats-slider').style.opacity = 0.3;
        numRepeatsSliderOutput.innerHTML = '...';
    } else {
        document.getElementById('num-repeats-slider').style.opacity = 0.9;
        numRepeatsSliderOutput.innerHTML = numRepeatsSlider.value;
    }
}





// number of chords
var numChordsSlider = document.getElementById("num-chords-slider");
var numChordsOutput = document.getElementById("num-chords-output");
numChordsOutput.innerHTML = numChordsSlider.value;

numChordsSlider.oninput = function () {
    numChordsOutput.innerHTML = this.value;
    onScreenFirstPassOptions.numOfChords = this.value;
}

// start progression on given harmony
var startingChordSlider = document.getElementById("starting-chord-slider");
var startingChordOutput = document.getElementById("starting-chord-output");
startingChordOutput.innerHTML = currentHarmony[startingChordSlider.value - 1];

startingChordSlider.oninput = function () {
    startingChordOutput.innerHTML = currentHarmony[this.value - 1];
    onScreenFirstPassOptions.startingChord = this.value;
}

// type of cadence 
var cadenceSlider = document.getElementById("cadence-slider");
var cadenceSliderOutput = document.getElementById("cadence-output");
cadenceSliderOutput.innerHTML = cadenceType[cadenceSlider.value - 1];

cadenceSlider.oninput = function () {
    cadenceSliderOutput.innerHTML = cadenceType[this.value - 1];
    onScreenFirstPassOptions.typeOfCadence = this.value;
}


// major / minor
let modeArray = [major, minor];
var keyModeSlider = document.getElementById("key-mode-slider");
var keyModeSliderOutput = document.getElementById("key-mode-output");
keyModeSliderOutput.innerHTML = "Major";

keyModeSlider.oninput = function () {
    if (modeArray[this.value - 1] === major) {
        keyModeSliderOutput.innerHTML = "Major";
    } else {
        keyModeSliderOutput.innerHTML = "Minor";
    }
    onScreenFirstPassOptions.keyMode = modeArray[this.value - 1];
}














// key center
let keyCenterArray = [keyOfF, keyOfC, keyOfG, keyOfD];
var keyCenterSlider = document.getElementById("key-center-slider");
var keyCenterSliderOutput = document.getElementById("key-center-output");
keyCenterSliderOutput.innerHTML = "Key of C";

keyCenterSlider.oninput = function () {
    if (this.value === 0) {
        keyCenterSliderOutput.innerHTML = "Random";
        // keyCenterOption = // hard-code random
    } else {

        if (keyCenterArray[this.value - 1] === keyOfF) {
            keyCenterSliderOutput.innerHTML = "Key of F";
        } else if (keyCenterArray[this.value - 1] === keyOfC) {
            keyCenterSliderOutput.innerHTML = "Key of C";
        } else if (keyCenterArray[this.value - 1] === keyOfG) {
            keyCenterSliderOutput.innerHTML = "Key of G";
        } else if (keyCenterArray[this.value - 1] === keyOfD) {
            keyCenterSliderOutput.innerHTML = "Key of D";
        }
        onScreenFirstPassOptions.keyCenter = keyCenterArray[this.value - 1];
    }
}














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
    for (i = 0; i <= phraseContainer.length - 1; i++) {
        console.log('test ' + i);
        phraseContainer[i][0].voiceLeading[0].includes(undefined) && console.log('undefined value occured bass');
        phraseContainer[i][0].voiceLeading[1].includes(undefined) && console.log('undefined value occured t');
        phraseContainer[i][0].voiceLeading[2].includes(undefined) && console.log('undefined value occured a');
        phraseContainer[i][0].voiceLeading[3].includes(undefined) && console.log('undefined value occured s');
    }
}

function makePersist() {
    if (onScreenFirstPassOptions.persistState !== undefined) {
        onScreenFirstPassOptions.persistState = !onScreenFirstPassOptions.persistState;
    }
    if (onScreenFirstPassOptions.persistState === undefined) {
        onScreenFirstPassOptions.persistState = true;
    }
    if (onScreenFirstPassOptions.persistState === true) {
        document.getElementById('persist-toggle').style.backgroundColor = 'pink';
    } else {
        document.getElementById('persist-toggle').style.backgroundColor = 'grey';
    }
}

function preset1() {
    onScreenFirstPassOptions.numOfChords = 7;
    onScreenFirstPassOptions.keyCenter = keyOfF;
}

function preset2() {
    onScreenFirstPassOptions.numOfChords = 7;
    onScreenFirstPassOptions.keyCenter = keyOfC;
    onScreenFirstPassOptions.numOfRepeats = 3;
    onScreenFirstPassOptions.typeOfCadence = 2;
    onScreenFirstPassOptions.startingChord = 2;
    onScreenFirstPassOptions.makePersist = true;
}

// END of document