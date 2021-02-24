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

// || Accidentals 

// display toggle switch
function accidentalDisplayToggle() {
    accDisplayBool = !accDisplayBool;
    if (accDisplayBool == true) {
        document.getElementById("acc-switch").style.backgroundColor = "pink";
    } else {
        document.getElementById("acc-switch").style.backgroundColor = "rgb(239, 239, 239)";
    }
    // call display toggle function on current mode
    displayAccidentals(availNotes);
}

// accidental difference array - finds unused notes
function accidentalDifference() {
    if ( accDisplayBool === false ) {
        accidentalDisplayToggle();
    } else {
        // do nothing
    }
    // finds unused notes, makes them available during practice mode
    diffArray = chromIndex.filter( x => !modeChoice[1].includes(x) );
}

// accidentals possible in practice mode
function accidentalModeToggle() {
    accModeBool = !accModeBool;
    accidentalDifference();
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

// Keyboard 

// keyboard toggle
function keyboardToggle() {
    keyboardBool = !keyboardBool;
    if (keyboardBool == true) {
        document.getElementById("keyboard-switch").style.backgroundColor = "pink";
        for (let i = 0; i < assignBtns.length; i++) {
            assignBtns[i].style.display = 'block';
        }
    } else {
        document.getElementById("keyboard-switch").style.backgroundColor = "rgb(239, 239, 239)";
        for (let i = 0; i < assignBtns.length; i++) {
            assignBtns[i].style.display = 'none';
        }
    }
}

// user clicked assign button
function assignKey() {
    removeEventListener('keydown', windowEventListener);
    window.addEventListener('keydown', assignListener);
    window.addEventListener('keydown', windowEventListener);
}

// listens for new key
function assignListener(e) {
    // indexable value of target
    let index = e.target.name;
    for (let i = 0; i <= keyArray.length; i++) {
        // set empty array length, required for data retrieval
        keyArray[18] = null;
        // replace already used key
        if (keyArray[i] === e.key) {
            keyArray[i] = null;
            assignBtns[i].innerText = 'Assign';
        }
    }
    // set key/Assign to element
    let addQuotes = "\"" + e.key + "\"";
    assignBtns[index].innerText = addQuotes.toUpperCase();
    // set key to storage array
    keyArray[index] = e.key;
    localStorageCreate(keyArray);
    // remove assignment listener
    removeEventListener('keydown', assignListener);
}

// window listener for keyboard playback
function windowEventListener(e) {
    for (let i = 0; i <= noteArray.length; i++) {
        if (e.key === keyArray[i]) {
            playNote(i, noteArray[i])
            userPat.push(noteArray[i]);
            klangBool == true && instrumentCycle();
        }
    }
}

// Color Picker

function colorPickerToggle() {
    colorPickBool = !colorPickBool;
    if (colorPickBool == true) {
        document.getElementById("color-switch").style.backgroundColor = "pink";
        for (let i = 0; i < document.getElementsByClassName('color-picker').length; i++) {
            document.getElementsByClassName('color-picker')[i].style.display = 'block';
        }
    } else {
        document.getElementById("color-switch").style.backgroundColor = "rgb(239, 239, 239)";
        for (let i = 0; i < document.getElementsByClassName('color-picker').length; i++) {
            document.getElementsByClassName('color-picker')[i].style.display = 'none';
        }
    }
}

// END of document 
