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
    let startingChordCheck = document.getElementById("startingChord-check");
    let startingChordLabel = document.getElementById('starting-chord-label');

    function displayHandler() {
        if (startingChordCheck.checked === true) {
            startingChordOutput.innerHTML = '...';
            startingChordSlider.style.opacity = 0.3;
            startingChordLabel.style.opacity = 1;
        } else {
            startingChordOutput.innerHTML = currentHarmony[startingChordSlider.value - 1];
            startingChordSlider.style.opacity = 0.9;
            startingChordLabel.style.opacity = 0.4;
        }
    }

    function controlHandler() {
        // indicate user control
        startingChordConBool = true;
        // set random boolean from checkbox
        startingChordRandom = startingChordCheck.checked;
    }

    function multiDataControlDisplay() {
        controlHandler();
        // push user value to control object
        onScreenFirstPassOptions.startingChord = startingChordSlider.value;
        // display handling
        displayHandler();
    }

    // handle on-page-load conditional styling
    startingChordCheck.checked === false && displayHandler();

    // set initial display value
    startingChordOutput.innerHTML = currentHarmony[startingChordSlider.value - 1];

    startingChordSlider.onclick = () => {
        // turn off checkbox
        startingChordCheck.checked = false;
        multiDataControlDisplay();
    }

    startingChordSlider.oninput = () => displayHandler();

    startingChordCheck.oninput = () => multiDataControlDisplay();
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
        } else {
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

    cadenceSlider.onclick = () => {
        cadenceCheckbox.checked = false;
        multiDataControlDisplay();
    }

    cadenceSlider.oninput = () => displayHandler();

    cadenceCheckbox.oninput = () => multiDataControlDisplay();
}
cadenceControlHandler();

function keyCenterControlHandler() {
    let keyCenterArray = [keyOfF, keyOfC, keyOfG, keyOfD];
    let keyCenterString = ['Key of F', 'Key of C', 'Key of G', 'Key of D'];
    var keyCenterSlider = document.getElementById("key-center-slider");
    var keyCenterSliderOutput = document.getElementById("key-center-output");
    var keyCenterCheck = document.getElementById("keyCenter-check");
    let keyCenterLabel = document.getElementById('key-center-label');

    function displayHandler() {
        if (keyCenterCheck.checked === true) {
            keyCenterSliderOutput.innerHTML = '...';
            keyCenterSlider.style.opacity = 0.3;
            keyCenterLabel.style.opacity = 1;
        } else {
            keyCenterSliderOutput.innerHTML = keyCenterString[keyCenterSlider.value - 1];
            keyCenterSlider.style.opacity = 0.9;
            keyCenterLabel.style.opacity = 0.4;
        }
    }

    function controlHandler() {
        // release random control
        keyCenterRandom = keyCenterCheck.checked;
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

    keyCenterSlider.onclick = () => {
        // turn off checkbox
        keyCenterCheck.checked = false;
        multiDataControlDisplay();
    }

    keyCenterSlider.oninput = () => multiDataControlDisplay();

    keyCenterCheck.oninput = () => multiDataControlDisplay();
}
keyCenterControlHandler();

function keyModeControlHandler() {
    let modeArray = [major, minor];
    var keyModeSlider = document.getElementById("key-mode-slider");
    var keyModeSliderOutput = document.getElementById("key-mode-output");
    var keyModeCheck = document.getElementById("keyMode-check");
    let keyModeLabel = document.getElementById('key-mode-label');
    let startChordSlider = document.getElementById("starting-chord-slider");
    let startChordDisplay = document.getElementById("starting-chord-output");

    function displayHandler() {
        if (keyModeCheck.checked === true) {
            keyModeSliderOutput.innerHTML = '...';
            keyModeSlider.style.opacity = 0.3;
            keyModeLabel.style.opacity = 1;
        } else {
            keyModeSlider.value == 1 ? keyModeSliderOutput.innerHTML = "Major" : keyModeSliderOutput.innerHTML = "Minor";
            keyModeSlider.style.opacity = 0.9;
            keyModeLabel.style.opacity = 0.4;
        }
    }

    function controlHandler() {
        // indicate user control
        keyModeConBool = true;
        // release random control
        keyModeRandom = keyModeCheck.checked;
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
        // turn off checkbox
        keyModeCheck.checked = false;
        // change current harmony and start chord slider display
        currentHarmony = modeArray[keyModeSlider.value - 1];
        startChordDisplay.innerHTML = currentHarmony[startChordSlider.value - 1];
        multiDataControlDisplay();
    }

    keyModeSlider.oninput = () => {
        multiDataControlDisplay();
    }

    keyModeCheck.oninput = () => {
        multiDataControlDisplay();
        currentHarmony = modeArray[keyModeSlider.value - 1];
    }
}

keyModeControlHandler();

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

    numChordsSlider.oninput = function () {
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

function numRepeatsHandler() {

    var numRepeatsSlider = document.getElementById("num-repeats-slider");
    var numRepeatsSliderOutput = document.getElementById("num-repeats-output");
    var repeatsCheck = document.getElementById("numOfRepeats-check");
    let numRepeatsLabel = document.getElementById("num-repeats-label");

    function numRepeatsOpacity() {
        numRepeatsSlider.style.opacity = 0.9;
        numRepeatsLabel.style.opacity = 0.4;
    }
    // set initial display value
    numRepeatsSliderOutput.innerHTML = '...';

    numRepeatsSlider.onclick = function () {
        // turn off checkbox
        repeatsCheck.checked = false;
        // indicate user control
        numOfRepeatsConBool = true;
        // release random control
        numOfRepeatsRandom = repeatsCheck.checked;
        // push user value to control object
        onScreenFirstPassOptions.numOfRepeats = this.value;
        // display handling
        numRepeatsSliderOutput.innerHTML = this.value;
        numRepeatsOpacity();
    }

    repeatsCheck.oninput = () => {
        // indicate user control
        numOfRepeatsConBool = true;
        // set random boolean from checkbox
        numOfRepeatsRandom = repeatsCheck.checked;
        // display handling
        if (repeatsCheck.checked === true) {
            numRepeatsSliderOutput.innerHTML = '...';
            numRepeatsSlider.style.opacity = 0.3;
            numRepeatsLabel.style.opacity = 1;
        } else {
            numRepeatsSliderOutput.innerHTML = numRepeatsSlider.value;
            numRepeatsOpacity();
        }
    }
}
numRepeatsHandler();

function keyModeSwitchHandler() {
    let modeShiftArray = ['static', 'parallel'];
    var keyModeSwitchSlider = document.getElementById("key-mode-switch-slider");
    var keyModeSwitchSliderOutput = document.getElementById("key-mode-switch-output");
    var keyModeSwitchCheck = document.getElementById("keyModeSwitch-check");
    let keyModeSwitchLabel = document.getElementById('key-mode-switch-label');

    function keyShiftOpacity() {
        keyModeSwitchSlider.style.opacity = 0.9;
        keyModeSwitchLabel.style.opacity = 0.4;
    }

    // handle on-page-load conditional styling
    if (keyModeSwitchCheck.checked === false) {
        keyModeSwitchSlider.style.opacity = 0.9;
        keyModeSwitchLabel.style.opacity = 0.4;
    }

    // set initial display value
    keyModeSwitchSliderOutput.innerHTML = "Parallel";

    keyModeSwitchSlider.onclick = function () {
        // turn off checkbox
        keyModeSwitchCheck.checked = false;
        // indicate user control
        keyModeSwitchConBool = true;
        // release random control
        keyModeSwitchRandom = keyModeSwitchCheck.checked;
        // push user value to control object
        onScreenFirstPassOptions.keyModeSwitch = modeShiftArray[this.value - 1];
        // display handling
        this.value == 1 ? keyModeSwitchSliderOutput.innerHTML = "Stay same" : keyModeSwitchSliderOutput.innerHTML = "Parallel";
        keyShiftOpacity()
    }

    keyModeSwitchSlider.oninput = function () {
        this.value == 1 ? keyModeSwitchSliderOutput.innerHTML = "Stay same" : keyModeSwitchSliderOutput.innerHTML = "Parallel";
        keyShiftOpacity()
    }


    keyModeSwitchCheck.oninput = () => {
        // indicate user control
        keyModeSwitchConBool = true;
        // set random boolean from checkbox
        keyModeSwitchRandom = keyModeSwitchCheck.checked;
        // display handling
        if (keyModeSwitchCheck.checked === true) {
            keyModeSwitchSliderOutput.innerHTML = '...';
            keyModeSwitchSlider.style.opacity = 0.3;
            keyModeSwitchLabel.style.opacity = 1;
        } else {
            // push value that was hidden to control object
            onScreenFirstPassOptions.keyModeSwitch = modeShiftArray[keyModeSwitchSlider.value - 1];
            // display handling
            keyModeSwitchSlider.value == 1 ? keyModeSwitchSliderOutput.innerHTML = "Stay same" : keyModeSwitchSliderOutput.innerHTML = "Parallel";
            keyShiftOpacity();
        }
    }
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