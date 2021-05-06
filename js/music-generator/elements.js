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







function cadenceControlHandler() {

    // type of cadence 
    var cadenceSlider = document.getElementById("cadence-slider");
    var cadenceSliderOutput = document.getElementById("cadence-output");
    var cadenceCheck = document.getElementById("cadence-check");
    var cadenceLabel = document.getElementById('cadence-label');
    
    function cadenceOpacity() {
        cadenceLabel.style.opacity = 0.9;
        cadenceLabel.style.opacity = 0.4;
    }

    // set initial display value
    cadenceSliderOutput.innerHTML = '...';

    cadenceSlider.oninput = function () {
        // turn off checkbox
        cadenceCheck.checked = false;
        // indicate user control
        typeOfCadenceConBool = true;
        // push user value to control object
        onScreenFirstPassOptions.typeOfCadence = this.value;
        // release random control
        typeOfCadenceRandom = cadenceCheck.checked;
        // display handling
        cadenceSliderOutput.innerHTML = cadenceType[this.value - 1];
        cadenceOpacity();
    }
    
    cadenceCheck.oninput = () => {
        // indicate user control
        typeOfCadenceConBool = true;
        // set checkbox
        typeOfCadenceRandom = cadenceCheck.checked;
        // display handling
        if (cadenceCheck.checked === true) {
            cadenceSliderOutput.innerHTML = '...';
            cadenceSlider.style.opacity = 0.3;
            cadenceLabel.style.opacity = 1;
        } else {
            cadenceSliderOutput.innerHTML = cadenceType[cadenceSlider.value - 1];
            onScreenFirstPassOptions.typeOfCadence = cadenceSlider.value;
            cadenceOpacity();
        }
    }
    
}
cadenceControlHandler();






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