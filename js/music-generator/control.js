const defaultOptions = {
    keyMode: undefined,
    keyCenter: undefined,
    numOfRepeats: undefined,
    startingChordIndex: undefined,
    cadenceTypeIndex: undefined,
}

let options = {
    keyMode: undefined,
    keyCenter: undefined,
    numOfRepeats: undefined,
    startingChordIndex: undefined,
    cadenceTypeIndex: undefined,
}

function masterControl(options) {
    let controlOptions;

    if (arguments.length === 0) {
        controlOptions = defaultOptions;
    } else {
        controlOptions = options;
    }
    
    if (controlOptions.keyMode !== undefined) {
        keyControl = true;
        keyModeVar = controlOptions.keyMode;
    }

    if (controlOptions.keyCenter !== undefined) {
        keyCenterControl = true;
        keyCenterVar = controlOptions.keyCenter;
    }

    if (controlOptions.numOfRepeats !== undefined) {
        numOfRepeatsControl = true;
        numOfRepeatsVar = controlOptions.numOfRepeats;
    }

    if (controlOptions.startingChordIndex !== undefined) {
        startingChordControl = true;
        startingChordVar = controlOptions.startingChordIndex;
    }

    if (controlOptions.cadenceTypeIndex !== undefined) {
        cadenceTypeControl = true;
        cadenceTypeVar = controlOptions.cadenceTypeIndex;
    }

    buildForm();
}

// turn off control booleans
function controlOff() {
    keyControl = false;
    keyCenterControl = false;
    numOfRepeatsControl = false;
    startingChordControl = false;
    cadenceTypeControl = false;
}