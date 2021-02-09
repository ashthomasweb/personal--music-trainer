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

    console.log(btnInfo[btnId][3]);
    btnInfo[btnId][2] = document.getElementById(btnInfo[btnId][0]).dataset;
    btnInfo[btnId][3] = document.getElementsByClassName(btnInfo[btnId][1]);
    if (btnInfo[btnId][2].display === "true") {
        for (let i = 0; i < btnInfo[btnId][3].length; i++) {
            btnInfo[btnId][3][i].style.display = "none";
        }
        btnInfo[btnId][2].display = "false";
    } else if ( btnInfo[btnId][2].display === "false" ) {
        for (let i = 0; i < btnInfo[btnId][3].length; i++) {
            btnInfo[btnId][3][i].style.display = "block";
        }
        btnInfo[btnId][2].display = "true";

    }
}

// || Scale Degree Set 
let melodyPat = [];
let userPat = [];


function buildMelody() {
    

    let newNote = availNotes[Math.floor(Math.random() * availNotes.length)];
    // force tonic more often
    if (newNote !== "C4") {
        if (Math.floor(Math.random() * 13) === 0) {
            newNote = "C4";
        }
    }

    noteSwitch(newNote);
    melodyPat.push(newNote);
    console.log('Pattern is: ' + melodyPat);
}





// || Pattern Verification 

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
        }, 3500);

    } else if (melodyPat[melodyPat.length - (melodyPat.length - userPat.length) - 1] === userPat[userPat.length - 1]) {
        

    } else {
        console.log("Oops, it's: " + userPat);

        alert("Game Over");
        melodyPat = [];
        userPat = [];
    }
}

// || Cadence 

function chord(x, y, z) {
    noteSwitch(x);
    noteSwitch(y);
    noteSwitch(z);
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
 


// END of document 