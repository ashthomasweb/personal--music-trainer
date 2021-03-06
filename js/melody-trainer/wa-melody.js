
// array of instrument sources
let instrumentBank = [
    pianoSource,
    tenorSaxSource,
    pipeOrganSource,
    frenchHornSource,
    violinSource,
    marimbaSource
];

function powerSwitch() {
    let noteContainer = document.getElementsByClassName('note-container')[0];
    let instrumentBtn = document.getElementsByClassName('dropdown')[0].children[0];
    let modeBtn = document.getElementsByClassName('dropdown')[1].children[0];

    let practiceBtn = document.getElementsByClassName('header')[0].children[4];
    let powerSwitch = document.getElementById("power-switch");
    let solfegeSwitch = document.getElementById("solf-switch");
    let degreeSwitch = document.getElementById("deg-switch");
    let accidentalSwitch = document.getElementById("acc-switch");
    let switchArray = [powerSwitch, solfegeSwitch, degreeSwitch, accidentalSwitch];
    let btnsToDisplay = [instrumentBtn, practiceBtn, modeBtn];

    if (instrumentPower === true) {
        instrumentPower = !instrumentPower;
        audioCx.suspend;
        userPointerOff();
        endPractice();
        freeModeBool && freeModeToggle();

        // ghost out notes and instrument selection button
        powerSwitch.style.backgroundColor = "rgb(239, 239, 239)";
        noteContainer.style.pointerEvents = 'none';
        btnsToDisplay.forEach((item) => {
            item.style.opacity = '0.1';
            item.style.pointerEvents = 'none';
        });

        // ghost all notes
        chromIndex.forEach((item) => document.getElementsByClassName(item)[0].style.opacity = "0.1");

    } else if (instrumentPower === false) {
        instrumentPower = !instrumentPower;
        audioCx.resume;
        userPointerOn();
        freeModeToggle();

        // activate notes and instrument selection button
        powerSwitch.style.backgroundColor = "pink";
        noteContainer.style.pointerEvents = 'auto';
        btnsToDisplay.forEach((item) => {
            item.style.opacity = '1';
            item.style.pointerEvents = 'auto';
        });

        if (initialLoad === true) {
            initialLoad = !initialLoad;
            // initial options selection
            switchArray.forEach((item) => item.style.backgroundColor = 'pink');
            instrumentCycle();
            // initialize with Tonic Start enabled
            tonicStartToggle();
        }

        // unghost modal notes
        modeSelect();
        
    }
}


function playNotePromise(url) {
    return new Promise(function (resolve, reject) {
        // webAudio url
        var audio = url;
        currentAudio = audio;
        // play when loaded
        audio.play();
        audio.onerror = reject;
        audio.onended = resolve;
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
    let wrap = this.parentElement;
    // console.log(wrap);
    lightUp(wrap);

    // play note and repeat note condition
    if (noteButtonArray[i].dataset.playing === 'false') {
        playNotePromise(instrumentChoice[0][i]).then(function () {
            noteButtonArray[i].dataset.playing = 'false'
        });
        noteButtonArray[i].dataset.playing = 'true';
    } else if (noteButtonArray[i].dataset.playing === 'true') {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        playNotePromise(instrumentChoice[0][i]).then(function () {
            noteButtonArray[i].dataset.playing = 'false'
        });
        noteButtonArray[i].dataset.playing = 'true';
    }

    // grab played note name and push to userPat array for checking
    let userPick = noteButtonArray[i].parentElement.id.replace('-wrap', '');
    userPat.push(userPick);

    performCheck();
}

function performCheck() {
    
    // prevent pattern check during 'free mode'
    if (freeModeBool === true || instrumentPower === false) {
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