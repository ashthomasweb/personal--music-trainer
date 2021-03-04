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
    if (accDisplayBool === false) {
        accidentalDisplayToggle();
    } else {
        // do nothing
    }
    // finds unused notes, makes them available during practice mode
    diffArray = chromIndex.filter(x => !modeChoice[1].includes(x));
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
    // localStorageCreate(keyArray);
    removeEventListener('keydown', windowEventListener);
    window.addEventListener('keydown', assignListener);
    window.addEventListener('keydown', windowEventListener);
}

// listens for new key
function assignListener(e) {
    // indexable value of target
    let index = e.target.name;
    for (let i = 0; i <= keyArray.length; i++) {
        // replace already used key
        if (keyArray[i] === e.key) {
            keyArray[i] = 'Assign';
            assignBtns[i].innerText = 'Assign';
        }
    }
    // set key/assign to element
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
            // check length between clicks
            firstClick = timer;
            timer = Date.now();
            if (timer - firstClick > 100) {
                note = noteArray[i];
                firstNote = note;
            } else {
                note = noteArray[i];
            }
            if (timer - firstClick < 100) {
                chord(note, firstNote);
            } else {
                playNote(i, noteArray[i]);
            }
            pracModeBool && userPat.push(noteArray[i]);

            performCheck();
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

// Instrument Dropdown Menu



function displayInstMenu() {

    let menu = getComputedStyle(document.querySelector('#dropdown-content'));
    let element = document.querySelector('#dropdown-content');

    // window.removeEventListener('click', () => displayInstMenu() );

    if ( menu.display === 'block' ) {
        element.style.display = 'none';
        instMenuBool = false;
    } else if ( menu.display === 'none' ) {
        element.style.display = 'block';
        instMenuBool = true;
    }

}


function getInst() {
    let newInst = event.target.innerText;
    let currentInst = instrumentChoice[2];

    for ( let i = 0; i < 30; i++ ) {
        if ( newInst === currentInst ) {
            displayInstMenu();
            return
        } else {
            instrumentCycle();
            currentInst = instrumentChoice[2];
        }
    }
    
}


// END of document 
