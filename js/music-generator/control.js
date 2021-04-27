const generateChance = (factor, addend = 0) => Math.ceil(Math.random() * factor) + addend;


const programDefaults = {
    keyMode: undefined,
    keyCenter: undefined,
    numOfRepeats: undefined,
    startingChord: undefined,
    typeOfCadence: undefined,
    numOfChords: undefined,
    persistState: undefined
}


// onscreen assigned options
let onScreenFirstPassOptions = {
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
    temp.forEach((item) => {
        if (item !== undefined) {
            tempBool = true;
        }
    });

    if (tempBool === true) {
        typeOfDefault = userDefaults;
    } else {
        typeOfDefault = programDefaults;
    }

    return typeOfDefault;
}











function masterControl() {



    // if onscreen assigned options are manipulated, use them
    let controlOptions = onScreenFirstPassOptions;


    if (controlOptions.numOfRepeats !== undefined) {
        numOfRepeatsConBool = true;
        numOfRepeatsOption = controlOptions.numOfRepeats;
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