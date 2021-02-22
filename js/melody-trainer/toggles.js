//  Component JS file for "Music Trainer"

// || Toggle switches 


function accidentalToggles(btnId) {
    // button specific variables
    let sharpDisplay;
    let sharps;
    let flatDisplay;
    let flats;
    let degDisplay;
    let degrees;
    let solfDisplay;
    let syllables;

    // array of switch id, class, variables
    let btnInfo = [
        ["solf-switch", "syllable", solfDisplay, syllables],
        ["deg-switch", "degree", degDisplay, degrees],
        ["flat-switch", "acc-flat", flatDisplay, flats],
        ["sharp-switch", "acc-sharp", sharpDisplay, sharps]
    ];

    // variable assignments
    btnInfo[btnId][2] = document.getElementById(btnInfo[btnId][0]).dataset;
    btnInfo[btnId][3] = document.getElementsByClassName(btnInfo[btnId][1]);

    if (btnInfo[btnId][2].display === "true") {
        for (let i = 0; i < btnInfo[btnId][3].length; i++) {
            btnInfo[btnId][3][i].style.display = "none";
        }
        document.getElementById(btnInfo[btnId][0]).style.backgroundColor = "rgb(239, 239, 239)";
        btnInfo[btnId][2].display = "false";

    } else if (btnInfo[btnId][2].display === "false") {
        for (let i = 0; i < btnInfo[btnId][3].length; i++) {
            btnInfo[btnId][3][i].style.display = "block";
        }
        document.getElementById(btnInfo[btnId][0]).style.backgroundColor = "pink";
        btnInfo[btnId][2].display = "true";

    }
}

// || Free Mode 

function freeModeToggle() {
    freeModeBool = !freeModeBool;
    if (freeModeBool == true) {
        document.getElementById("free-mode-switch").style.backgroundColor = "red";
        document.getElementById("free-mode-switch").style.color = "black";

    } else {
        document.getElementById("free-mode-switch").style.backgroundColor = "rgb(239, 239, 239)";
        document.getElementById("free-mode-switch").style.color = "grey";
    }
}

// || Klangfarbenmelodie 

function klangToggle() {
    klangBool = !klangBool;
    if (klangBool == true) {
        document.getElementById("klang-switch").style.backgroundColor = "pink";
    } else {
        document.getElementById("klang-switch").style.backgroundColor = "rgb(239, 239, 239)";
    }
}

// Accidentals toggle switch

function accidentalToggle() {
    accDisplayBool = !accDisplayBool;
    if (accDisplayBool == true) {
        document.getElementById("acc-switch").style.backgroundColor = "pink";
    } else {
        document.getElementById("acc-switch").style.backgroundColor = "rgb(239, 239, 239)";
    }
    // call display toggle function on current mode
    accidentalDisplay(availNotes);
}

function accidentalModeToggle() {
    accModeBool = !accModeBool;
    accDifference();
    if (accModeBool == true) {
        document.getElementById("acc-mode-switch").style.backgroundColor = "pink";
    } else {
        document.getElementById("acc-mode-switch").style.backgroundColor = "rgb(239, 239, 239)";
    }
}

// Tonic Start

function tonicStartToggle() {
    tonicStartBool = !tonicStartBool;
    if (tonicStartBool == true) {
        document.getElementById("tonic-switch").style.backgroundColor = "pink";
    } else {
        document.getElementById("tonic-switch").style.backgroundColor = "rgb(239, 239, 239)";
    }
}

// Keyboard On

function keyboardToggle() {
    keyboardBool = !keyboardBool;
    if (keyboardBool == true) {
        document.getElementById("keyboard-switch").style.backgroundColor = "pink";
        console.log(document.getElementById('B4-keypress'))
        document.getElementById('C5-keypress').style.display = 'block';
        document.getElementById('B4-keypress').style.display = 'block';
        document.getElementById('Bb4-keypress').style.display = 'block';
        document.getElementById('A4-keypress').style.display = 'block';
        document.getElementById('Ab4-keypress').style.display = 'block';
        document.getElementById('G4-keypress').style.display = 'block';
        document.getElementById('Gb4-keypress').style.display = 'block';
        document.getElementById('F4-keypress').style.display = 'block';
        document.getElementById('E4-keypress').style.display = 'block';
        document.getElementById('Eb4-keypress').style.display = 'block';
        document.getElementById('D4-keypress').style.display = 'block';
        document.getElementById('Db4-keypress').style.display = 'block';
        document.getElementById('C4-keypress').style.display = 'block';
        document.getElementById('B3-keypress').style.display = 'block';
        document.getElementById('Bb3-keypress').style.display = 'block';
        document.getElementById('A3-keypress').style.display = 'block';
        document.getElementById('Ab3-keypress').style.display = 'block';
        document.getElementById('G3-keypress').style.display = 'block';
        document.getElementById('Gb3-keypress').style.display = 'block';
    } else {
        document.getElementById("keyboard-switch").style.backgroundColor = "rgb(239, 239, 239)";
        document.getElementById('C5-keypress').style.display = 'none';
        document.getElementById('B4-keypress').style.display = 'none';
        document.getElementById('Bb4-keypress').style.display = 'none';
        document.getElementById('A4-keypress').style.display = 'none';
        document.getElementById('Ab4-keypress').style.display = 'none';
        document.getElementById('G4-keypress').style.display = 'none';
        document.getElementById('Gb4-keypress').style.display = 'none';
        document.getElementById('F4-keypress').style.display = 'none';
        document.getElementById('E4-keypress').style.display = 'none';
        document.getElementById('Eb4-keypress').style.display = 'none';
        document.getElementById('D4-keypress').style.display = 'none';
        document.getElementById('Db4-keypress').style.display = 'none';
        document.getElementById('C4-keypress').style.display = 'none';
        document.getElementById('B3-keypress').style.display = 'none';
        document.getElementById('Bb3-keypress').style.display = 'none';
        document.getElementById('A3-keypress').style.display = 'none';
        document.getElementById('Ab3-keypress').style.display = 'none';
        document.getElementById('G3-keypress').style.display = 'none';
        document.getElementById('Gb3-keypress').style.display = 'none';
    }
}

let keyArray = [];

function assignKey() {
    removeEventListener('keydown', windowEventListener);
    window.addEventListener('keydown', assignListener);
    windowListener();
}


function assignListener(e) {
    let index = e.target.name;
    console.log(index);
    keyArray[index] = e.keyCode;
    removeEventListener('keydown', assignListener);
}

function windowListener() {
    window.addEventListener('keydown', windowEventListener);
}

// needs userPat push
function windowEventListener(e) {
    for ( let i = 0; i < noteArray.length; i++ ) {

        if (e.keyCode === keyArray[i]) {
            playNote(i, noteArray[i])
            userPat.push(noteArray[i]);
        }
    }
}

// Color Picker

function colorPicker() {
    colorPickBool = !colorPickBool;
    if (colorPickBool == true) {
        document.getElementById("color-switch").style.backgroundColor = "pink";

        for ( let i = 0; i < document.getElementsByClassName('color-pick').length; i++ ) {
            document.getElementsByClassName('color-pick')[i].style.display = 'block';
        }


    } else {
        document.getElementById("color-switch").style.backgroundColor = "rgb(239, 239, 239)";

        for ( let i = 0; i < document.getElementsByClassName('color-pick').length; i++ ) {
            document.getElementsByClassName('color-pick')[i].style.display = 'none';
        }
    }
}

// END of document 