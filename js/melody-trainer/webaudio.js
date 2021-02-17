// WebAudio Digital Instrument for "Music Trainer"

// array of instrument sources
let instrumentBank = [pianoSource, tenorSaxSource, pipeOrganSource, frenchHornSource, violinSource, marimbaSource];

function powerSwitch() {

    if (instPower == true) {
        audioCx.suspend;
        document.getElementById("power-switch").style.backgroundColor = "rgb(239, 239, 239)";
    } else {
        audioCx.resume;
        document.getElementById("power-switch").style.backgroundColor = "pink";
    }

    if (initialLoad == true) {
        document.getElementById("power-switch").style.backgroundColor = "pink";
        document.getElementById("solf-switch").style.backgroundColor = "pink";
        document.getElementById("deg-switch").style.backgroundColor = "pink";
        document.getElementById("acc-switch").style.backgroundColor = "pink";

        instrumentCycle();
        initialLoad = !initialLoad;
        instPower = true;
    }

    modeSelect();
    freeModeToggle();
}

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

    // initializes sounds to note-buttons
    soundLoader();

    // applies instrument source via listeners
    function soundLoader() {

        for (let i = 0; i <= noteButtonArray.length - 1; i++) {

            // assign event listener to html element
            noteButtonArray[i].addEventListener('mousedown', playSound);

            // webAudio track connection
            instrumentChoice[1][i].connect(audioCx.destination);

        }

    }
}

// Promise object returning on audio end
function playNotePromise(url) {
    return new Promise(function (resolve, reject) { // return a promise
        var audio = new Audio(url); // create audio wo/ src
        currentAudio = audio;
        audio.play() // autoplay when loaded
        audio.onerror = reject; // on error, reject
        audio.onended = resolve; // when done, resolve

    });
}

// named event listener
function playSound() {

    let i = Array.from(this.parentElement.parentElement.children).indexOf(this.parentElement);

    // resume audioCx
    if (audioCx.state === 'suspended') {
        audioCx.resume();
    }

    // stop currently playing audio. needs refactor as gain decrease for legato feel
    if (currentAudio === undefined || cadenceBool == true) {
        // do nothing 
    } else {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // animate sounding note
    lightUp(this.parentElement);

    // play note and repeat note condition
    if (noteButtonArray[i].dataset.playing === 'false') {

        playNotePromise(instrumentChoice[0][i].src).then(function () {
            noteButtonArray[i].dataset.playing = 'false'
        });

        noteButtonArray[i].dataset.playing = 'true';
    } else if (noteButtonArray[i].dataset.playing === 'true') {
        currentAudio.pause();
        currentAudio.currentTime = 0;

        playNotePromise(instrumentChoice[0][i].src).then(function () {
            noteButtonArray[i].dataset.playing = 'false'
        });

        noteButtonArray[i].dataset.playing = 'true';
    }

    // grab played noted name and push to userPat array for checking
    let userPick = noteButtonArray[i].parentElement.className.replace('wrap ', '').replace(' anim-light-up', '');
    userPat.push(userPick);
    // console.log(`This is the userPat: ${userPat}`);

    // prevent pattern check during 'free mode'
    if (freeModeBool === true) {
        // do nothing
    } else {
        patCheck();
    }

    // cycle instrument if klang is 'on'
    if (klangBool == true) {
        instrumentCycle();
    } else {
        // do nothing
    }

}

// webAudio declared function for noteSwitch
function playNote(index, noteId) {
    let item = document.getElementById(`${noteId}-wrap`);
    // console.log(item);
    if (pracModeBool === true) {
        // do nothing
    } else {
        lightUp(item);
    }
    // check if context is in suspended state (autoplay policy)
    if (audioCx.state === 'suspended') {
        audioCx.resume();
    }

    // stop currently playing audio
    if (currentAudio === undefined || cadenceBool == true) {
        // do nothing 
    } else {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    instrumentChoice[0][index].play();
    currentAudio = instrumentChoice[0][index];
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
    }
}

// END of document
