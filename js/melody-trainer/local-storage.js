// Local Storage for "Music Trainer"

// send and recieve array objects to local storage
function localStorageCreate(input) {
    input === keyArray && localStorage.setItem("keyArray", JSON.stringify(keyArray));
    input === pastScores && localStorage.setItem("pastScores", JSON.stringify(pastScores));
    input === colorArray && localStorage.setItem("colorArray", JSON.stringify(colorArray));
}

function localStorageRetrieve(output) {
    if (output === keyArray) {
        return JSON.parse(localStorage.getItem("keyArray"));
    }
    if (output === pastScores) {
        return JSON.parse(localStorage.getItem("pastScores"));
    }
    if (output === colorArray) {
        return JSON.parse(localStorage.getItem("colorArray"));
    }
}

function retrieveColors() {
    if (localStorageRetrieve(colorArray) !== null) {
        console.log('has storage');
        colorArray = localStorageRetrieve(colorArray);
        for (let i = 0; i <= document.getElementsByClassName('wrap').length - 1; i++) {
            colorPicker[i].value = colorArray[i];
        }
    }
    saveColors();
}

function retrieveKeyPrefs() {
    if (localStorage.getItem("keyArray") !== undefined) {
        keyArray = JSON.parse(localStorage.getItem("keyArray"));

        for (let i = 0; i < assignBtns.length; i++) {
            let keyToString = "\"" + keyArray[i] + "\"";
            if (keyArray[i] !== null) {
                assignBtns[i].innerText = keyToString.toUpperCase();
            } else {
                // do nothing
            }
        }

        window.addEventListener('keydown', windowEventListener);
    }
}

function retrieveScores() {
    let allScores = [];
    let scoreBox = document.getElementsByClassName('scores')[0];

    if (localStorageRetrieve(pastScores) !== null) {
        pastScores = localStorageRetrieve(pastScores);
        // loop through array in reverse to get last score at top
        for (let i = pastScores.length; i > 0; i--) {
            scoreBox.insertBefore(scoreBox.children[3].cloneNode(true), scoreBox.children[3]);
            scoreBox.children[3].innerText = `${pastScores[pastScores.length - i][1]} - ${pastScores[pastScores.length - i][0]} - ${pastScores[pastScores.length - i][2]}`;
        }
        scoreBox.insertBefore(scoreBox.children[3].cloneNode(true), scoreBox.children[3]);
        scoreBox.children[3].innerText = '...';
    }

    // push all scoreValue to array for high score check
    pastScores.forEach((item) => {
        allScores.push(item[1]);
    });
    // finds most recent highest score and populates scorebox
    pastScores.forEach((item) => {
        if (item[1] === Math.max.apply(null, allScores)) {
            document.getElementById("high-score").innerText = `${item[1]} - ${item[0]} - ${item[2]}`;
        }
    });
}

// onload load scores, colors, keys
function loadUserPrefs() {
    retrieveKeyPrefs();
    retrieveColors();
    retrieveScores();
}

// END of document 
