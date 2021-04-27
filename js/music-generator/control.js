const programDefaults = {
    keyMode: undefined,
    keyCenter: undefined,
    numOfRepeats: 3,
    startingChord: undefined,
    typeOfCadence: undefined,
    numOfChords: undefined,
    persistState: undefined
}

// user defaults 
let userDefaults = {
    keyMode: undefined,
    keyCenter: undefined,
    numOfRepeats: 3,
    startingChord: undefined,
    typeOfCadence: undefined,
    numOfChords: undefined,
    persistState: undefined
}

// onscreen assigned options
let assignedOptions = {
    keyMode: undefined,
    keyCenter: undefined,
    numOfRepeats: undefined,
    startingChord: undefined,
    typeOfCadence: undefined,
    numOfChords: undefined,
    persistState: undefined
}


function defaultOptionHandler() {
    let typeOfDefault;

    let temp = Object.values(userDefaults);
    let tempBool = false;
    temp.forEach( (item) => {
        if ( item !== undefined ) {
            tempBool = true;
        } 
    });

    if ( tempBool === true ) {
        typeOfDefault = userDefaults;
    } else {
        typeOfDefault = programDefaults;
    }

    return typeOfDefault; 
}

// DINNER! this needs rework, not tested. progably will need additional defaultOptionsHandler() to run on load as well as on play.
function masterControl() {
    // apply user defaults or get program defaults
    let userDefaults = defaultOptionHandler();


    // handle defaults or assigned options


    // if onscreen assigned options are manipulated, use them
    let controlOptions = assignedOptions;
    

    
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