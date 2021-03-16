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

    cadenceBool = true;
    args.forEach((item) => noteSwitch(item));
    cadenceBool = false;

}

function stopChord() {
    currentChord.forEach(item => {
        item.pause();
        item.currentTime = 0;
    });
    currentChord = [];
}

let voicesTimer = 0;

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

function arpeggiateVoices() {
    voicesTimer = 0;

    for (let i = 0; i <= progression.length - 1; i++) {
        setTimeout(() => {
            noteSwitch(bassVoiceArray[i]);
        }, voicesTimer + 550);
        setTimeout(() => {
            noteSwitch(tenorVoiceArray[i]);
        }, voicesTimer + 1100);
        setTimeout(() => {
            noteSwitch(altoVoiceArray[i]);
        }, voicesTimer + 1650);
        setTimeout(() => {
            noteSwitch(sopranoVoiceArray[i]);
        }, voicesTimer + 2200);
        voicesTimer = voicesTimer + 2200;
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


let index = 0;

function iterateVoices() {
    if ( index === progression.length ) {
        index = 0;
    }
    phraseContainer.forEach((item) => {
        chord(item[0][1][0][index], item[0][1][1][index], item[0][1][2][index], item[0][1][3][index]);
        
    });
    
    index++;
}

function playFromArray() {
    index = 0;
    voicesTimer = 0;
    phraseContainer.forEach((phrase) => {

        phrase.forEach((item, i) => {
            if (i !== 0) {
                phrase[i].forEach((item) => {
                    // console.log(item);
                    if (item.length !== 0) {
                        setTimeout(() => {
                            iterateVoices();
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