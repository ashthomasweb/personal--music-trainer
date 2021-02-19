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

// Keybaord On

function keyboardToggle() {
    keyboardBool = !keyboardBool;
    if (keyboardBool == true) {
        document.getElementById("keyboard-switch").style.backgroundColor = "pink";
        document.getElementById('B4-keypress').style.display = 'block';
    } else {
        document.getElementById("keyboard-switch").style.backgroundColor = "rgb(239, 239, 239)";
        document.getElementById('B4-keypress').style.display = 'none';
    }
}

let keyArray = [];

function assignKey() {
    window.addEventListener('keydown', (e) => {
        console.log(e.keyCode);
        keyArray.push(e.keyCode);
    });
    windowListener();
}

function windowListener() {
    window.addEventListener('keydown', (e) => {
        if( e.keyCode === keyArray[0] ) { // key is 'f'
            noteSwitch('G4');
        }
    });
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