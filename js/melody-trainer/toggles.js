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



// END of document 