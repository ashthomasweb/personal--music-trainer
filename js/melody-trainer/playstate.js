// Playstate JavaScript file for "Music Trainer"

// || Melody pattern generation

function buildMelody() {
    let newNote;
    pracModeBool = true;

    userPat = [];

    if (freeModeBool == true) {
        freeModeToggle();
    } else {
        // do nothing
    }

    if (accModeBool === true && Math.floor(Math.random() * 5) === 0) {
        newNote = diffArray[Math.floor(Math.random() * diffArray.length)];
    } else {
        newNote = availNotes[Math.floor(Math.random() * availNotes.length)];
    }

    // force tonic more often
    if (newNote !== "C4") {
        if (Math.floor(Math.random() * 13) === 0) {
            newNote = "C4";
        }
    }

    // force tonic on first turn
    if (tonicStartBool === true && melodyPat.length === 0) {
        Math.floor(Math.random() * 2) === 0 ? newNote = "C4" : newNote = "C5";
    }

    noteSwitch(newNote);
    melodyPat.push(newNote);
    console.log(`Melody pattern is: ${melodyPat}`);

    if (klangBool == true) {
        instrumentCycle();
    } else {
        // do nothing
    }
}


// || Pattern Verification

// named timers for successful round completion and to be cleared
let buildTimer;
let pointerTimer;

function build() {
    buildTimer = setTimeout(function () {
        userPat = [];
        buildMelody();
    }, 1500);
}

function pointer() { 
    pointerTimer = setTimeout(function () {
        userPointerOn();
    }, 1700);
}
 
function clearPracTimers() {
    clearTimeout(buildTimer);
    clearTimeout(pointerTimer);
}

function patCheck() {

    if (melodyPat[melodyPat.length - (melodyPat.length - userPat.length) - 1] === userPat[userPat.length - 1] && userPat.length === melodyPat.length) {
        userPointerOff();
        // timed next round generation and animation
        build();
        pointer();
        lastRoundScore = userPat.length;
    } else if (melodyPat[melodyPat.length - (melodyPat.length - userPat.length) - 1] === userPat[userPat.length - 1]) {
        // step for successful turn, but incomplete pattern
    } else {
        endPractice();
        // setTimeout(() => alert("Game Over"), 10);
        displayMessage(1);
    }

}

function endPractice() {
    clearPracTimers();
    pracModeBool = false;
    freeModeToggle();
    scorePush();
    melodyPat = [];
    userPat = [];
    lastRoundScore = 0;
}

// || Pointer Events Toggle 

function userPointerOff() {
    let wrapArray = document.getElementsByClassName("wrap");

    for (let i = 0; i <= wrapArray.length - 1; i++) {
        wrapArray[i].style.pointerEvents = "none";
    }
}

function userPointerOn() {
    let wrapArray = document.getElementsByClassName("wrap");

    for (let i = 0; i <= wrapArray.length - 1; i++) {
        wrapArray[i].style.pointerEvents = "auto";
    }
}

// || Past Scores 

function scorePush() {
    // helper arrays
    let allScores = [];
    let lastScoreArray = [];
    // score data
    let scoreInst;
    let scoreValue = 0;
    let scoreMode = modeScore;
    // element cloning and score population
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
    lastScoreArray = [scoreInst, scoreValue, scoreMode];

    // push last score info to array
    pastScores.push(lastScoreArray);

    // push all scoreValue to array for high score check
    pastScores.forEach((item) => {
        allScores.push(item[1]);
    });

    // finds most recent highest score and populates scorebox
    pastScores.forEach((item) => {
        if (item[1] === Math.max.apply(null, allScores)) {
            document.getElementById("high-score").innerText = item[1] + " - " + item[0] + " - " + item[2];
        }
    });

    // inserts cloned element at top of list and updates last score info
    lastPastScore = pastScores[pastScores.length - 1];
    parent.insertBefore(clone, emptyScore);
    emptyScore.innerText = lastPastScore[1] + " - " + lastPastScore[0] + " - " + lastPastScore[2];

    // sends pastScores array to local storage
    localStorageCreate(pastScores);

}

// || Message display 

function displayMessage(msg) {

    let pane = document.getElementById('msg-pane');

    switch (msg) {

        case 1:
            pane.innerText = 'Game Over! Try Again.'
            break;

        case 2:
            pane.innerText = 'Test!'
            break;

        default:

    }
}

// END of document
