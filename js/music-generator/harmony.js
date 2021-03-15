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

function anyToHome(x) {
    if ( x === 'I' ) {
        return majorHarmony[Math.ceil(Math.random() * 6)];
    } else {
        return majorHarmony[0];
    }
}

// function to ensure progression moves into cadential figure with strong motion 
function checkIsStrong(chord, resolution) {
    if (upSecond(chord) === resolution) {
        return true;
    } else if (downThird(chord) === resolution) {
        return true;
    } else if (upFourth(chord) === resolution) {
        return true;
    } else if (staticMotion(chord) === resolution) {
        return true;
    } else if (anyToHome(chord) === resolution) {
        return true;
    } else {
        return false;
    }
}

function strongMotion(x) {
    let num = Math.floor(Math.random() * 5);
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
    if (num >= 4) {
        return anyToHome(x);
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
        progression[i] = 'I';
        progression[i - 1] = 'IV';
    }
    if (cadence === cadenceType[2]) {
        progression[i] = 'vi';
        progression[i - 1] = 'V';
    }
    if (cadence === cadenceType[3]) {
        progression[i] = 'V';
    }

    if (cadence === 'Plagal') {
        for (let index = 1; index <= progression.length - 2; index++) {
            if (checkIsStrong(progression[index - 1], progression[index]) === false) {
                return getProgression(start, cadence);
            }
        }
    } else {
        for (let index = 1; index <= progression.length - 1; index++) {
            if (checkIsStrong(progression[index - 1], progression[index]) === false) {
                return getProgression(start, cadence);
            }
        }
    }

    return progression;
}

// Generator selection variables





// END of document 