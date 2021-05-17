// Page Elements for Music Generator

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

function checkForRange() {
    for (i = 0; i <= phraseContainer.length - 1; i++) {
        console.log('range:  ' + i);
        phraseContainer[i][0].voiceLeading[0].forEach( (note) => {
            rangeHandler('bass', note) && console.log('Bass out of range' + note);
        });
        phraseContainer[i][0].voiceLeading[1].forEach( (note) => {
            rangeHandler('tenor', note) && console.log('Tenor out of range' + note);
        });
        phraseContainer[i][0].voiceLeading[2].forEach( (note) => {
            rangeHandler('alto', note) && console.log('Alto out of range' + note);
        });
        phraseContainer[i][0].voiceLeading[3].forEach( (note) => {
            rangeHandler('soprano', note) && console.log('Soprano out of range' + note);
        });
    }
}

function checkForDuplicates() {
    for (i = 0; i <= phraseContainer.length - 1; i++) {
        phraseContainer[i][0].voiceLeading[0].forEach( (note, j) => {
            note === phraseContainer[i][0].voiceLeading[1][j] && console.log('duplicate B:T');
            note === phraseContainer[i][0].voiceLeading[2][j] && console.log('duplicate B:A');
            note === phraseContainer[i][0].voiceLeading[3][j] && console.log('duplicate B:S');
        });
        phraseContainer[i][0].voiceLeading[1].forEach( (note, j) => {
            note === phraseContainer[i][0].voiceLeading[2][j] && console.log('duplicate T:A');
            note === phraseContainer[i][0].voiceLeading[3][j] && console.log('duplicate T:S');
        });
        phraseContainer[i][0].voiceLeading[2].forEach( (note, j) => {
            note === phraseContainer[i][0].voiceLeading[3][j] && console.log('duplicate A:S');
        });
    }
}

// function makePersist() {
//     if (onScreenFirstPassOptions.persistState !== undefined) {
//         onScreenFirstPassOptions.persistState = !onScreenFirstPassOptions.persistState;
//     }
//     if (onScreenFirstPassOptions.persistState === undefined) {
//         onScreenFirstPassOptions.persistState = true;
//     }
//     if (onScreenFirstPassOptions.persistState === true) {
//         document.getElementById('persist-toggle').style.backgroundColor = 'pink';
//     } else {
//         document.getElementById('persist-toggle').style.backgroundColor = 'grey';
//     }
// }

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