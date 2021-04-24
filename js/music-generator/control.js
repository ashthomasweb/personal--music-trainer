const defaultOptions = {
    keyMode: undefined,
    keyCenter: undefined,
    numOfRepeats: undefined,
    startingChord: undefined,
    typeOfCadence: undefined,
    numOfChords: undefined,
    persistState: undefined
}

let options = {
    keyMode: undefined,
    keyCenter: undefined,
    numOfRepeats: undefined,
    startingChord: undefined,
    typeOfCadence: undefined,
    numOfChords: undefined,
    persistState: undefined
}

function masterControl(options) {
    let controlOptions;

    if (arguments.length === 0) {
        controlOptions = defaultOptions;
    } else {
        controlOptions = options;
    }
    
    // Control variables
    if (controlOptions.keyMode !== undefined) {
        keyModeConBool = true;
        keyModeOption = controlOptions.keyMode;
    }

    if (controlOptions.keyCenter !== undefined) {
        keyCenterConBool = true;
        keyCenterOption = controlOptions.keyCenter;
    }

    if (controlOptions.numOfRepeats !== undefined) {
        numOfRepeatsConBool = true;
        numOfRepeatsOption = controlOptions.numOfRepeats;
    }

    if (controlOptions.startingChord !== undefined) {
        startingChordConBool = true;
        startingChordOption = controlOptions.startingChord;
    }

    if (controlOptions.typeOfCadence !== undefined) {
        typeOfCadenceConBool = true;
        typeOfCadenceOption = controlOptions.typeOfCadence;
    }

    if (controlOptions.numOfChords !== undefined) {
        numOfChordsConBool = true;
        numOfChordsOption = controlOptions.numOfChords;
    }

    if (controlOptions.persistState !== undefined) {
        persistStateConBool = true;
        persistStateOption = controlOptions.persistState;
    }

    buildDoublePeriod();
}

// turn off control booleans
function turnControlOff() {
    keyModeConBool = false;
    keyCenterConBool = false;
    numOfRepeatsConBool = false;
    startingChordConBool = false;
    typeOfCadenceConBool = false;
    numOfChordsConBool = false;
    persistStateConBool = false;
}

// END of document