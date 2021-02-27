// Harmonic Generator for "Music Trainer"
let progLength;
let base7 = [1,2,3,4,5,6,7];

// get number of harmonies 
function getProgressionLength(measures, chordsPerMeasure, resolveForward) {
    progLength = measures * chordsPerMeasure;
    resolveForward && progLength++;
    return progLength;
}

function upSecond() {

}

function downThird() {

}

function upFourth() {

}


function getProgression(start, cadence) {
    let progression = [];
    let i = progLength - 1;
    let cadenceType = ['Authentic', 'Plagal', 'Deceptive', 'Half'];

    if ( cadence === cadenceType[0] ) {
        progression[i] = 'I';
        progression[i-1] = 'V7'; 
    } 
    if ( cadence === cadenceType[1] ) {
        progression[i] = 'IV';
        progression[i-1] = 'I'; 
    } 
    if ( cadence === cadenceType[2] ) {
        progression[i] = 'V';
        progression[i-1] = 'vi'; 
    } 
    if ( cadence === cadenceType[3] ) {
        progression[i] = 'V';
    } 

    progression[0] = start;

    return progression;
}