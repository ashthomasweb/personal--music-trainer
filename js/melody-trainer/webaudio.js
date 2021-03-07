// WebAudio Digital Instrument for "Music Trainer"


// changes instrument source


function instrumentCycle() {

    // selects first instrument from array, then loops through array
    if (instrumentPos == instrumentBank.length - 1 || instrumentPos === undefined) {
        instrumentPos = 0;
    } else {
        instrumentPos++;
    }

    if (klangBool === true) {
        instrumentPos = Math.floor(Math.random() * instrumentBank.length);
    } else {
        // do nothing
    }

    // current instrument source
    instrumentChoice = instrumentBank[instrumentPos];

    // changes on-screen instrument selection
    document.getElementById("instr-type").innerText = instrumentChoice[2];

    // applies instrument source via listeners
    function soundLoader() {
        for (let i = 0; i <= noteButtonArray.length - 1; i++) {
            // assign event listener to html element
            noteButtonArray[i].addEventListener('mousedown', playSound);
            // webAudio track connect to destination
            instrumentChoice[1][i].connect(audioCx.destination);
        }
    }

    // initializes sounds to note-buttons
    soundLoader();
}

// webAudio function for noteSwitch
function playNote(index, noteId) {
    let wrap = document.getElementById(`${noteId}-wrap`);
    // console.log(wrap);
    if (pracModeBool === true) {
        // do nothing
        lightUp(wrap);
    } else {
        lightUp(wrap);
    }
    // check if context is in suspended state (autoplay policy)
    if (audioCx.state === 'suspended') {
        audioCx.resume();
    }
    // stop currently playing audio
    if (currentAudio === undefined || cadenceBool === true) {
        // do nothing
    } else {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    instrumentChoice[0][index].play();
    if ( cadenceBool === false ) {
        currentAudio = instrumentChoice[0][index];
    }
   
}

function noteSwitch(noteId) {

    switch (noteId) {

        case "C5":
            playNote(0, noteId);
            break;
        case "B4":
            playNote(1, noteId);
            break;
        case "Bb4":
            playNote(2, noteId);
            break;
        case "A4":
            playNote(3, noteId);
            break;
        case "Ab4":
            playNote(4, noteId);
            break;
        case "G4":
            playNote(5, noteId);
            break;
        case "Gb4":
            playNote(6, noteId);
            break;
        case "F4":
            playNote(7, noteId);
            break;
        case "E4":
            playNote(8, noteId);
            break;
        case "Eb4":
            playNote(9, noteId);
            break;
        case "D4":
            playNote(10, noteId);
            break;
        case "Db4":
            playNote(11, noteId);
            break;
        case "C4":
            playNote(12, noteId);
            break;
        case "B3":
            playNote(13, noteId);
            break;
        case "Bb3":
            playNote(14, noteId);
            break;
        case "A3":
            playNote(15, noteId);
            break;
        case "Ab3":
            playNote(16, noteId);
            break;
        case "G3":
            playNote(17, noteId);
            break;
        case "Gb3":
            playNote(18, noteId);
            break;
        default:
            console.log('Fin.')
    }
}

// END of document
