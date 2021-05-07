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










































// // // key shift
// let modeShiftArray = ['static', 'parallel'];


// var keyModeSwitchSlider = document.getElementById("key-mode-switch-slider");
// var keyModeSwitchSliderOutput = document.getElementById("key-mode-switch-output");
// var keyModeSwitchCheck = document.getElementById("keyModeSwitch-check");

// if (keyModeSwitchCheck.checked === false) {
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