//  Mode JS file for "Music Trainer"

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
let octHWIndex = ["Gb3", "G3", "A3", "Bb3", "C4", "Db4", "Eb4", "E4", "Gb4", "G4", "A4", "Bb4", "C5"];
let octWHIndex = ["Gb3", "Ab3", "A3", "B3", "C4", "D4", "Eb4", "F4", "Gb4", "Ab4", "A4", "B4", "C5"];

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
let availNotes = modeArray[0][1];
let modePos = 0;

// switch modes and change display text
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

// select tones for modes using mode index array
function modeSelect() {

    // turn all notes off
    function allNotesOff() {

        function displayNone(item) {
            document.getElementsByClassName(item)[0].style.display = "none";
        }

        chromIndex.forEach(displayNone);
    }

    function displayNoteClass(item) {
        document.getElementsByClassName(item)[0].style.display = "block";
    }

    for (let i = 0; i < modeArray.length - 1; i++) {

        if (modeChoice == modeArray[i][0]) {
            allNotesOff();
            modeArray[i][1].forEach(displayNoteClass);
        }

    }

}

// End of document
