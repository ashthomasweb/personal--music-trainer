//  Mode JS file for "Music Trainer"

// array of all notes
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
let chromIndex = ["Gb3", "G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"];
let wholeToneIndex = ["Gb3", "Ab3", "Bb3", "C4", "D4", "E4", "Gb4", "Ab4", "Bb4", "C5"];

// array of mode [Name, index, triad type, default accidental]
// upper/lowercase f/s indicates flats/sharps on/off. Upper is ON
let majTri = ['C4', 'E4', 'G4', 'E4', 'C4', 'G3'];
let minTri = ['C4', 'Eb4', 'G4', 'Eb4', 'C4', 'G3'];
let dimTri = ['C4', 'Eb4', 'Gb4', 'Eb4', 'C4', 'Gb3'];
let augTri = ['C4', 'E4', 'Ab4', 'E4', 'C4', 'Ab3'];
let chrTri = ['C4', 'F4', 'G4', 'F4', 'C4', 'G3'];

let modeArray = [
    ["Major", majorIndex, majTri, 'Fs'],
    ["Minor", minorIndex, minTri, 'Fs'],
    ["Anhematonic Major", anhemMajIndex, majTri, 'Fs'],
    ["Anhematonic Minor", anhemMinIndex, minTri, 'Fs'],
    ["Major Blues", majorBluesIndex, majTri, 'FS'],
    ["Minor Blues", minorBluesIndex, minTri, 'MB'],
    ["Harmonic Minor", harmMinorIndex, minTri, 'Fs'],
    ["Jazz Minor", jazzMinorIndex, minTri, 'Fs'],
    ["Bebop Tonic", bebopTonicIndex, majTri, 'FS'],
    ["Bebop Predominant", bebopPreIndex, minTri, 'BP'],
    ["Bebop Dominant", bebopDomIndex, majTri, 'FS'],
    ["Lydian", lydianIndex, majTri, 'fS'],
    ["Ionian", ionianIndex, majTri, 'Fs'],
    ["Mixolydian", mixolydianIndex, majTri, 'Fs'],
    ["Dorian", dorianIndex, minTri, 'Fs'],
    ["Aeolian", aolianIndex, minTri, 'Fs'],
    ["Phrygian", phrygianIndex, minTri, 'Fs'],
    ["Locrian", locrianIndex, dimTri, 'Fs'],
    ["Octatonic Half/Whole", octHWIndex, dimTri, 'FS'],
    ["Octatonic Whole/Half", octWHIndex, dimTri, 'FS'],
    ["Chromatic", chromIndex, chrTri, 'FS'],
    ["Whole Tone", wholeToneIndex, augTri, 'FS']
];

let modeChoiceName = modeArray[0][0];
let modeChoice = modeArray[0];
let availNotes = modeArray[0][1];
let modeType = modeArray[0][2]; // mode triad quality
let modePos = 0;

// switch modes and change display text
function modeCycle() {
    if (modePos == modeArray.length - 1) {
        modePos = 0;
    } else {
        modePos++;
    }
    modeChoice = modeArray[modePos];
    modeChoiceName = modeArray[modePos][0];
    availNotes = modeArray[modePos][1];
    modeType = modeArray[modePos][2];
    document.getElementById("mode-type").innerText = modeChoiceName;
    modeScore = modeChoiceName;
    modeSelect();
}

function displayAccidentals(item) {

    // display low opacity accidentals
    function displayLow(item) {
        document.getElementsByClassName(item)[0].style.display = "block";
        document.getElementsByClassName(item)[0].style.opacity = "0.1";
    }

    // reset all notes between mode switch
    function displayNone(item) {
        document.getElementsByClassName(item)[0].style.display = "none";
    }

    // turn all notes off
    function allNotesOff() {
        if (accDisplayBool === true) {
            chromIndex.forEach(displayLow);
        } else {
            chromIndex.forEach(displayNone);
        }
    }

    // display useable notes
    function displayNoteClass(item) {
        document.getElementsByClassName(item)[0].style.display = "block";
        document.getElementsByClassName(item)[0].style.opacity = "1";
    }

    // turn all notes off and reset with current mode
    allNotesOff();
    item.forEach(displayNoteClass);
}

// select tones for modes using mode index array
function modeSelect() {
    // toggle switches
    let sharpSwitch = document.getElementById('sharp-switch');
    let flatSwitch = document.getElementById('flat-switch');

    function flatOnSharpOn() {
        flatSwitch.dataset.display === 'false' && accidentalToggles(2);
        sharpSwitch.dataset.display === 'false' && accidentalToggles(3);
    }

    function flatOffSharpOff() {
        flatSwitch.dataset.display === 'true' && accidentalToggles(2);
        sharpSwitch.dataset.display === 'true' && accidentalToggles(3);
    }

    function flatOnSharpOff() {
        flatSwitch.dataset.display === 'false' && accidentalToggles(2);
        sharpSwitch.dataset.display === 'true' && accidentalToggles(3);
    }

    function flatOffSharpOn() {
        flatSwitch.dataset.display === 'true' && accidentalToggles(2);
        sharpSwitch.dataset.display === 'false' && accidentalToggles(3);
    }

    // check for current mode and select appropriate accidentals from modeArray
    for (let i = 0; i <= modeArray.length - 1; i++) {

        if (modeChoiceName == modeArray[i][0]) {
            // display notes
            displayAccidentals(modeArray[i][1]);

            if (modeArray[i][3] === 'BP') { // assignment specific to Bebop Predominant mode
                flatOnSharpOn();
                document.getElementById('Bb3-wrap').children[1].children[1].style.display = 'none';
                document.getElementById('Bb3-wrap').children[3].children[0].style.display = 'none';
            } else if (modeArray[i][3] === 'MB') { // assignment specific to Minor Blues mode
                flatOnSharpOff();
                document.getElementById('Gb4-wrap').children[1].children[0].style.display = 'block';
                document.getElementById('Gb4-wrap').children[3].children[0].style.display = 'block';
            } else {
                flatOnSharpOn();
                flatOffSharpOff();
            }
            if (modeArray[i][3] === 'fs') {
                flatOffSharpOff();
            }
            if (modeArray[i][3] === 'Fs') {
                flatOnSharpOff();
            }
            if (modeArray[i][3] === 'fS') {
                flatOffSharpOn();
            }
            if (modeArray[i][3] === 'FS') {
                flatOnSharpOn();
            }

        }

    }

}


// END of document