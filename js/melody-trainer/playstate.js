















// || Scale Degree Set 

function buildMelody() {
    pracModeBool = true;

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



// || Pattern Verification

function patCheck() {

    if (melodyPat[melodyPat.length - (melodyPat.length - userPat.length) - 1] === userPat[userPat.length - 1] && userPat.length === melodyPat.length) {
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
        // step for successful turn, but incomplete pattern
    } else {
        pracModeBool = false;
        freeModeToggle();
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



// || Message display 

function displayMessage(msg) {

    let pane = document.getElementById('msg-pane');

    switch (msg) {

        case '1':
            pane.innerText = 'Test!'
            break;

        case '2':
            pane.innerText = 'Test!'
            break;

        default:

    }
}