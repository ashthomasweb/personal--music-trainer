
let instrumentBank = [pianoChromaticC, frenchHornChromaticC, violinChromaticC];
let instrumentChoice = instrumentBank[0];
let instrumentPos = 0;

function instrumentCycle() {
    if (instrumentPos == instrumentBank.length - 1) {
        instrumentPos = 0;
    } else {
        instrumentPos++;
    }
    instrumentChoice = instrumentBank[instrumentPos];

    document.getElementById("instr-type").innerText = instrumentChoice[14];

}

let modeArray = ["Major", "Minor", "Chromatic"];
let modeChoice = modeArray[0]
let modePos = 0;

function modeCycle() {
    if (modePos == modeArray.length - 1) {
        modePos = 0;
    } else {
        modePos++;
    }
    modeChoice = modeArray[modePos];

    // console.log(modeChoice);
    // console.log(document.getElementById("mode-type").innerText);
    document.getElementById("mode-type").innerText = modeChoice;
    modeSelect();
}


// helper function to select tones for modes

function modeSelect() {

    // array of all notes
    let allNotes = ["C4", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C5",]
    // mode-specific index key
    let majorIndex = [0, 3, 5, 6, 8, 10, 12, 13]

    if ( modeChoice == "Major" ) {

            majorIndex.forEach(displayBox);

            function displayBox(item) {
                console.log(allNotes[item]);
            }
    
}