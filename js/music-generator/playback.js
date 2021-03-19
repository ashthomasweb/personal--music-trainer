//  Cadences and scale playback JS file for "Music Trainer"

let sourceNoteIndex = ['D6', 'Db6', 'C6', 'B5', 'Bb5', 'A5', 'Ab5', 'G5', 'Gb5', 'F5', 'E5', 'Eb5', 'D5', 'Db5', 'C5', 'B4', 'Bb4', 'A4', 'Ab4', 'G4', 'Gb4', 'F4', 'E4', 'Eb4', 'D4', 'Db4', 'C4', 'B3', 'Bb3', 'A3', 'Ab3', 'G3', 'Gb3', 'F3', 'E3', 'Eb3', 'D3', 'Db3', 'C3', 'B2', 'Bb2', 'A2', 'Ab2', 'G2', 'Gb2', 'F2', 'E2', 'Eb2', 'D2', 'Db2', 'C2', 'B1']

function chord(a, b, c, d, e, f, g) {
    stopChord();
    let args = Array.from(arguments);
    args.forEach((item) => {
        // console.log(item);
        // console.log(document.getElementsByClassName(item)[0]);
        // document.getElementsByClassName(item)[0].classList = "wrap " + item;
        let noteIndex = sourceNoteIndex.indexOf(item);
        currentChord.push(pianoExtendedC[noteIndex]);
    });

    let chance = Math.floor(Math.random() * 0);
    if ( chance === 0 ) {
        arpeggiateVoices(args);
    } else {
        args.forEach((item) => {
            noteSwitch(item);
        });
    }
}

function stopChord() {
    currentChord.forEach(item => {
        item.pause();
        item.currentTime = 0;
    });
    currentChord = [];
}

// global timing variable
let voicesTimer = 0;

// Play voices as blocks without stopping repeated notes
function playVoices() {
    voicesTimer = 0;

    for (let i = 0; i <= progression.length - 1; i++) {
        setTimeout(() => {
            noteSwitch(bassVoiceArray[i]);
            noteSwitch(tenorVoiceArray[i]);
            noteSwitch(altoVoiceArray[i]);
            noteSwitch(sopranoVoiceArray[i]);
        }, voicesTimer + 700);
        voicesTimer = voicesTimer + 700;
    }
}

// Arpeggiate voices without stopping repeated notes
function arpeggiateVoices(input) {
    voicesTimer = 0;
    for (let i = 0; i <= progression.length - 1; i++) {
        setTimeout(() => {
            noteSwitch(input[0]);
        }, voicesTimer);
        setTimeout(() => {
            noteSwitch(input[1]);
        }, voicesTimer + 170);
        setTimeout(() => {
            noteSwitch(input[2]);
        }, voicesTimer + 340);
        setTimeout(() => {
            noteSwitch(input[3]);
        }, voicesTimer + 510);
        voicesTimer = voicesTimer + 680;
    }
}

function playVoicesBlock() {
    voicesTimer = 0;

    for (let i = 0; i <= progression.length - 1; i++) {
        setTimeout(() => {
            chord(bassVoiceArray[i], tenorVoiceArray[i], altoVoiceArray[i], sopranoVoiceArray[i]);
        }, voicesTimer + 800);
        voicesTimer = voicesTimer + 800;
    }
}

// Play from phrasing chart
let allVoicesPlayback = [];
let combinedVoicesPlayback = [[], [] , [], []];
function getAllVoices() {
    for ( let i = 0; i <= allVoicesPlayback.length - 1; i++ ) {
        
        combinedVoicesPlayback[0] = combinedVoicesPlayback[0].concat(allVoicesPlayback[i][0]);
        combinedVoicesPlayback[1] = combinedVoicesPlayback[1].concat(allVoicesPlayback[i][1]);
        combinedVoicesPlayback[2] = combinedVoicesPlayback[2].concat(allVoicesPlayback[i][2]);
        combinedVoicesPlayback[3] = combinedVoicesPlayback[3].concat(allVoicesPlayback[i][3]);
    }
    console.log(allVoicesPlayback);
    console.log(combinedVoicesPlayback);
}

let index = 0;

function iterateThruHarmonies() {
    console.log( 'iteration: ' );
    console.log(index);
    chord(combinedVoicesPlayback[0][index], combinedVoicesPlayback[1][index], combinedVoicesPlayback[2][index], combinedVoicesPlayback[3][index]);
    index++;
}

function playFromArray() {

    index = 0;
    voicesTimer = 0;
    getAllVoices();
    phraseContainer.forEach((phrase) => {

        phrase.forEach((item, i) => {
            if (i !== 0) {
                phrase[i].forEach((item) => {
                    // console.log(item);
                    if (item.length !== 0) {
                        setTimeout(() => {
                            iterateThruHarmonies();
                        }, voicesTimer + 680);
                        voicesTimer = voicesTimer + 680;
                        
                    } else {
                        voicesTimer = voicesTimer + 680;
                        
                    }
                })
            }
        });
    });
}

// play progression in ugly blocks
let progTimer = 0;

function playProg() {
    progTimer = 0;
    console.log(progression);
    for (let i = 0; i <= progression.length - 1; i++) {
        setTimeout(() => {
            playRoman(progression[i]);
        }, progTimer + 500);
        progTimer = progTimer + 500;
    }
}

function playRoman(numeral) {

    switch (numeral) {

        case "I":
            chord('C4', 'E4', 'G4');
            break;
        case "ii":
            chord('D4', 'F4', 'A4');
            break;
        case "iii":
            chord('E4', 'G4', 'B4');
            break;
        case "IV":
            chord('C4', 'F4', 'A4');
            break;
        case "V":
            chord('G3', 'B3', 'D4');
            break;
        case "vi":
            chord('A3', 'C4', 'E4');
            break;
        case "vii":
            chord('B3', 'D4', 'F4');
            break;
        default:
            console.log('Fin.')
    }
}

// END of document 