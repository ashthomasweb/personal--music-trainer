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

let modeArray = ["Major", "Minor", "Chromatic", "Anhematonic Major", "Anhematonic Minor"];
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
    let allNotes = ["C4", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C5", ]
    // mode-specific index key
    let chromIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let majorIndex = [0, 2, 4, 5, 7, 9, 11, 12];
    let AnhemMajIndex = [0, 2, 4, 7, 9, 12];
    
    let minorIndex = [0, 2, 3, 5, 7, 8, 10, 12];
    let AnhemMinIndex = [0, 3, 5, 7, 10, 12];

    function allOff() {
        chromIndex.forEach(displayBox);

        function displayBox(item) {
            document.getElementsByClassName(allNotes[item])[0].style.display = "none";

        }
    }

    if (modeChoice == "Major") {
        allOff();
        majorIndex.forEach(displayBox);

        function displayBox(item) {
            document.getElementsByClassName(allNotes[item])[0].style.display = "block";

        }
    }
    if (modeChoice == "Minor") {
        allOff();
        minorIndex.forEach(displayBox);
        function displayBox(item) {
            document.getElementsByClassName(allNotes[item])[0].style.display = "block";

        }
    }
    if (modeChoice == "Anhematonic Major") {
        allOff();
        AnhemMajIndex.forEach(displayBox);
        function displayBox(item) {
            document.getElementsByClassName(allNotes[item])[0].style.display = "block";

        }
    }
    if (modeChoice == "Anhematonic Minor") {
        allOff();
        AnhemMinIndex.forEach(displayBox);
        function displayBox(item) {
            document.getElementsByClassName(allNotes[item])[0].style.display = "block";

        }
    }
    if (modeChoice == "Chromatic") {
        allOff();
        chromIndex.forEach(displayBox);
        function displayBox(item) {
            document.getElementsByClassName(allNotes[item])[0].style.display = "block";

        }
    }
}