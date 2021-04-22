const defaultOptions = {
    keyMode: undefined,
    keyCenter: undefined,
    numOfRepeats: undefined,
    startingChordIndex: undefined,
    cadenceTypeIndex: undefined,
    numOfChords: undefined,
    persistControl: undefined
}

let options = {
    keyMode: undefined,
    keyCenter: undefined,
    numOfRepeats: undefined,
    startingChordIndex: undefined,
    cadenceTypeIndex: undefined,
    numOfChords: undefined,
    persistControl: undefined
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

    if (controlOptions.numOfChords !== undefined) {
        numOfChordsControl = true;
        numOfChordsVar = controlOptions.numOfChords;
    }

    if (controlOptions.persistControl !== undefined) {
        persistentControl = true;
        persistentVar = controlOptions.persistControl;
    }

    buildForm();
}

// turn off control booleans
function turnControlOff() {
    keyControl = false;
    keyCenterControl = false;
    numOfRepeatsControl = false;
    startingChordControl = false;
    cadenceTypeControl = false;
    numOfChordsControl = false;
    persistentControl = false;
}