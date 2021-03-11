// Harmonic Generator for "Music Trainer"
let progLength;
let majorHarmony = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'];
let cadenceType = ['Authentic', 'Plagal', 'Deceptive', 'Half'];


// get number of harmonies 
function getProgressionLength(measures, chordsPerMeasure, resolveForward) {
    progLength = measures * chordsPerMeasure;
    resolveForward && progLength++;
    return progLength;
}

// NOT WORKING - if else if else statements not working. Will generate a progression, but static motion is prevalent as the motion funcitons are not working.
function upSecond(x) {
    let startPosition = majorHarmony.indexOf(x);
    let finishPosition;
    if (startPosition === 6) {
        finishPosition = 0;
    } else {
        startPosition++;
        finishPosition = startPosition;
    }
    return majorHarmony[finishPosition];
}

function downThird(x) {
    let startPosition = majorHarmony.indexOf(x);
    let finishPosition;
    if (startPosition === 0) {
        finishPosition = 5;
    } else if (startPosition === 1) {
        finishPosition = 6;
    } else if (startPosition === 4) {
        if (Math.floor(Math.random * 2) === 0) {
            return upSecond(x);
        } else {
            return upFourth(x)
        }
    } else {
        startPosition = startPosition - 2;
        finishPosition = startPosition;
    }
    return majorHarmony[finishPosition];
}

function upFourth(x) {
    let startPosition = majorHarmony.indexOf(x);
    let finishPosition;
    if (startPosition === 6) {
        finishPosition = 2;
    } else if (startPosition === 5) {
        finishPosition = 1;
    } else if (startPosition === 4) {
        finishPosition = 0;
    } else {
        startPosition = startPosition + 3;
        finishPosition = startPosition;
    }
    return majorHarmony[finishPosition];
}

function staticMotion(x) {
    return majorHarmony[majorHarmony.indexOf(x)];
}

function checkIsStrong(chord, resolution) {
    if (upSecond(chord) === resolution) {
        return true;
    } else if (downThird(chord) === resolution) {
        return true;
    } else if (upFourth(chord) === resolution) {
        return true;
    } else if (staticMotion(chord) === resolution) {
        return true;
    } else {
        return false;
    }
}

function strongMotion(x) {
    let num = Math.floor(Math.random() * 4);
    if (num === 0) {
        return upSecond(x);
    }
    if (num === 1) {
        return downThird(x);
    }
    if (num === 2) {
        return upFourth(x);
    }
    if (num === 3) {
        return staticMotion(x);
    }
}

let progression = [];
function getProgression(start, cadence) {
    let i = progLength - 1;

    function startGeneration() {
        for (let i = 1; i <= progLength - 1; i++) {
            progression[i] = strongMotion(progression[i - 1]);
        }
    }


    progression[0] = start;
    startGeneration();

    if (cadence === cadenceType[0]) {
        progression[i] = 'I';
        progression[i - 1] = 'V';
    }
    if (cadence === cadenceType[1]) {
        progression[i] = 'IV';
        progression[i - 1] = 'I';
    }
    if (cadence === cadenceType[2]) {
        progression[i] = 'vi';
        progression[i - 1] = 'V';
    }
    if (cadence === cadenceType[3]) {
        progression[i] = 'V';
    }

    for (let index = 1; index <= progression.length - 1; index++) {
        if (checkIsStrong(progression[index - 1], progression[index]) === false) {
            return getProgression(start, cadence);
        }
    }
    return progression;
}

// Generator selection variables

// Assign values
function assignValues() {
    progression = [];
    progLength = slider.value;
    let start = outputStart.innerHTML;
    let cadence = outputEnd.innerHTML;

    console.log(start);
    console.log(cadence);
    document.getElementById('chord-prog').innerHTML = getProgression(start, cadence);
}

// number of chords
var slider = document.getElementById("myRange");
var output = document.getElementById("chord-num");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// start progression on given harmony
var startx = document.getElementById("myStart");
var outputStart = document.getElementById("chord-start");
outputStart.innerHTML = startx.value;

startx.oninput = function() {

    outputStart.innerHTML = majorHarmony[this.value - 1];
    return majorHarmony[this.value - 1]
}

// type of cadence 
var endx = document.getElementById("myCadence");
var outputEnd = document.getElementById("chord-end");
outputEnd.innerHTML = endx.value;

endx.oninput = function() {
    outputEnd.innerHTML = cadenceType[this.value - 1];
    return cadenceType[this.value - 1]
}











// play progression
let progTimer = 0;

function playProg() {
    progTimer = 0;
    console.log(progression);
    for ( let i = 0; i <= progression.length - 1; i++ ) {
        setTimeout(() => {
            playRoman(progression[i]);
        }, progTimer + 500);
        progTimer = progTimer + 500;
    }
    
    
}

function playRoman(numeral) {

    switch (numeral) {

        case "I":
            chord('C4', 'E4', 'G4');
            break;
        case "ii":
            chord('D4', 'F4', 'A4');
            break;
        case "iii":
            chord('E4', 'G4', 'B4');
            break;
        case "IV":
            chord('C4', 'F4', 'A4');
            break;
        case "V":
            chord('G3', 'B3', 'D4');
            break;
        case "vi":
            chord('A3', 'C4', 'E4');
            break;
        case "vii":
            chord('B3', 'D4', 'F4');
            break;
        default:
            console.log('Fin.')
    }
}


