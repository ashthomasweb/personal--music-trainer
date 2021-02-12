// array of all notes
let chromIndex = ["Gb3", "G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"];
let majorIndex = ["G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
let anhemMajIndex = ["G3", "A3", "C4", "D4", "E4", "G4", "A4", "C5"];
let minorIndex = ["G3", "Ab3", "Bb3", "C4", "D4", "Eb4", "F4", "G4", "Ab4", "Bb4", "C5"];
let anhemMinIndex = ["G3", "Bb3", "C4", "Eb4", "G4", "Bb4", "C5"];
let minorBluesIndex = ["G3", "Bb3", "C4", "Eb4", "F4", "Gb4", "G4", "Bb4", "C5"]
let majorBluesIndex = ["G3", "A3", "C4", "D4", "Eb4", "E4", "G4", "A4", "C5"];
let harmMinorIndex = ["G3", "Ab3", "B3", "C4", "D4", "Eb4", "F4", "G4", "Ab4", "B4", "C5"];
let jazzMinorIndex = ["G3", "A3", "B3", "C4", "D4", "Eb4", "F4", "G4", "A4", "B4", "C5"];
let bebopTonicIndex = ["G3", "Ab3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "Ab4", "A4", "B4", "C5"];
let bebopPreIndex = ["G3", "A3", "Bb3", "C4", "D4", "Eb4", "E4", "F4", "G4", "A4", "Bb4", "C5"];
let bebopDomIndex = ["G3", "A3", "Bb3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "Bb4", "B4", "C5"];
let lydianIndex = ["G3", "A3", "B3", "C4", "D4", "E4", "Gb4", "G4", "A4", "B4", "C5"];
let ionianIndex = ["G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
let mixolydianIndex = ["G3", "A3", "Bb3", "C4", "D4", "E4", "F4", "G4", "A4", "Bb4", "C5"];
let dorianIndex = ["G3", "A3", "Bb3", "C4", "D4", "Eb4", "F4", "G4", "A4", "Bb4", "C5"];
let aolianIndex = ["G3", "Ab3", "Bb3", "C4", "D4", "Eb4", "F4", "G4", "Ab4", "Bb4", "C5"];
let phrygianIndex = ["G3", "Ab3", "Bb3", "C4", "Db4", "Eb4", "F4", "G4", "Ab4", "Bb4", "C5"];
let locrianIndex = ["Gb3", "Ab3", "Bb3", "C4", "Db4", "Eb4", "F4", "Gb4", "Ab4", "Bb4", "C5"];
let octHWIndex = ["Gb3", "G3", "A3", "Bb3","C4", "Db4", "Eb4", "E4","Gb4", "G4", "A4", "Bb4", "C5"];
let octWHIndex = ["Gb3", "Ab3", "A3", "B3", "C4", "D4", "Eb4","F4", "Gb4","Ab4", "A4", "B4", "C5"];

let modeArray = [
    ["Chromatic", chromIndex],
    ["Major", majorIndex],
    ["Minor", minorIndex],
    ["Anhematonic Major", anhemMajIndex],
    ["Anhematonic Minor", anhemMinIndex],
    ["Major Blues", majorBluesIndex],
    ["Minor Blues", minorBluesIndex],
    ["Harmonic Minor", harmMinorIndex],
    ["Jazz Minor", jazzMinorIndex],
    ["Bebop Tonic (I)", bebopTonicIndex],
    ["Bebop Predominant (ii)", bebopPreIndex],
    ["Bebop Dominant (V)", bebopDomIndex],
    ["Lydian", lydianIndex],
    ["Ionian", ionianIndex],
    ["Mixolydian", mixolydianIndex],
    ["Dorian", dorianIndex],
    ["Aeolian", aolianIndex],
    ["Phrygian", phrygianIndex],
    ["Locrian", locrianIndex],
    ["Octatonic Half/Whole", octHWIndex],
    ["Octatonic Whole/Half", octWHIndex]
];


let modeChoice = modeArray[0][0];
let modePos = 0;
let availNotes = modeArray[0][1];

function modeCycle() {
    if (modePos == modeArray.length - 1) {
        modePos = 0;
    } else {
        modePos++;
    }
    modeChoice = modeArray[modePos][0];
    availNotes = modeArray[modePos][1];

    document.getElementById("mode-type").innerText = modeChoice;
    modeScore = modeChoice;
    modeSelect();

}


// helper function to select tones for modes

function modeSelect() {

    function allOff() {
        chromIndex.forEach(displayNone);

        function displayNone(item) {
            document.getElementsByClassName(item)[0].style.display = "none";
        }
    }

    function displayNoteClass(item) {
        document.getElementsByClassName(item)[0].style.display = "block";
    }

    for (let i = 0; i < modeArray.length - 1; i++) {
        if (modeChoice == modeArray[i][0]) {
            allOff();
            modeArray[i][1].forEach(displayNoteClass);
        }

    }

}

// || Accidentals Toggle 

function accidentalToggles(btnId) {
    let sharpDisplay;
    let sharps;
    let flatDisplay;
    let flats;
    let degDisplay;
    let degrees;
    let solfDisplay;
    let syllables;
    
    let btnInfo = [
        ["solf-switch", "syllable", solfDisplay, syllables],
        ["deg-switch", "degree", degDisplay, degrees],
        ["flat-switch", "acc-flat", flatDisplay, flats],
        ["sharp-switch", "acc-sharp", sharpDisplay, sharps]
    ];

    btnInfo[btnId][2] = document.getElementById(btnInfo[btnId][0]).dataset;
    btnInfo[btnId][3] = document.getElementsByClassName(btnInfo[btnId][1]);
    if (btnInfo[btnId][2].display === "true") {
        for (let i = 0; i < btnInfo[btnId][3].length; i++) {
            btnInfo[btnId][3][i].style.display = "none";
        }
        document.getElementById(btnInfo[btnId][0]).style.backgroundColor = "pink";
        btnInfo[btnId][2].display = "false";
    } else if ( btnInfo[btnId][2].display === "false" ) {
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
    
    if ( freeModeBool == true ) {
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

    if ( klangBool == true ) {
        instrumentCycle();
    } else {
        // do nothing
    }
}


function powerToggle() {

    if ( instPower == true ) {
        audioCx.suspend;
        document.getElementById("power-switch").style.backgroundColor = "rgb(239, 239, 239)";
    } else {
        audioCx.resume;
        document.getElementById("power-switch").style.backgroundColor = "pink";
    }

    if ( initialLoad == true ) {
        document.getElementById("power-switch").style.backgroundColor = "pink";
        instrumentCycle();
        initialLoad = !initialLoad;
        instPower = true;
    } 

}



// || Pattern Verification from The Arnold Game

function patCheck() {

    if (melodyPat[melodyPat.length - (melodyPat.length - userPat.length) - 1] === userPat[userPat.length - 1] && userPat.length === melodyPat.length) {
        console.log('Next round');
        userPointerOff();

        setTimeout(function() {
            userPat = [];
            buildMelody();
        }, 1500);
        setTimeout(function() {
            userPointerOn();
        }, 1700);

        lastRoundScore = userPat.length;
    } else if (melodyPat[melodyPat.length - (melodyPat.length - userPat.length) - 1] === userPat[userPat.length - 1]) {
        // step for successful turn, but incomplete pattern.
        
    } else {
        scorePush();

        setTimeout(() => alert("Game Over"),10);

        melodyPat = [];
        userPat = [];
        lastRoundScore = 0;
    }
}

// || Cadence 

function chord(a, b, c, d, e, f, g) {
    cadenceBool = true;
    let args = Array.from(arguments);
    args.forEach( (item) => noteSwitch(item) );
    cadenceBool = false;
}

// || Pointer Events toggle 

function userPointerOff() {
    let wrapArray = document.getElementsByClassName("wrap");

    for ( let i = 0; i < wrapArray.length - 1; i++ ) {
        wrapArray[i].style.pointerEvents = "none";
    }
}

function userPointerOn() {
    let wrapArray = document.getElementsByClassName("wrap");

    for ( let i = 0; i < wrapArray.length - 1; i++ ) {
        wrapArray[i].style.pointerEvents = "auto";
    }
}
 

// || Free Mode 

function freeModeToggle() {
    freeModeBool = !freeModeBool;
    if ( freeModeBool == true ) {
        document.getElementById("free-mode-switch").style.backgroundColor = "pink";
    } else {
        document.getElementById("free-mode-switch").style.backgroundColor = "rgb(239, 239, 239)";
    }
}

// || Klangfarbenmelodie 

function klangToggle() {
    klangBool = !klangBool;
    if ( klangBool == true ) {
        document.getElementById("klang-switch").style.backgroundColor = "pink";
    } else {
        document.getElementById("klang-switch").style.backgroundColor = "rgb(239, 239, 239)";
    }
}


// || Past Scores 

function scorePush() {
    
    let scoreInst;
    let scoreValue = 0;
    let scoreMode = modeScore;


    if ( klangBool == true ) {
        scoreInst = "Klangfarbenmelodie!";
    } else {
        scoreInst = instrumentChoice[2];
    }

    scoreValue = lastRoundScore;

    let lastScore = [ scoreInst, scoreValue, scoreMode ];
    
    pastScores.push(lastScore);

    pastScores.forEach( (item) => {
        allScores.push(item[1]);
    });
    
    pastScores.forEach( (item) => {
        if ( item[1] === Math.max.apply(null, allScores) ){
            document.getElementById("high-score").innerText = item[1] + " - " + item[0] + " - " + item[2];
        }
    });

    let lastPastScore = pastScores[pastScores.length - 1];
    let parent = document.getElementsByClassName('scores')[0];

    let emptyScore = document.getElementsByClassName('scores')[0].children[3];
    let clone = emptyScore.cloneNode(true);

    parent.insertBefore(clone, emptyScore);
    emptyScore.innerText = lastPastScore[1] + " - " + lastPastScore[0] + " - " + lastPastScore[2];

}

// END of document 