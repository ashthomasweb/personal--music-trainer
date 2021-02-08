

let modeArray = ["Chromatic", "Major", "Minor", "Anhematonic Major", "Anhematonic Minor"];
let modeChoice = modeArray[0];
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
    let allNotes = ["C4", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C5", ];
    // mode-specific index key
    let chromIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let majorIndex = [0, 2, 4, 5, 7, 9, 11, 12];
    let AnhemMajIndex = [0, 2, 4, 7, 9, 12];
    let minorIndex = [0, 2, 3, 5, 7, 8, 10, 12];
    let AnhemMinIndex = [0, 3, 5, 7, 10, 12];

    function allOff() {
        chromIndex.forEach(displayNone);

        function displayNone(item) {
            document.getElementsByClassName(allNotes[item])[0].style.display = "none";
        }
    }
    
    function displayBox(item) {
        document.getElementsByClassName(allNotes[item])[0].style.display = "block";
    }
    
    if (modeChoice == "Major") {
        allOff();
        majorIndex.forEach(displayBox);
    }

    if (modeChoice == "Minor") {
        allOff();
        minorIndex.forEach(displayBox);
    }

    if (modeChoice == "Anhematonic Major") {
        allOff();
        AnhemMajIndex.forEach(displayBox);
    }

    if (modeChoice == "Anhematonic Minor") {
        allOff();
        AnhemMinIndex.forEach(displayBox);
    }

    if (modeChoice == "Chromatic") {
        allOff();
        chromIndex.forEach(displayBox);
    }
}

// || Solfege Toggle 

function solfegeSwitch() {
    let solfDisplay = document.getElementById("solf-switch").dataset.display;
    let syllables = document.getElementsByClassName("syllable");
    if ( solfDisplay === "true" ) {
        for ( let i = 0; i < syllables.length; i++ ) {
            syllables[i].style.display = "none";
        }

    } 
}