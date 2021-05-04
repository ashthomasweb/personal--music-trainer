// Page Elements for Music Generator

// // number of repeats
// var numRepeatsSlider = document.getElementById("num-repeats-slider");
// var numRepeatsSliderOutput = document.getElementById("num-repeats-output");
// var repeatsCheck = document.getElementById("numOfRepeats-check");

// numRepeatsSliderOutput.innerHTML = '...';
// numRepeatsSlider.oninput = function () {
//     numRepeatsSliderOutput.innerHTML = this.value;
//     onScreenFirstPassOptions.numOfRepeats = this.value;
//     repeatsCheck.checked = false;
//     numOfRepeatsRandom = repeatsCheck.checked;
//     document.getElementById('num-repeats-slider').style.opacity = 0.9;
// }

// repeatsCheck.oninput = () => {
//     numOfRepeatsRandom = repeatsCheck.checked;
//     if (repeatsCheck.checked === true) {
//         document.getElementById('num-repeats-slider').style.opacity = 0.3;
//         numRepeatsSliderOutput.innerHTML = '...';
//     } else {
//         document.getElementById('num-repeats-slider').style.opacity = 0.9;
//         numRepeatsSliderOutput.innerHTML = numRepeatsSlider.value;
//     }
// }

// // number of chords
// var numChordsSlider = document.getElementById("num-chords-slider");
// var numChordsSliderOutput = document.getElementById("num-chords-output");
// var chordsCheck = document.getElementById("numOfChords-check");

// numChordsSliderOutput.innerHTML = '...';
// numChordsSlider.oninput = function () {
//     numChordsSliderOutput.innerHTML = this.value;
//     onScreenFirstPassOptions.numOfChords = this.value;
//     chordsCheck.checked = false;
//     numOfChordsRandom = chordsCheck.checked;
//     document.getElementById('num-chords-slider').style.opacity = 0.9;
// }

// chordsCheck.oninput = () => {
//     numOfChordsRandom = chordsCheck.checked;
//     if (chordsCheck.checked === true) {
//         document.getElementById('num-chords-slider').style.opacity = 0.3;
//         numChordsSliderOutput.innerHTML = '...';
//     } else {
//         document.getElementById('num-chords-slider').style.opacity = 0.9;
//         numChordsSliderOutput.innerHTML = numChordsSlider.value;
//     }
// }





// start progression on given harmony
var startingChordSlider = document.getElementById("starting-chord-slider");
var startingChordOutput = document.getElementById("starting-chord-output");
var startingChordCheck = document.getElementById("startingChord-check");

if (startingChordCheck.checked === false ) {
    startingChordSlider.style.opacity = 0.9;
}

startingChordOutput.innerHTML = currentHarmony[startingChordSlider.value - 1];
startingChordSlider.oninput = function () {
    startingChordConBool = true;
    startingChordOutput.innerHTML = currentHarmony[this.value - 1];
    onScreenFirstPassOptions.startingChord = this.value;
    startingChordCheck.checked = false;
    startingChordRandom = startingChordCheck.checked;
    document.getElementById('starting-chord-slider').style.opacity = 0.9;
}

startingChordCheck.oninput = () => {
    startingChordRandom = startingChordCheck.checked;
    startingChordConBool = true;
    if (startingChordCheck.checked === true) {
        document.getElementById('starting-chord-slider').style.opacity = 0.3;
        document.getElementById('starting-chord-label').style.opacity = 1;
        startingChordOutput.innerHTML = '...';
    } else {
        document.getElementById('starting-chord-slider').style.opacity = 0.9;
        document.getElementById('starting-chord-label').style.opacity = 0.4;
        startingChordOutput.innerHTML = currentHarmony[startingChordSlider.value - 1];
    }
}


















// // major / minor
// let modeArray = [major, minor];
// var keyModeSlider = document.getElementById("key-mode-slider");
// var keyModeSliderOutput = document.getElementById("key-mode-output");
// var keyModeCheck = document.getElementById("keyMode-check");

// keyModeSliderOutput.innerHTML = "...";
// keyModeSlider.oninput = function () {
//     if (Number(this.value) === 1) {
//         keyModeSliderOutput.innerHTML = "Major";
//     } else {
//         keyModeSliderOutput.innerHTML = "Minor";
//     }
//     keyModeCheck.checked = false;
//     keyModeRandom = startingChordCheck.checked;
//     onScreenFirstPassOptions.keyModeSwitch = modeArray[this.value - 1];
//     document.getElementById('key-mode-slider').style.opacity = 0.9;
// }

// keyModeCheck.oninput = () => {
//     keyModeRandom = keyModeCheck.checked;
//     if (keyModeCheck.checked === true) {
//         document.getElementById('key-mode-slider').style.opacity = 0.3;
//         keyModeSliderOutput.innerHTML = '...';
//     } else {
//         document.getElementById('key-mode-slider').style.opacity = 0.9;
//         if (Number(keyModeSlider.value) === 1) {
//             keyModeSliderOutput.innerHTML = "Major";
//         } else {
//             keyModeSliderOutput.innerHTML = "Minor";
//         }
//         onScreenFirstPassOptions.keyModeSwitch = modeArray[keyModeSlider.value - 1];
//     }
// }















// // // key shift - IN PROGRESS DOES NOT WORK
// let modeShiftArray = ['static', 'parallel'];


// var keyModeSwitchSlider = document.getElementById("key-mode-switch-slider");
// var keyModeSwitchSliderOutput = document.getElementById("key-mode-switch-output");
// var keyModeSwitchCheck = document.getElementById("keyModeSwitch-check");

// if (keyModeSwitchCheck.checked === false ) {
//     keyModeSwitchSlider.style.opacity = 0.9;
// } 
// keyModeSwitchSliderOutput.innerHTML = "Parallel";

// keyModeSwitchSlider.oninput = function () {
//     if (Number(this.value) === 1) {
//         keyModeSwitchSliderOutput.innerHTML = "Stay same";
//     } else {
//         keyModeSwitchSliderOutput.innerHTML = "Parallel";
//     }
//     keyModeSwitchCheck.checked = false;
//     keyModeSwitchRandom = keyModeSwitchCheck.checked;
//     onScreenFirstPassOptions.keyModeSwitch = modeShiftArray[this.value - 1];
//     document.getElementById('key-mode-switch-slider').style.opacity = 0.9;
// }

// // when checking the box....
// keyModeSwitchCheck.oninput = () => {
//     // apply checked value to control variable
//     keyModeSwitchRandom = keyModeSwitchCheck.checked;

//     if (keyModeSwitchCheck.checked === true) {
//         document.getElementById('key-mode-switch-slider').style.opacity = 0.3;
//         keyModeSwitchSliderOutput.innerHTML = '...';
//     } else {
//         document.getElementById('key-mode-switch-slider').style.opacity = 0.9;
//         if (Number(keyModeSwitchSlider.value) === 1) {
//             keyModeSwitchSliderOutput.innerHTML = "Stay same";
//         } else {
//             keyModeSwitchSliderOutput.innerHTML = "Parallel";
//         }
//         onScreenFirstPassOptions.keyModeSwitch = modeShiftArray[keyModeSwitchSlider.value - 1];
//     }
// }












// // type of cadence 
// var cadenceSlider = document.getElementById("cadence-slider");
// var cadenceSliderOutput = document.getElementById("cadence-output");
// var cadenceCheck = document.getElementById("cadence-check");

// cadenceSliderOutput.innerHTML = '...';
// cadenceSlider.oninput = function () {
//     cadenceSliderOutput.innerHTML = cadenceType[this.value - 1];
//     onScreenFirstPassOptions.typeOfCadence = this.value;
//     cadenceCheck.checked = false;
//     typeOfCadenceRandom = cadenceCheck.checked;
//     document.getElementById('cadence-slider').style.opacity = 0.9;
// }

// cadenceCheck.oninput = () => {
//     typeOfCadenceRandom = cadenceCheck.checked;
//     if (cadenceCheck.checked === true) {
//         document.getElementById('cadence-slider').style.opacity = 0.3;
//         cadenceSliderOutput.innerHTML = '...';
//     } else {
//         document.getElementById('cadence-slider').style.opacity = 0.9;
//         cadenceSliderOutput.innerHTML = cadenceType[Number(cadenceSlider.value) - 1];
//         onScreenFirstPassOptions.typeOfCadence = Number(cadenceSlider.value);
//     }
// }

// key center
let keyCenterArray = [keyOfF, keyOfC, keyOfG, keyOfD];
var keyCenterSlider = document.getElementById("key-center-slider");
var keyCenterSliderOutput = document.getElementById("key-center-output");
var keyCenterCheck = document.getElementById("keyCenter-check");

keyCenterSliderOutput.innerHTML = '...';
keyCenterSlider.oninput = function () {
    keyCenterConBool = true;
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
    keyCenterCheck.checked = false;
    keyCenterRandom = keyCenterCheck.checked;
    document.getElementById('key-center-slider').style.opacity = 0.9;
}

keyCenterCheck.oninput = () => {
    keyCenterConBool = true;

    keyCenterRandom = keyCenterCheck.checked;
    if (keyCenterCheck.checked === true) {
        document.getElementById('key-center-slider').style.opacity = 0.3;
        document.getElementById('key-center-label').style.opacity = 1;

        keyCenterSliderOutput.innerHTML = '...';
    } else {
        document.getElementById('key-center-slider').style.opacity = 0.9;
        document.getElementById('key-center-label').style.opacity = 0.4;

        if (keyCenterArray[Number(keyCenterSlider.value) - 1] === keyOfF) {
            keyCenterSliderOutput.innerHTML = "Key of F";
        } else if (keyCenterArray[Number(keyCenterSlider.value) - 1] === keyOfC) {
            keyCenterSliderOutput.innerHTML = "Key of C";
        } else if (keyCenterArray[Number(keyCenterSlider.value) - 1] === keyOfG) {
            keyCenterSliderOutput.innerHTML = "Key of G";
        } else if (keyCenterArray[Number(keyCenterSlider.value) - 1] === keyOfD) {
            keyCenterSliderOutput.innerHTML = "Key of D";
        }
        onScreenFirstPassOptions.keyCenter = keyCenterArray[Number(keyCenterSlider.value) - 1];
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

function resetPlay() {
    allStop();
    clearPlayContainers();
    masterControl();
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