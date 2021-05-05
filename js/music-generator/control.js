const generateChance = (factor, addend = 0) => Math.ceil(Math.random() * factor) + addend;

// onscreen assigned options
let onScreenFirstPassOptions = {
    keyCenter: undefined,
    startingChord: undefined,
    typeOfCadence: undefined,
    // keyMode: undefined,
    // numOfRepeats: undefined,
    // numOfChords: undefined,
    // persistState: undefined,
    // keyModeSwitch: undefined
}

function masterControl() {

    // if onscreen assigned options are manipulated, use them
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

    // if (controlOptions.numOfRepeats !== undefined) {
    //     numOfRepeatsConBool = true;
    //     numOfRepeatsOption = controlOptions.numOfRepeats;
    // }

    // if (controlOptions.keyMode !== undefined) {
    //     keyModeConBool = true;
    //     keyModeOption = controlOptions.keyMode;
    // }



    // if (controlOptions.numOfChords !== undefined) {
    //     numOfChordsConBool = true;
    //     numOfChordsOption = controlOptions.numOfChords;
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


function startChordPersist() {
    startingChordPersist = !startingChordPersist;
    if (startingChordPersist === true) {
        document.getElementById('start-chord-persist-toggle').style.backgroundColor = 'pink';
    } else {
        document.getElementById('start-chord-persist-toggle').style.backgroundColor = 'white';
    }
}

function keyCtrPersist() {
    keyCenterPersist = !keyCenterPersist;
    if (keyCenterPersist === true) {
        document.getElementById('key-persist-toggle').style.backgroundColor = 'pink';
    } else {
        document.getElementById('key-persist-toggle').style.backgroundColor = 'white';
    }
}

function cadencePersist() {
    typeOfCadencePersist = !typeOfCadencePersist;
    if ( typeOfCadencePersist === true ) {
        document.getElementById('cadence-persist-toggle').style.backgroundColor = 'pink';
    } else {
        document.getElementById('cadence-persist-toggle').style.backgroundColor = 'white';
    }
}

// function sectionModeShift() {
//     keyCenterPersist = !keyCenterPersist;
//     if ( keyCenterPersist === true ) {
//         document.getElementById('section-shift-persist-toggle').style.backgroundColor = 'pink';
//     } else {
//         document.getElementById('section-shift-persist-toggle').style.backgroundColor = 'white';
//     }
// }

// function numChordPersist() {
//     numOfChordsPersist = !numOfChordsPersist;
//     if ( numOfChordsPersist === true ) {
//         document.getElementById('num-chord-persist-toggle').style.backgroundColor = 'pink';
//     } else {
//         document.getElementById('num-chord-persist-toggle').style.backgroundColor = 'white';
//     }
// }


// function makeKeyModePersist() {
//     keyModePersist = !keyModePersist;
//     if ( keyModePersist === true ) {
//         document.getElementById('key-mode-persist-toggle').style.backgroundColor = 'pink';
//     } else {
//         document.getElementById('key-mode-persist-toggle').style.backgroundColor = 'white';
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
    





    // keyModeConBool = false;
    // numOfRepeatsConBool = false;
    // numOfChordsConBool = false;
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