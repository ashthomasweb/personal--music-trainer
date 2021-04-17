// Page Elements for Music Generator

// Assign values
function assignValues() {
    progression = [];
    progLength = slider.value;
    let start = outputStart.innerHTML;
    let cadence = outputCadenceSlide.innerHTML;
    document.getElementById('chord-prog').innerHTML = getProgression(start, cadence);
}

// number of chords
var slider = document.getElementById("myRange");
var output = document.getElementById("chord-num");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

// start progression on given harmony
var startx = document.getElementById("myStart");
var outputStart = document.getElementById("chord-start");
outputStart.innerHTML = currentHarmony[startx.value - 1];

startx.oninput = function () {
    outputStart.innerHTML = currentHarmony[this.value - 1];
    return majorHarmony[this.value - 1]
}

// type of cadence 
var cadenceSlide = document.getElementById("myCadence");
var outputCadenceSlide = document.getElementById("chord-end");
outputCadenceSlide.innerHTML = cadenceType[cadenceSlide.value - 1];

cadenceSlide.oninput = function () {
    outputCadenceSlide.innerHTML = cadenceType[this.value - 1];
    return cadenceType[this.value - 1]
}

// On-screen diagnostic/helper functions 

function clearPlayContainers() {
    phraseContainer = [];
    combinedVoicesPlayback = [
        [],
        [],
        [],
        []
    ];
    allVoicesPlayback = [];
}

function allStop() {
    // empty setTimeout to establish variable name
    var queuedNote = window.setTimeout(() => {}, 0);
    // while setTimeout's exist with positive integers, clear them
    while (queuedNote--) {
        window.clearTimeout(queuedNote);
    }
}

// END of document