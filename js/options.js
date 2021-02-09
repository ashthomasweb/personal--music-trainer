// array of all notes
let chromIndex = ["G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"];
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
    ["Bebop Dominant (V)", bebopDomIndex]
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

    // console.log(document.getElementById("mode-type").innerText);
    document.getElementById("mode-type").innerText = modeChoice;
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

// || Solfege Toggle 

function solfegeSwitch() {
    let solfDisplay = document.getElementById("solf-switch").dataset.display;
    let syllables = document.getElementsByClassName("syllable");
    if (solfDisplay === "true") {
        for (let i = 0; i < syllables.length; i++) {
            syllables[i].style.display = "none";
        }

    }
}


// || Scale Degree Set 
let melodyPat = [];
let userPat = [];


function buildMelody() {
    console.log(availNotes);

    let newNote = availNotes[Math.floor(Math.random() * availNotes.length)];
    if (newNote !== "C4") {
        if (Math.floor(Math.random() * 13) === 0) {
            newNote = "C4";
        }
        console.log(newNote);
    }
    noteSwitch(newNote);
    melodyPat.push(newNote);
    console.log(melodyPat);
}





/* PLAYER PATTERN VERIFICATION */

function patCheck() {

    if (melodyPat[melodyPat.length - (melodyPat.length - userPat.length) - 1] === userPat[userPat.length - 1] && userPat.length === melodyPat.length) {

        alert("Success!");
        userPat = [];
        buildMelody();

    } else if (melodyPat[melodyPat.length - (melodyPat.length - userPat.length) - 1] === userPat[userPat.length - 1]) {


    } else {
        alert("Game Over");
    }

}





// || Cadence 

function cadence(x, y, z) {
    noteSwitch(x);
    noteSwitch(y);
    noteSwitch(z);
}