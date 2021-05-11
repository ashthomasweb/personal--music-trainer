const generateChance = (factor, addend = 0) => Math.ceil(Math.random() * factor) + addend;

// onscreen assigned options
let onScreenFirstPassOptions = {
    keyCenter: undefined,
    startingChord: undefined,
    typeOfCadence: undefined,
    keyMode: undefined,
    numOfChords: undefined,
    numOfRepeats: undefined,
    keyModeSwitch: undefined
    // persistState: undefined
}

function masterControl() {

    // if onscreen assigned options are manipulated
    let controlOptions = onScreenFirstPassOptions;

    if (controlOptions.keyCenter !== undefined) {
        keyCenterConBool = true;
        keyCenterOption = controlOptions.keyCenter;
    }

    if (controlOptions.startingChord !== undefined) {
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

    if (controlOptions.numOfRepeats !== undefined) {
        numOfRepeatsConBool = true;
        numOfRepeatsOption = controlOptions.numOfRepeats;
    }

    if (controlOptions.keyModeSwitch !== undefined) {
        keyModeSwitchConBool = true;
        keyModeSwitchOption = controlOptions.keyModeSwitch;
    }

    // if (controlOptions.persistState !== undefined) {
    //     persistStateConBool = true;
    //     persistStateOption = controlOptions.persistState;
    // }

    buildDoublePeriod();
}

function startingChordOptionHandler() {
    // start progression on given harmony
    let startingChordSlider = document.getElementById("starting-chord-slider");
    let startingChordOutput = document.getElementById("starting-chord-output");
    let startingChordCheckbox = document.getElementById("startingChord-check");
    let startingChordLabel = document.getElementById('starting-chord-label');

    function displayHandler() {
        if (startingChordCheckbox.checked === true) {
            startingChordOutput.innerHTML = '...';
            startingChordSlider.style.opacity = 0.3;
            startingChordLabel.style.opacity = 1;
        } else if (startingChordCheckbox.checked === false) {
            startingChordOutput.innerHTML = currentHarmony[startingChordSlider.value - 1];
            startingChordSlider.style.opacity = 0.9;
            startingChordLabel.style.opacity = 0.4;
        }
    }

    function controlHandler() {
        // indicate user control
        startingChordConBool = true;
        // set random boolean from checkbox
        startingChordRandom = startingChordCheckbox.checked;
    }

    function multiDataControlDisplay() {
        controlHandler();
        // push user value to control object
        onScreenFirstPassOptions.startingChord = startingChordSlider.value;
        // display handling
        displayHandler();
    }

    // handle on-page-load conditional styling
    startingChordCheckbox.checked === false && displayHandler();

    // set initial display value
    startingChordOutput.innerHTML = currentHarmony[startingChordSlider.value - 1];

    startingChordSlider.onclick = () => multiDataControlDisplay();
    
    startingChordSlider.onmousedown = () => {
        startingChordCheckbox.checked = false;
        displayHandler();
    }

    startingChordSlider.oninput = () => displayHandler();

    startingChordCheckbox.oninput = () => multiDataControlDisplay();
}
startingChordOptionHandler();

function cadenceControlHandler() {
    let cadenceSlider = document.getElementById("cadence-slider");
    let cadenceSliderOutput = document.getElementById("cadence-output");
    let cadenceCheckbox = document.getElementById("cadence-check");
    let cadenceLabel = document.getElementById('cadence-label');

    function displayHandler() {
        if (cadenceCheckbox.checked === true) {
            cadenceSliderOutput.innerHTML = '...';
            cadenceSlider.style.opacity = 0.3;
            cadenceLabel.style.opacity = 1;
        } else if (cadenceCheckbox.checked === false) {
            cadenceSliderOutput.innerHTML = cadenceType[cadenceSlider.value - 1];
            cadenceSlider.style.opacity = 0.9;
            cadenceLabel.style.opacity = 0.4;
        }
    }

    function controlHandler() {
        // indicate user control
        typeOfCadenceConBool = true;
        // release random control
        typeOfCadenceRandom = cadenceCheckbox.checked;
    }

    function multiDataControlDisplay() {
        controlHandler();
        // push value to control object
        onScreenFirstPassOptions.typeOfCadence = cadenceSlider.value;
        displayHandler();
    }

    // set initial display value
    cadenceSliderOutput.innerHTML = '...';

    cadenceSlider.onclick = () => multiDataControlDisplay();
    
    cadenceSlider.onmousedown = () => {
        cadenceCheckbox.checked = false;
        displayHandler();
    }

    cadenceSlider.oninput = () => displayHandler();

    cadenceCheckbox.oninput = () => multiDataControlDisplay();
}
cadenceControlHandler();

function keyCenterControlHandler() {
    let keyCenterArray = [keyOfF, keyOfC, keyOfG, keyOfD];
    let keyCenterString = ['Key of F', 'Key of C', 'Key of G', 'Key of D'];
    let keyCenterSlider = document.getElementById("key-center-slider");
    let keyCenterSliderOutput = document.getElementById("key-center-output");
    let keyCenterCheckbox = document.getElementById("keyCenter-check");
    let keyCenterLabel = document.getElementById('key-center-label');

    function displayHandler() {
        if (keyCenterCheckbox.checked === true) {
            keyCenterSliderOutput.innerHTML = '...';
            keyCenterSlider.style.opacity = 0.3;
            keyCenterLabel.style.opacity = 1;
        } else if (keyCenterCheckbox.checked === false) {
            keyCenterSliderOutput.innerHTML = keyCenterString[keyCenterSlider.value - 1];
            keyCenterSlider.style.opacity = 0.9;
            keyCenterLabel.style.opacity = 0.4;
        }
    }

    function controlHandler() {
        // release random control
        keyCenterRandom = keyCenterCheckbox.checked;
        // indicate user control
        keyCenterConBool = true;
    }

    function multiDataControlDisplay() {
        controlHandler();
        // push user value to control object
        onScreenFirstPassOptions.keyCenter = keyCenterArray[keyCenterSlider.value - 1];
        displayHandler();
    }

    // set initial display value
    keyCenterSliderOutput.innerHTML = '...';

    keyCenterSlider.onclick = () => multiDataControlDisplay();
    
    keyCenterSlider.onmousedown = () => {
        keyCenterCheckbox.checked = false;
        displayHandler();
    }

    keyCenterSlider.oninput = () => displayHandler();

    keyCenterCheckbox.oninput = () => multiDataControlDisplay();
}
keyCenterControlHandler();

function keyModeControlHandler() {
    let modeArray = [major, minor];
    let keyModeSlider = document.getElementById("key-mode-slider");
    let keyModeSliderOutput = document.getElementById("key-mode-output");
    let keyModeCheckbox = document.getElementById("keyMode-check");
    let keyModeLabel = document.getElementById('key-mode-label');
    let startChordSlider = document.getElementById("starting-chord-slider");
    let startChordDisplay = document.getElementById("starting-chord-output");

    function displayHandler() {
        if (keyModeCheckbox.checked === true) {
            keyModeSliderOutput.innerHTML = '...';
            keyModeSlider.style.opacity = 0.3;
            keyModeLabel.style.opacity = 1;
        } else if (keyModeCheckbox.checked === false) {
            keyModeSlider.value == 1 ? keyModeSliderOutput.innerHTML = "Major" : keyModeSliderOutput.innerHTML = "Minor";
            keyModeSlider.style.opacity = 0.9;
            keyModeLabel.style.opacity = 0.4;
        }
    }

    function controlHandler() {
        // indicate user control
        keyModeConBool = true;
        // release random control
        keyModeRandom = keyModeCheckbox.checked;
    }

    function multiDataControlDisplay() {
        controlHandler();
        // push user value to control object
        onScreenFirstPassOptions.keyMode = modeArray[keyModeSlider.value - 1];
        displayHandler();
    }

    // set initial display value
    keyModeSliderOutput.innerHTML = "...";

    keyModeSlider.onclick = () => {
        // change helper letiable and starting chord slider display
        currentHarmony = modeArray[keyModeSlider.value - 1];
        startChordDisplay.innerHTML = currentHarmony[startChordSlider.value - 1];
        multiDataControlDisplay();
    }
    
    keyModeSlider.onmousedown = () => {
        // turn off checkboxx
        keyModeCheckbox.checked = false;
        displayHandler();
    }

    keyModeSlider.oninput = () => displayHandler();

    keyModeCheckbox.oninput = () => {
        multiDataControlDisplay();
        // change helper letiable
        currentHarmony = modeArray[keyModeSlider.value - 1];
    }
}
keyModeControlHandler();

function numChordsHandler() {
    let numChordsSlider = document.getElementById("num-chords-slider");
    let numChordsSliderOutput = document.getElementById("num-chords-output");
    let chordsCheckbox = document.getElementById("numOfChords-check");
    let numChordsLabel = document.getElementById('num-chords-label');

    function displayHandler() {
        if (chordsCheckbox.checked === true) {
            numChordsSliderOutput.innerHTML = '...';
            numChordsSlider.style.opacity = 0.3;
            numChordsLabel.style.opacity = 1;
        } else  if (chordsCheckbox.checked === false) {
            numChordsSliderOutput.innerHTML = numChordsSlider.value;
            numChordsSlider.style.opacity = 0.9;
            numChordsLabel.style.opacity = 0.4;
        }
    }

    function controlHandler() {
        // indicate user control
        numOfChordsConBool = true;
        // release random control
        numOfChordsRandom = chordsCheckbox.checked;
    }

    function multiDataControlDisplay() {
        // push user value to control object
        onScreenFirstPassOptions.numOfChords = numChordsSlider.value;
        controlHandler();
        displayHandler();
    }

    // set initial display value
    numChordsSliderOutput.innerHTML = '...';

    numChordsSlider.onclick = () => multiDataControlDisplay();
    
    numChordsSlider.onmousedown = () => {
        chordsCheckbox.checked = false;
        displayHandler();
    }

    numChordsSlider.oninput = () => displayHandler();

    chordsCheckbox.oninput = () => multiDataControlDisplay();

}
numChordsHandler();

function numRepeatsHandler() {

    let numRepeatsSlider = document.getElementById("num-repeats-slider");
    let numRepeatsSliderOutput = document.getElementById("num-repeats-output");
    let repeatsCheckbox = document.getElementById("numOfRepeats-check");
    let numRepeatsLabel = document.getElementById("num-repeats-label");

    function displayHandler() {
        if (repeatsCheckbox.checked === true) {
            numRepeatsSliderOutput.innerHTML = '...';
            numRepeatsSlider.style.opacity = 0.3;
            numRepeatsLabel.style.opacity = 1;
        } else if (repeatsCheckbox.checked === false) {
            numRepeatsSlider.style.opacity = 0.9;
            numRepeatsLabel.style.opacity = 0.4;
            numRepeatsSliderOutput.innerHTML = numRepeatsSlider.value;
        }
    }

    function controlHandler() {
        // indicate user control
        numOfRepeatsConBool = true;
        // release random control
        numOfRepeatsRandom = repeatsCheckbox.checked;
    }

    function multiDataControlDisplay() {
        // push user value to control object
        onScreenFirstPassOptions.numOfRepeats = numRepeatsSlider.value;
        controlHandler();
        displayHandler();
    }

    // set initial display value
    numRepeatsSliderOutput.innerHTML = '...';

    numRepeatsSlider.onclick = () => multiDataControlDisplay();

    numRepeatsSlider.onmousedown = () => {
        repeatsCheckbox.checked = false;
        displayHandler();
    }

    numRepeatsSlider.oninput = () => displayHandler();

    repeatsCheckbox.oninput = () => multiDataControlDisplay();
}
numRepeatsHandler();

function keyModeSwitchHandler() {
    let modeShiftArray = ['static', 'parallel'];
    let keyModeSwitchSlider = document.getElementById("key-mode-switch-slider");
    let keyModeSwitchSliderOutput = document.getElementById("key-mode-switch-output");
    let keyModeSwitchCheckbox = document.getElementById("keyModeSwitch-check");
    let keyModeSwitchLabel = document.getElementById('key-mode-switch-label');

    function displayHandler() {
        // display handling
        if (keyModeSwitchCheckbox.checked === true) {
            keyModeSwitchSliderOutput.innerHTML = '...';
            keyModeSwitchSlider.style.opacity = 0.3;
            keyModeSwitchLabel.style.opacity = 1;
        } else if (keyModeSwitchCheckbox.checked === false) {
            keyModeSwitchSlider.value == 1 ? keyModeSwitchSliderOutput.innerHTML = "No shift" : keyModeSwitchSliderOutput.innerHTML = "Parallel Mode";
            keyModeSwitchSlider.style.opacity = 0.9;
            keyModeSwitchLabel.style.opacity = 0.4;
        }
    }

    function controlHandler() {
        // indicate user control
        keyModeSwitchConBool = true;
        // set random boolean from checkbox
        keyModeSwitchRandom = keyModeSwitchCheckbox.checked;
    }

    function multiDataControlDisplay() {
        // push value that was hidden to control object
        onScreenFirstPassOptions.keyModeSwitch = modeShiftArray[keyModeSwitchSlider.value - 1];
        controlHandler();
        displayHandler();
    }

    keyModeSwitchSlider.onclick = () => multiDataControlDisplay();

    keyModeSwitchSlider.onmousedown = () => {
        keyModeSwitchCheckbox.checked = false;
        displayHandler();
    }

    keyModeSwitchSlider.oninput = () => displayHandler();

    keyModeSwitchCheckbox.oninput = () => multiDataControlDisplay();
}

keyModeSwitchHandler();

// Persist buttons
function startChordPersist() {
    let element = document.getElementById('start-chord-persist-toggle');
    // indicate user control
    startingChordConBool = true;
    // change current toggle state
    startingChordPersist = !startingChordPersist;
    // display handling
    startingChordPersist === true ? element.style.backgroundColor = 'pink' : element.style.backgroundColor = 'white';
}

function cadencePersist() {
    let element = document.getElementById('cadence-persist-toggle');
    typeOfCadenceConBool = true;
    typeOfCadencePersist = !typeOfCadencePersist;
    typeOfCadencePersist === true ? element.style.backgroundColor = 'pink' : element.style.backgroundColor = 'white';
}

function keyCtrPersist() {
    let element = document.getElementById('key-persist-toggle');
    keyCenterConBool = true;
    keyCenterPersist = !keyCenterPersist;
    keyCenterPersist === true ? element.style.backgroundColor = 'pink' : element.style.backgroundColor = 'white';
}

function makeKeyModePersist() {
    let element = document.getElementById('key-mode-persist-toggle');
    keyModeConBool = true;
    keyModePersist = !keyModePersist;
    keyModePersist === true ? element.style.backgroundColor = 'pink' : element.style.backgroundColor = 'white';
}

function numChordPersist() {
    let element = document.getElementById('num-chord-persist-toggle');
    numOfChordsConBool = true;
    numOfChordsPersist = !numOfChordsPersist;
    numOfChordsPersist === true ? element.style.backgroundColor = 'pink' : element.style.backgroundColor = 'white';
}

function sectionModeShift() {
    let element = document.getElementById('section-shift-persist-toggle');
    keyModeSwitchConBool = true;
    keyModeSwitchPersist = !keyModeSwitchPersist;
    keyModeSwitchPersist === true ? element.style.backgroundColor = 'pink' : element.style.backgroundColor = 'white';
}

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

    if (keyModeSwitchPersist === false) {
        keyModeSwitchConBool = false;
    }

    numOfRepeatsConBool = false;

    // persistStateConBool = false;
}

// END of document

// SCRATCH 



// function persistButtonHandler() {
//     let conBool = [
//         startingChordConBool,
//         typeOfCadenceConBool,
//         keyCenterConBool,
//         keyModeConBool,
//         numOfChordsConBool,
//         keyModeSwitchConBool,
//     ];

//     let persistBool = [
//         startingChordPersist,
//         typeOfCadencePersist,
//         keyCenterPersist,
//         keyModePersist,
//         numOfChordsPersist,
//         keyModeSwitchPersist
//     ];

//     let buttonElem = [
//         'start-chord-persist-toggle',
//         'cadence-persist-toggle',
//         'key-persist-toggle',
//         'key-mode-persist-toggle',
//         'num-chord-persist-toggle',
//         'section-shift-persist-toggle'
//     ];

//     conBool.forEach((item, i) => {
//         item = true;
//         persistBool[i] = !persistBool[i];
//         if (persistBool[i] === true) {
//             document.getElementById(buttonElem[i]).style.backgroundColor = 'pink';
//         } else {
//             document.getElementById(buttonElem[i]).style.backgroundColor = 'white';
//         }
//     })
// }
// persistButtonHandler();