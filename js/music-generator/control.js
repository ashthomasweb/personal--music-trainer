const generateChance = (factor, addend = 0) => Math.ceil(Math.random() * factor) + addend;

// onscreen assigned options
let onScreenFirstPassOptions = {
    keyCenter: undefined,
    startingChord: undefined,
    typeOfCadence: undefined,
    keyMode: undefined,
    numOfChords: undefined,
    // numOfRepeats: undefined,
    // persistState: undefined,
    // keyModeSwitch: undefined
}

function masterControl() {

    // if onscreen assigned options are manipulated
    let controlOptions = onScreenFirstPassOptions;

    if (controlOptions.keyCenter !== undefined || keyCenterRandom === true) {
        keyCenterConBool = true;
        keyCenterOption = controlOptions.keyCenter;
    }

    if (controlOptions.startingChord !== undefined || startingChordRandom === true) {
        startingChordConBool = true;
        startingChordOption = controlOptions.startingChord;
    }

    if (controlOptions.typeOfCadence !== undefined) {
        typeOfCadenceConBool = true;
        typeOfCadenceOption = controlOptions.typeOfCadence;
    }

    if (controlOptions.keyMode !== undefined) {
        keyModeConBool = true;
        keyModeOption = controlOptions.keyMode;
    }

    if (controlOptions.numOfChords !== undefined) {
        numOfChordsConBool = true;
        numOfChordsOption = controlOptions.numOfChords;
    }



    // if (controlOptions.numOfRepeats !== undefined) {
    //     numOfRepeatsConBool = true;
    //     numOfRepeatsOption = controlOptions.numOfRepeats;
    // }



    // if (controlOptions.persistState !== undefined) {
    //     persistStateConBool = true;
    //     persistStateOption = controlOptions.persistState;
    // }

    // if (controlOptions.keyModeSwitch !== undefined) {
    //     keyModeSwitchConBool = true;
    //     keyModeSwitchOption = controlOptions.keyModeSwitch;
    // }

    buildDoublePeriod();
}

// onscreen button function
function startChordPersist() {
    startingChordConBool = true;
    startingChordPersist = !startingChordPersist;
    if (startingChordPersist === true) {
        document.getElementById('start-chord-persist-toggle').style.backgroundColor = 'pink';
    } else {
        document.getElementById('start-chord-persist-toggle').style.backgroundColor = 'white';
    }
}

function startingChordOptionHandler() {
    // start progression on given harmony
    let startingChordSlider = document.getElementById("starting-chord-slider");
    let startingChordOutput = document.getElementById("starting-chord-output");
    let startingChordCheck = document.getElementById("startingChord-check");
    let startingChordLabel = document.getElementById('starting-chord-label');

    function startingChordOpacity() {
        startingChordSlider.style.opacity = 0.9;
        startingChordLabel.style.opacity = 0.4;
    }

    // handle on-page-load conditional styling
    if (startingChordCheck.checked === false) {
        startingChordOpacity();
    }

    // set initial display value
    startingChordOutput.innerHTML = currentHarmony[startingChordSlider.value - 1];

    startingChordSlider.onclick = function () {
        // turn off checkbox
        startingChordCheck.checked = false;
        // indicate user control
        startingChordConBool = true;
        // release random control
        startingChordRandom = startingChordCheck.checked;
        // push user value to control object
        onScreenFirstPassOptions.startingChord = this.value;
        // display handling
        startingChordOutput.innerHTML = currentHarmony[this.value - 1];
        startingChordOpacity();
    }

    startingChordCheck.oninput = () => {
        // indicate user control
        startingChordConBool = true;
        // set random boolean from checkbox
        startingChordRandom = startingChordCheck.checked;
        // display handling
        if (startingChordCheck.checked === true) {
            startingChordOutput.innerHTML = '...';
            startingChordSlider.style.opacity = 0.3;
            startingChordLabel.style.opacity = 1;
        } else {
            startingChordOutput.innerHTML = currentHarmony[startingChordSlider.value - 1];
            startingChordOpacity();
        }
    }
}
startingChordOptionHandler();

// onscreen button function
function cadencePersist() {
    typeOfCadenceConBool = true;
    typeOfCadencePersist = !typeOfCadencePersist;
    if (typeOfCadencePersist === true) {
        document.getElementById('cadence-persist-toggle').style.backgroundColor = 'pink';
    } else {
        document.getElementById('cadence-persist-toggle').style.backgroundColor = 'white';
    }
}

function cadenceControlHandler() {
    let cadenceSlider = document.getElementById("cadence-slider");
    let cadenceSliderOutput = document.getElementById("cadence-output");
    let cadenceCheck = document.getElementById("cadence-check");
    let cadenceLabel = document.getElementById('cadence-label');

    function cadenceOpacity() {
        cadenceSlider.style.opacity = 0.9;
        cadenceLabel.style.opacity = 0.4;
    }

    // set initial display value
    cadenceSliderOutput.innerHTML = '...';

    cadenceSlider.onclick = function () {
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
        // set random boolean from checkbox
        typeOfCadenceRandom = cadenceCheck.checked;
        // display handling
        if (cadenceCheck.checked === true) {
            cadenceSliderOutput.innerHTML = '...';
            cadenceSlider.style.opacity = 0.3;
            cadenceLabel.style.opacity = 1;
        } else {
            // push value that was hidden to control object
            onScreenFirstPassOptions.typeOfCadence = cadenceSlider.value;
            // display handling
            cadenceSliderOutput.innerHTML = cadenceType[cadenceSlider.value - 1];
            cadenceOpacity();
        }
    }

}
cadenceControlHandler();

// onscreen button function
function keyCtrPersist() {
    keyCenterConBool = true;
    keyCenterPersist = !keyCenterPersist;
    if (keyCenterPersist === true) {
        document.getElementById('key-persist-toggle').style.backgroundColor = 'pink';
    } else {
        document.getElementById('key-persist-toggle').style.backgroundColor = 'white';
    }
}

function keyCenterControlHandler() {
    let keyCenterArray = [keyOfF, keyOfC, keyOfG, keyOfD];
    var keyCenterSlider = document.getElementById("key-center-slider");
    var keyCenterSliderOutput = document.getElementById("key-center-output");
    var keyCenterCheck = document.getElementById("keyCenter-check");
    let keyCenterLabel = document.getElementById('key-center-label');

    function keyCenterOpacity() {
        keyCenterSlider.style.opacity = 0.9;
        keyCenterLabel.style.opacity = 0.4;
    }
    // set initial display value
    keyCenterSliderOutput.innerHTML = '...';

    keyCenterSlider.onclick = function () {
        // indicate user control
        keyCenterConBool = true;
        // turn off checkbox
        keyCenterCheck.checked = false;
        // push user value to control object
        onScreenFirstPassOptions.keyCenter = keyCenterArray[this.value - 1];
        // release random control
        keyCenterRandom = keyCenterCheck.checked;
        // display handling
        if (keyCenterArray[this.value - 1] === keyOfF) {
            keyCenterSliderOutput.innerHTML = "Key of F";
        } else if (keyCenterArray[this.value - 1] === keyOfC) {
            keyCenterSliderOutput.innerHTML = "Key of C";
        } else if (keyCenterArray[this.value - 1] === keyOfG) {
            keyCenterSliderOutput.innerHTML = "Key of G";
        } else if (keyCenterArray[this.value - 1] === keyOfD) {
            keyCenterSliderOutput.innerHTML = "Key of D";
        }
        keyCenterOpacity();
    }

    keyCenterCheck.oninput = () => {
        // indicate user control
        keyCenterConBool = true;
        // set random boolean from checkbox
        keyCenterRandom = keyCenterCheck.checked;
        // display handling
        if (keyCenterCheck.checked === true) {
            keyCenterSliderOutput.innerHTML = '...';
            keyCenterSlider.style.opacity = 0.3;
            keyCenterLabel.style.opacity = 1;
        } else {
            // push value that was hidden to control object
            onScreenFirstPassOptions.keyCenter = keyCenterArray[Number(keyCenterSlider.value) - 1];
            // display handling
            if (keyCenterArray[Number(keyCenterSlider.value) - 1] === keyOfF) {
                keyCenterSliderOutput.innerHTML = "Key of F";
            } else if (keyCenterArray[Number(keyCenterSlider.value) - 1] === keyOfC) {
                keyCenterSliderOutput.innerHTML = "Key of C";
            } else if (keyCenterArray[Number(keyCenterSlider.value) - 1] === keyOfG) {
                keyCenterSliderOutput.innerHTML = "Key of G";
            } else if (keyCenterArray[Number(keyCenterSlider.value) - 1] === keyOfD) {
                keyCenterSliderOutput.innerHTML = "Key of D";
            }
            keyCenterOpacity();
        }
    }

}
keyCenterControlHandler();


function makeKeyModePersist() {
    keyModePersist = !keyModePersist;
    if (keyModePersist === true) {
        document.getElementById('key-mode-persist-toggle').style.backgroundColor = 'pink';
    } else {
        document.getElementById('key-mode-persist-toggle').style.backgroundColor = 'white';
    }
}

function keyModeControlHandler() {
    let modeArray = [major, minor];
    var keyModeSlider = document.getElementById("key-mode-slider");
    var keyModeSliderOutput = document.getElementById("key-mode-output");
    var keyModeCheck = document.getElementById("keyMode-check");
    let keyModeLabel = document.getElementById('key-mode-label');

    function keyModeOpacity() {
        keyModeSlider.style.opacity = 0.9;
        keyModeLabel.style.opacity = 0.4;
    }

    // set initial display value
    keyModeSliderOutput.innerHTML = "...";

    keyModeSlider.onclick = function () {
        // turn off checkbox
        keyModeCheck.checked = false;
        // indicate user control
        keyModeConBool = true;
        // push user value to control object
        onScreenFirstPassOptions.keyMode = modeArray[this.value - 1];
        // release random control
        keyModeRandom = keyModeCheck.checked;
        // display handling - note: 'value' is a string
        if (this.value == 1) {
            keyModeSliderOutput.innerHTML = "Major";
        } else {
            keyModeSliderOutput.innerHTML = "Minor";
        }
        keyModeOpacity();
    }

    keyModeCheck.oninput = () => {
        // indicate user control
        keyModeConBool = true;
        // set random boolean from checkbox
        keyModeRandom = keyModeCheck.checked;

        // display handling
        if (keyModeCheck.checked === true) {
            document.getElementById('key-mode-slider').style.opacity = 0.3;
            keyModeSliderOutput.innerHTML = '...';
        } else {
            // display handling - note: 'value' is a string
            if (keyModeSlider.value == 1) {
                keyModeSliderOutput.innerHTML = "Major";
            } else {
                keyModeSliderOutput.innerHTML = "Minor";
            }
            keyModeOpacity();
            // push value that was hidden to control object
            onScreenFirstPassOptions.keyMode = modeArray[keyModeSlider.value - 1];
        }
    }
}
keyModeControlHandler();

function numChordPersist() {
    numOfChordsPersist = !numOfChordsPersist;
    if (numOfChordsPersist === true) {
        document.getElementById('num-chord-persist-toggle').style.backgroundColor = 'pink';
    } else {
        document.getElementById('num-chord-persist-toggle').style.backgroundColor = 'white';
    }
}

function numChordsHandler() {
    var numChordsSlider = document.getElementById("num-chords-slider");
    var numChordsSliderOutput = document.getElementById("num-chords-output");
    var chordsCheck = document.getElementById("numOfChords-check");
    let numChordsLabel = document.getElementById('num-chords-label');

    function numChordsOpacity() {
        numChordsSlider.style.opacity = 0.9;
        numChordsLabel.style.opacity = 0.4;
    }

    // set initial display value
    numChordsSliderOutput.innerHTML = '...';

    numChordsSlider.onclick = function () {
        // turn off checkbox
        chordsCheck.checked = false;
        // indicate user control
        numOfChordsConBool = true;
        // release random control
        numOfChordsRandom = chordsCheck.checked;
        // push user value to control object
        onScreenFirstPassOptions.numOfChords = this.value;
        // display handling
        numChordsSliderOutput.innerHTML = this.value;
        numChordsOpacity();
    }

    chordsCheck.oninput = () => {
        // indicate user control
        numOfChordsConBool = true;
        // set random boolean from checkbox
        numOfChordsRandom = chordsCheck.checked;
        // display handling
        if (chordsCheck.checked === true) {
            numChordsSliderOutput.innerHTML = '...';
            numChordsSlider.style.opacity = 0.3;
            numChordsLabel.style.opacity = 1;
        } else {
            numChordsSliderOutput.innerHTML = numChordsSlider.value;
            numChordsOpacity();
        }
    }

}
numChordsHandler();







// function sectionModeShift() {
//     keyCenterPersist = !keyCenterPersist;
//     if ( keyCenterPersist === true ) {
//         document.getElementById('section-shift-persist-toggle').style.backgroundColor = 'pink';
//     } else {
//         document.getElementById('section-shift-persist-toggle').style.backgroundColor = 'white';
//     }
// }











// turn off control booleans
function turnControlOff() {

    if (keyCenterPersist === false) {
        keyCenterConBool = false;
    }

    if (startingChordPersist === false) {
        startingChordConBool = false;
    }

    if (typeOfCadencePersist === false) {
        typeOfCadenceConBool = false;
    }

    if (keyModePersist === false) {
        keyModeConBool = false;
    }

    if (numOfChordsPersist === false) {
        numOfChordsConBool = false;
    }


    // numOfRepeatsConBool = false;
    // persistStateConBool = false;
    // keyModeSwitchConBool = false;
}

// END of document

// SCRATCH 

// const programDefaults = {
//     keyMode: undefined,
//     keyCenter: undefined,
//     numOfRepeats: undefined,
//     startingChord: undefined,
//     typeOfCadence: undefined,
//     numOfChords: undefined,
//     persistState: undefined
// }
// function defaultOptionHandler() {
//     let typeOfDefault;

//     let temp = Object.values(userDefaults);
//     let tempBool = false;
//     temp.forEach((item) => {
//         if (item !== undefined) {
//             tempBool = true;
//         }
//     });

//     if (tempBool === true) {
//         typeOfDefault = userDefaults;
//     } else {
//         typeOfDefault = programDefaults;
//     }

//     return typeOfDefault;
// }