//  Cadences and scale playback JS file for "Music Trainer"
let index = 0;

let sourceNoteIndex = ['D6', 'Db6', 'C6', 'B5', 'Bb5', 'A5', 'Ab5', 'G5', 'Gb5', 'F5', 'E5', 'Eb5', 'D5', 'Db5', 'C5', 'B4', 'Bb4', 'A4', 'Ab4', 'G4', 'Gb4', 'F4', 'E4', 'Eb4', 'D4', 'Db4', 'C4', 'B3', 'Bb3', 'A3', 'Ab3', 'G3', 'Gb3', 'F3', 'E3', 'Eb3', 'D3', 'Db3', 'C3', 'B2', 'Bb2', 'A2', 'Ab2', 'G2', 'Gb2', 'F2', 'E2', 'Eb2', 'D2', 'Db2', 'C2', 'B1']



let tempPlaybackArray = [];
let allVoicesPlaybackArray = [
    [],
    [],
    [],
    []
];

function arrangeAllVoices() {
    for (let i = 0; i <= tempPlaybackArray.length - 1; i++) {
        allVoicesPlaybackArray[0] = allVoicesPlaybackArray[0].concat(tempPlaybackArray[i][0]);
        allVoicesPlaybackArray[1] = allVoicesPlaybackArray[1].concat(tempPlaybackArray[i][1]);
        allVoicesPlaybackArray[2] = allVoicesPlaybackArray[2].concat(tempPlaybackArray[i][2]);
        allVoicesPlaybackArray[3] = allVoicesPlaybackArray[3].concat(tempPlaybackArray[i][3]);
    }
}




// Play from phrasing chart
function playPhraseChart() {
    index = 0;
    voicesTimer = 0;
    displayTimer = 0;
    arrangeAllVoices();
    phraseContainer.forEach((phrase, i) => {
        beatLength = phrase[0].tempo;
        
        // Temporary
        // Display function - can only display data that has been included in phraseContainer
            let formId = 'Form/Section: ' + phrase[0].formId;
            let key = 'Current key: ' + phrase[0].key;
            let tempo = 'Tempo in ms: ' + phrase[0].tempo;
            let progLength = 'Number of chords: ' + phrase[0].progressionLength;
            let progOutput = [];
            phrase[0].progression.forEach((item) => {
                temp = item + '...............';
                progOutput.push(temp.slice(0, 7));
            });
            let progDisplay = 'P: ' + progOutput;
            let pOutput = progDisplay.replace(/\,/g, ".");
            let bassOutput = [];
            phrase[0].voiceLeading[0].forEach((item) => {
                temp = item + '...............';
                bassOutput.push(temp.slice(0, 7));
            });
            let bassDisplay = 'B: ' + bassOutput;
            let bOutput = bassDisplay.replace(/\,/g, ".");
            let tenorOutput = [];
            phrase[0].voiceLeading[1].forEach((item) => {
                temp = item + '...............';
                tenorOutput.push(temp.slice(0, 7));
            });
            let tenorDisplay = 'T: ' + tenorOutput;
            let tOutput = tenorDisplay.replace(/\,/g, ".");
            let altoOutput = [];
            phrase[0].voiceLeading[2].forEach((item) => {
                temp = item + '...............';
                altoOutput.push(temp.slice(0, 7));
            });
            let altoDisplay = 'A: ' + altoOutput;
            let aOutput = altoDisplay.replace(/\,/g, ".");
            let sopranoOutput = [];
            phrase[0].voiceLeading[3].forEach((item) => {
                temp = item + '...............';
                sopranoOutput.push(temp.slice(0, 7));
            });
            let sopranoDisplay = 'S: ' + sopranoOutput;
            let sOutput = sopranoDisplay.replace(/\,/g, ".");
        // Display function - can only display data that has been included in phraseContainer
        // Temporary

        // Timed information display
        setTimeout(() => {
            document.getElementById('form-id').innerText = formId;
            document.getElementById('key').innerText = key;
            document.getElementById('tempo').innerText = tempo;
            document.getElementById('soprano').innerText = sOutput;
            document.getElementById('alto').innerText = aOutput;
            document.getElementById('tenor').innerText = tOutput;
            document.getElementById('bass').innerText = bOutput;
            document.getElementById('chord-prog').innerText = pOutput;
            document.getElementById('prog-length').innerText = progLength;
        }, displayTimer);
        displayTimer = displayTimer + (beatLength * 16);

        // Playback
        phrase.forEach((item, i) => {
            if (i !== 0) { // prevent iteration on info index
                phrase[i].forEach((item) => {
                    if (item.length !== 0) {
                        setTimeout(() => {
                            iteratePlaybackArray(phrase[0]);
                        }, voicesTimer + beatLength);
                        voicesTimer = voicesTimer + beatLength;
                    } else {
                        voicesTimer = voicesTimer + beatLength;
                    }
                })
            }
        });
    });
}



function iteratePlaybackArray(infoArray) {
    // THIS is where I can control which voices play per beat
    let chance = Math.floor(Math.random() * 10);
    chance = 3;
    if (chance === 0) {
        playbackTextureSwitch([allVoicesPlaybackArray[2][index], allVoicesPlaybackArray[3][index]], infoArray);
    } else if (chance === 1) {
        playbackTextureSwitch([allVoicesPlaybackArray[1][index], allVoicesPlaybackArray[2][index], allVoicesPlaybackArray[3][index]], infoArray);
    } else if (chance === 2) {
        playbackTextureSwitch([allVoicesPlaybackArray[0][index], allVoicesPlaybackArray[2][index], allVoicesPlaybackArray[3][index]], infoArray);
    } else if (chance === 3) {
        playbackTextureSwitch([allVoicesPlaybackArray[0][index], allVoicesPlaybackArray[1][index], allVoicesPlaybackArray[2][index], allVoicesPlaybackArray[3][index]], infoArray);
    }
    // THIS is where I can control which voices play per beat

    index++;
}

// THIS is where I can engage textures
function playbackTextureSwitch(voices, infoArray) {

    let chance = Math.floor(Math.random() * 4);
    // chance = 6;
    if (chance === 0) {
        voices.forEach((item) => {
            noteSwitch(item);
        });
    } else if (chance === 1 || chance === 2) {
        arpeggiateVoices(voices, infoArray);
        // } else if (chance === 3) {
        //     arpeggiateVoicesCompound(voices, infoArray);
    } else {
        boomChuck(voices, infoArray);
    }
}

function stopVoice(voiceGain, currentVoice) {
    if (currentVoice === []) {
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
        if (voiceGain === bassGain) {
            currentBass = [];
        }
        if (voiceGain === tenorGain) {
            currentTenor = [];
        }
        if (voiceGain === altoGain) {
            currentAlto = [];
        }
        if (voiceGain === sopranoGain) {
            currentSoprano = [];
        }
    }
}

// || TEXTURES 

// global timing variable
let voicesTimer = 0;

// THIS is where i can control tempo
let beatLength;

function getNewTempo() {
    return (Math.ceil(Math.random() * 500) + 500);
}

function getCloselyRelatedTempo(input) {
    let amountChange = Math.ceil(Math.random() * 70 + 80);
    let chance = Math.ceil(Math.random() * 2);
    if (chance === 1) {
        // console.log(input + amountChange)
        return input + amountChange;
    } else if (chance === 2) {
        // console.log(input + amountChange)
        return input - amountChange;
    }
}
// THIS is where i can control tempo

// Arpeggiate voices without stopping repeated notes
function arpeggiateVoices(voices, infoArray) {
    voicesTimer = 0;
    let chance = Math.floor(Math.random() * 3);
    // chance = 2;
   
    beatLength = infoArray.tempo;

    if (chance === 0) {
        setTimeout(() => {
            noteSwitch(voices[0]);
        }, voicesTimer);
        setTimeout(() => {
            noteSwitch(voices[1]);
        }, voicesTimer + (beatLength * .25));
        setTimeout(() => {
            noteSwitch(voices[2]);
        }, voicesTimer + (beatLength * .5));
        setTimeout(() => {
            noteSwitch(voices[3]);
        }, voicesTimer + (beatLength * .75));
        voicesTimer = voicesTimer + beatLength;
    } else if (chance === 1) {
        setTimeout(() => {
            noteSwitch(voices[3]);
        }, voicesTimer);
        setTimeout(() => {
            noteSwitch(voices[2]);
        }, voicesTimer + (beatLength * .25));
        setTimeout(() => {
            noteSwitch(voices[1]);
        }, voicesTimer + (beatLength * .5));
        setTimeout(() => {
            noteSwitch(voices[0]);
        }, voicesTimer + (beatLength * .75));
        voicesTimer = voicesTimer + beatLength;
    } else {
        setTimeout(() => {
            noteSwitch(voices[0]);
        }, voicesTimer);
        setTimeout(() => {
            noteSwitch(voices[2]);
        }, voicesTimer + (beatLength * .25));
        setTimeout(() => {
            noteSwitch(voices[3]);
        }, voicesTimer + (beatLength * .5));
        setTimeout(() => {
            noteSwitch(voices[1]);
        }, voicesTimer + (beatLength * .75));
        voicesTimer = voicesTimer + beatLength;
    }
}

function boomChuck(voices, infoArray) {
    voicesTimer = 0;
    beatLength = infoArray.tempo;

    setTimeout(() => {
        noteSwitch(voices[0]);
    }, voicesTimer);
    setTimeout(() => {
        noteSwitch(voices[1]);
        noteSwitch(voices[2]);
        noteSwitch(voices[3]);
    }, voicesTimer + (beatLength * .5));
}

function arpeggiateVoicesCompound(voices, infoArray) {
    voicesTimer = 0;
    beatLength = infoArray.tempo;

    setTimeout(() => {
        noteSwitch(voices[0]);
    }, voicesTimer);
    setTimeout(() => {
        noteSwitch(voices[2]);
    }, voicesTimer + (beatLength * .1667));
    setTimeout(() => {
        noteSwitch(voices[3]);
    }, voicesTimer + (beatLength * .333));
    setTimeout(() => {
        noteSwitch(voices[1]);
    }, voicesTimer + (beatLength * .5));
    setTimeout(() => {
        noteSwitch(voices[2]);
    }, voicesTimer + (beatLength * .666));
    setTimeout(() => {
        noteSwitch(voices[3]);
    }, voicesTimer + (beatLength * .8367));
    voicesTimer = voicesTimer + beatLength;
}

// Stop all playback

function allStop() {
    // empty setTimeout to establish variable name
    var queuedNote = window.setTimeout(() => {}, 0);
    // while setTimeout's exist with positive integers, clear them
    while (queuedNote--) {
        window.clearTimeout(queuedNote);
    }
}







// Out Of Date Development Functions
// Button Playback 

// function playVoicesBlock() {
//     voicesTimer = 0;

//     for (let i = 0; i <= progression.length - 1; i++) {
//         setTimeout(() => {
//             chord(bassVoiceArray[i], tenorVoiceArray[i], altoVoiceArray[i], sopranoVoiceArray[i]);
//         }, voicesTimer + 800);
//         voicesTimer = voicesTimer + 800;
//     }
// }

// // Play voices as blocks without stopping repeated notes
// function playVoices() {
//     voicesTimer = 0;

//     for (let i = 0; i <= progression.length - 1; i++) {
//         setTimeout(() => {
//             noteSwitch(bassVoiceArray[i]);
//             noteSwitch(tenorVoiceArray[i]);
//             noteSwitch(altoVoiceArray[i]);
//             noteSwitch(sopranoVoiceArray[i]);
//         }, voicesTimer + 700);
//         voicesTimer = voicesTimer + 700;
//     }
// }

// // play progression in ugly blocks
// let progTimer = 0;

// function playProg() {
//     progTimer = 0;
//     console.log(progression);
//     for (let i = 0; i <= progression.length - 1; i++) {
//         setTimeout(() => {
//             playRoman(progression[i]);
//         }, progTimer + 500);
//         progTimer = progTimer + 500;
//     }
// }

// function playRoman(numeral) {

//     switch (numeral) {

//         case "I":
//             chord('C4', 'E4', 'G4');
//             break;
//         case "ii":
//             chord('D4', 'F4', 'A4');
//             break;
//         case "iii":
//             chord('E4', 'G4', 'B4');
//             break;
//         case "IV":
//             chord('C4', 'F4', 'A4');
//             break;
//         case "V":
//             chord('G3', 'B3', 'D4');
//             break;
//         case "vi":
//             chord('A3', 'C4', 'E4');
//             break;
//         case "vii":
//             chord('B3', 'D4', 'F4');
//             break;
//         default:
//             console.log('Fin.')
//     }
// }



// END of document 