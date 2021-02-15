//  Component JS file for "Music Trainer"

// || Toggle switches 

function accidentalToggles(btnId) {
    // button specific variables
    let sharpDisplay;
    let sharps;

    let flatDisplay;
    let flats;

    let degDisplay;
    let degrees;

    let solfDisplay;
    let syllables;

    // array of switch id, class, variables
    let btnInfo = [
        ["solf-switch", "syllable", solfDisplay, syllables],
        ["deg-switch", "degree", degDisplay, degrees],
        ["flat-switch", "acc-flat", flatDisplay, flats],
        ["sharp-switch", "acc-sharp", sharpDisplay, sharps]
    ];

    // variable assignments
    btnInfo[btnId][2] = document.getElementById(btnInfo[btnId][0]).dataset;
    btnInfo[btnId][3] = document.getElementsByClassName(btnInfo[btnId][1]);

    if (btnInfo[btnId][2].display === "true") {
        for (let i = 0; i < btnInfo[btnId][3].length; i++) {
            btnInfo[btnId][3][i].style.display = "none";
        }
        document.getElementById(btnInfo[btnId][0]).style.backgroundColor = "pink";
        btnInfo[btnId][2].display = "false";

    } else if (btnInfo[btnId][2].display === "false") {
        for (let i = 0; i < btnInfo[btnId][3].length; i++) {
            btnInfo[btnId][3][i].style.display = "block";
        }
        document.getElementById(btnInfo[btnId][0]).style.backgroundColor = "rgb(239, 239, 239)";
        btnInfo[btnId][2].display = "true";

    }
}

// || Scale Degree Set 

function buildMelody() {
    userPat = [];

    if (freeModeBool == true) {
        freeModeToggle();
    } else {
        // do nothing
    }

    let newNote = availNotes[Math.floor(Math.random() * availNotes.length)];

    // force tonic more often
    if (newNote !== "C4") {
        if (Math.floor(Math.random() * 13) === 0) {
            newNote = "C4";
        }
    }

    noteSwitch(newNote);
    melodyPat.push(newNote);
    // console.log(`Melody pattern is: ${melodyPat}`);

    if (klangBool == true) {
        instrumentCycle();
    } else {
        // do nothing
    }
}

function powerToggle() {

    if (instPower == true) {
        audioCx.suspend;
        document.getElementById("power-switch").style.backgroundColor = "rgb(239, 239, 239)";
    } else {
        audioCx.resume;
        document.getElementById("power-switch").style.backgroundColor = "pink";
    }

    if (initialLoad == true) {
        document.getElementById("power-switch").style.backgroundColor = "pink";
        instrumentCycle();
        initialLoad = !initialLoad;
        instPower = true;
    }

}

// || Pattern Verification

function patCheck() {

    if (melodyPat[melodyPat.length - (melodyPat.length - userPat.length) - 1] === userPat[userPat.length - 1] && userPat.length === melodyPat.length) {
        // console.log('Next round');
        userPointerOff();

        setTimeout(function () {
            userPat = [];
            buildMelody();
        }, 1500);
        setTimeout(function () {
            userPointerOn();
        }, 1700);

        lastRoundScore = userPat.length;
    } else if (melodyPat[melodyPat.length - (melodyPat.length - userPat.length) - 1] === userPat[userPat.length - 1]) {
        // step for successful turn, but incomplete pattern.

    } else {
        scorePush();

        setTimeout(() => alert("Game Over"), 10);

        melodyPat = [];
        userPat = [];
        lastRoundScore = 0;
    }
}

// || Pointer Events toggle 

function userPointerOff() {
    let wrapArray = document.getElementsByClassName("wrap");

    for (let i = 0; i < wrapArray.length - 1; i++) {
        wrapArray[i].style.pointerEvents = "none";
    }
}

function userPointerOn() {
    let wrapArray = document.getElementsByClassName("wrap");

    for (let i = 0; i < wrapArray.length - 1; i++) {
        wrapArray[i].style.pointerEvents = "auto";
    }
}


// || Free Mode 

function freeModeToggle() {
    freeModeBool = !freeModeBool;
    if (freeModeBool == true) {
        document.getElementById("free-mode-switch").style.backgroundColor = "pink";
    } else {
        document.getElementById("free-mode-switch").style.backgroundColor = "rgb(239, 239, 239)";
    }
}

// || Klangfarbenmelodie 

function klangToggle() {
    klangBool = !klangBool;
    if (klangBool == true) {
        document.getElementById("klang-switch").style.backgroundColor = "pink";
    } else {
        document.getElementById("klang-switch").style.backgroundColor = "rgb(239, 239, 239)";
    }
}


// || Past Scores 

function scorePush() {
    // type, score, mode variables
    let scoreInst;
    let scoreValue = 0;
    let scoreMode = modeScore;
    let allScores = [];
    let lastScore = [];
    let lastPastScore;
    let parent = document.getElementsByClassName('scores')[0];
    let emptyScore = document.getElementsByClassName('scores')[0].children[3];
    let clone = emptyScore.cloneNode(true);

    // if klang is true, display as instrument type
    if (klangBool == true) {
        scoreInst = "Klangfarbenmelodie!";
    } else {
        scoreInst = instrumentChoice[2];
    }

    // get most recent completed pattern length
    scoreValue = lastRoundScore;

    // set of last score info
    lastScore = [scoreInst, scoreValue, scoreMode];
    // push last score info to array
    pastScores.push(lastScore);
    lastPastScore = pastScores[pastScores.length - 1];
    pastScores.forEach((item) => {
        allScores.push(item[1]);
    });

    // finds most recent highest past score and populates scorebox
    pastScores.forEach((item) => {
        if (item[1] === Math.max.apply(null, allScores)) {
            document.getElementById("high-score").innerText = item[1] + " - " + item[0] + " - " + item[2];
        }
    });

    // inserts cloned element at top of list and updates last score info
    parent.insertBefore(clone, emptyScore);
    emptyScore.innerText = lastPastScore[1] + " - " + lastPastScore[0] + " - " + lastPastScore[2];

}

// Promise object returning on audio end
function playNote(url) {
    return new Promise(function (resolve, reject) { // return a promise
        var audio = new Audio(url); // create audio wo/ src
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

        playNote(instrumentChoice[0][i].src).then(function () {
            noteButtonArray[i].dataset.playing = 'false'
        });
        currentAudio = instrumentChoice[0][i];
        noteButtonArray[i].dataset.playing = 'true';
    } else if (noteButtonArray[i].dataset.playing === 'true') {
        instrumentChoice[0][i].pause();
        instrumentChoice[0][i].currentTime = 0;

        playNote(instrumentChoice[0][i].src).then(function () {
            noteButtonArray[i].dataset.playing = 'false'
        });
        currentAudio = instrumentChoice[0][i];
        noteButtonArray[i].dataset.playing = 'true';
    }

    // grab played noted name and push to userPat array for checking
    let userPick = noteButtonArray[i].parentElement.className.replace('wrap ', '').replace(' anim-light-up', '');
    userPat.push(userPick);
    // console.log(userPat);

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

// || Play Animations 

function lightUp(input) {
    // 'input' is the 'wrap' element containing the note elements
    //  as defined in the webAudio switch and listeners

    function startAnim() {
        input.classList.add('anim-light-up');
        input.children[1].dataset.anim = 'true';

        input.addEventListener('animationend', () => {
            input.classList.remove('anim-light-up');
            input.children[1].dataset.anim = 'false'
            input.style.backgroundColor = '#181818';
        });
    }

    function stopAnim() {
        input.classList.remove('anim-light-up');
    }

    // check if animation is still running
    if (input.children[1].dataset.anim === 'true') {
        input.style.backgroundColor = 'darkred';
        stopAnim();
        setTimeout(function () {
            startAnim();
        }, 0);
    } else {
        startAnim();
    }

}

// END of document 