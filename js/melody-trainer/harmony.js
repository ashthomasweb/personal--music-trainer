// Harmonic Generator for "Music Trainer"
let progLength;
let base7 = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'];

// get number of harmonies 
function getProgressionLength(measures, chordsPerMeasure, resolveForward) {
    progLength = measures * chordsPerMeasure;
    resolveForward && progLength++;
    return progLength;
}


// NOT WORKING - if else if else statements not working. Will generate a progression, but static motion is prevalent as the motion funcitons are not working.
function upSecond(x) {
    let startPosition = base7.indexOf(x);
    let finishPosition;
    if ( startPosition === 6 ) {
        finishPosition = 0;
    } else {
        startPosition++;
        finishPosition = startPosition;
    }
    return base7[finishPosition];
}

function downThird(x) {
    let startPosition = base7.indexOf(x);
    let finishPosition;
    if ( startPosition === 0 ) {
        finishPosition = 5;
    } else if ( startPosition === 1 ) {
        finishPosition = 6;
    } else {
        startPosition - 2;
        finishPosition = startPosition;
    }
    return base7[finishPosition];
}

function upFourth(x) {
    let startPosition = base7.indexOf(x);
    let finishPosition;
    if ( startPosition === 6 ) {
        finishPosition = 2;
    } else if ( startPosition === 5 ) {
        finishPosition = 1;
    } else if ( startPosition === 4 ) {
        finishPosition = 0;
    } else {
        startPosition + 3;
        finishPosition = startPosition;
    }
    return base7[finishPosition];
}

function checkIsStrong(chord, resolution) {
    if ( upSecond(chord) === resolution ) {
        return true;
    } else if ( downThird(chord) === resolution ) {
        return true;
    } else if ( upFourth(chord) === resolution ) {
        return true;
    }
}

function strongMotion(x) {
    let num = Math.floor(Math.random() * 3);
    if ( num === 0 ) {
        return upSecond(x);
    }
    if ( num === 1 ) {
        return downThird(x);
    } 
    if ( num === 2 ) {
        return upFourth(x);
    }
}

function getProgression(start, cadence) {
    let progression = [];
    let i = progLength - 1;
    let cadenceType = ['Authentic', 'Plagal', 'Deceptive', 'Half'];

    function startGeneration() {
       for ( let i = 1; i <= progLength; i++) {
           progression[i] = strongMotion(progression[i-1]);
       }
    }

    // if ( cadence === cadenceType[0] ) {
    //     progression[i] = 'I';
    //     progression[i-1] = 'V7'; 
    //     // if ( progression[i-2])
    // } 
    // if ( cadence === cadenceType[1] ) {
    //     progression[i] = 'IV';
    //     progression[i-1] = 'I'; 
    // } 
    // if ( cadence === cadenceType[2] ) {
    //     progression[i] = 'V';
    //     progression[i-1] = 'vi'; 
    // } 
    // if ( cadence === cadenceType[3] ) {
    //     progression[i] = 'V';
    // } 
    
    progression[0] = start;
    startGeneration();
    return progression;
}