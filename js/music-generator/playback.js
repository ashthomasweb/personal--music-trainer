//  Cadences and scale playback JS file for "Music Trainer"

let sourceNoteIndex = ['D6', 'Db6', 'C6', 'B5', 'Bb5', 'A5', 'Ab5', 'G5', 'Gb5', 'F5', 'E5', 'Eb5', 'D5', 'Db5', 'C5', 'B4', 'Bb4', 'A4', 'Ab4', 'G4', 'Gb4', 'F4', 'E4', 'Eb4', 'D4', 'Db4', 'C4', 'B3', 'Bb3', 'A3', 'Ab3', 'G3', 'Gb3', 'F3', 'E3', 'Eb3', 'D3', 'Db3', 'C3', 'B2', 'Bb2', 'A2', 'Ab2', 'G2', 'Gb2', 'F2', 'E2', 'Eb2', 'D2', 'Db2', 'C2', 'B1']

// Play from phrasing chart
function playFromArray() {

    index = 0;
    voicesTimer = 0;
    displayTimer = 0;
    getAllVoices();
    phraseContainer.forEach((phrase) => {
        // Display function - can only display data that has been included in phraseContainer
        setTimeout(() => {
            document.getElementById('chord-prog').innerHTML = phrase[0][1];
        }, displayTimer);
        displayTimer = displayTimer + 10880;

        phrase.forEach((item, i) => {
            if (i !== 0) {
                phrase[i].forEach((item) => {
                    if (item.length !== 0) {
                        // THIS is where i can control tempo

                        // PRIMARY PLAY - TEMPO AND FUNCTION CALL
                        setTimeout(() => {
                            iterateThruHarmonies();
                        }, voicesTimer + 680);
                        voicesTimer = voicesTimer + 680;

                        // THIS is where i can control tempo

                    } else {
                        voicesTimer = voicesTimer + 680;
                    }
                })
            }
        });
    });
}

let allVoicesPlayback = [];
let combinedVoicesPlayback = [
    [],
    [],
    [],
    []
];

function getAllVoices() {
    for (let i = 0; i <= allVoicesPlayback.length - 1; i++) {
        combinedVoicesPlayback[0] = combinedVoicesPlayback[0].concat(allVoicesPlayback[i][0]);
        combinedVoicesPlayback[1] = combinedVoicesPlayback[1].concat(allVoicesPlayback[i][1]);
        combinedVoicesPlayback[2] = combinedVoicesPlayback[2].concat(allVoicesPlayback[i][2]);
        combinedVoicesPlayback[3] = combinedVoicesPlayback[3].concat(allVoicesPlayback[i][3]);
    }
}

let index = 0;

function iterateThruHarmonies() {
    // THIS is where I can control which voices play per beat
    let chance = Math.floor(Math.random() * 7);
    if (chance === 0) {
        chord(combinedVoicesPlayback[2][index], combinedVoicesPlayback[3][index]);
    } else if (chance === 1) {
        chord(combinedVoicesPlayback[1][index], combinedVoicesPlayback[2][index], combinedVoicesPlayback[3][index]);
    } else if (chance === 2) {
        chord(combinedVoicesPlayback[0][index], combinedVoicesPlayback[2][index], combinedVoicesPlayback[3][index]);
    } else {
        chord(combinedVoicesPlayback[0][index], combinedVoicesPlayback[1][index], combinedVoicesPlayback[2][index], combinedVoicesPlayback[3][index]);
    }
    // THIS is where I can control which voices play per beat

    index++;
}

function chord(a, b, c, d, e, f, g) {
    let args = Array.from(arguments);
    
    // THIS is where I can engage textures
    let chance = Math.floor(Math.random() * 6);
    if (chance === 0) {
        args.forEach((item) => {
            noteSwitch(item);
        });
    } else if (chance === 1 || chance === 2 ) {
        arpeggiateVoices(args);
    // } else if (chance === 2) {
    //     arpeggiateVoicesCompound(args);
    } else {
        boomChuck(args);
    }
}

function stopVoice(voiceGain, currentVoice) {
    if ( currentVoice === [] ) {
        // do nothing 
    } else {
        currentVoice.forEach(item => {
            new Promise(function (resolve, reject) {
                voiceGain.gain.setValueAtTime(1, audioCont.currentTime);
                voiceGain.gain.exponentialRampToValueAtTime(0.0001, audioCont.currentTime + 0.01);
                setTimeout(() => {
                    resolve();
                }, 10)
            }).then(() => {
                pianoExtendedC[item].pause();
                pianoExtendedC[item].currentTime = 0;
            });
        });
        if ( voiceGain === bassGain ) {
            currentBass = [];
        }
        if ( voiceGain === tenorGain ) {
            currentTenor = [];
        }
        if ( voiceGain === altoGain ) {
            currentAlto = [];
        }
        if ( voiceGain === sopranoGain ) {
            currentSoprano = [];
        }
    }
}

// || TEXTURES 

// global timing variable
let voicesTimer = 0;

// Arpeggiate voices without stopping repeated notes
function arpeggiateVoices(input) {
    voicesTimer = 0;
    let chance = Math.floor(Math.random() * 3);
    if (chance === 0) {

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
    } else if (chance === 1) {
        setTimeout(() => {
            noteSwitch(input[3]);
        }, voicesTimer);
        setTimeout(() => {
            noteSwitch(input[2]);
        }, voicesTimer + 170);
        setTimeout(() => {
            noteSwitch(input[1]);
        }, voicesTimer + 340);
        setTimeout(() => {
            noteSwitch(input[0]);
        }, voicesTimer + 510);
        voicesTimer = voicesTimer + 680;
    } else {
        setTimeout(() => {
            noteSwitch(input[0]);
        }, voicesTimer);
        setTimeout(() => {
            noteSwitch(input[2]);
        }, voicesTimer + 170);
        setTimeout(() => {
            noteSwitch(input[3]);
        }, voicesTimer + 340);
        setTimeout(() => {
            noteSwitch(input[1]);
        }, voicesTimer + 510);
        voicesTimer = voicesTimer + 680;
    }
}

function boomChuck(input) {
    voicesTimer = 0;

    setTimeout(() => {
        noteSwitch(input[0]);
    }, voicesTimer);
    setTimeout(() => {
        noteSwitch(input[1]);
        noteSwitch(input[2]);
        noteSwitch(input[3]);
    }, voicesTimer + 340);
}

function arpeggiateVoicesCompound(input) {
    voicesTimer = 0;

    setTimeout(() => {
        noteSwitch(input[0]);
    }, voicesTimer);
    setTimeout(() => {
        noteSwitch(input[2]);
    }, voicesTimer + 113.333);
    setTimeout(() => {
        noteSwitch(input[3]);
    }, voicesTimer + 226.667);
    setTimeout(() => {
        noteSwitch(input[1]);
    }, voicesTimer + 340);
    setTimeout(() => {
        noteSwitch(input[2]);
    }, voicesTimer + 453.333);
    setTimeout(() => {
        noteSwitch(input[3]);
    }, voicesTimer + 566.667);
    voicesTimer = voicesTimer + 680;

}

// Button Playback 

function playVoicesBlock() {
    voicesTimer = 0;

    for (let i = 0; i <= progression.length - 1; i++) {
        setTimeout(() => {
            chord(bassVoiceArray[i], tenorVoiceArray[i], altoVoiceArray[i], sopranoVoiceArray[i]);
        }, voicesTimer + 800);
        voicesTimer = voicesTimer + 800;
    }
}

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