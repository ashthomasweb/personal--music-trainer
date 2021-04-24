// Page Elements for Music Generator

// Assign values
// function assignValues() {
//     progression = [];
//     progLength = slider.value;
//     let start = outputStart.innerHTML;
//     let cadence = outputCadenceSlide.innerHTML;
//     document.getElementById('chord-prog').innerHTML = getProgression(start, cadence);
// }

// number of repeats
var slider = document.getElementById("myRange");
var output = document.getElementById("chord-num");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
    options.numOfRepeats = this.value;
}



// number of chords
var sliderNumOfChords = document.getElementById("myNumOfChords");
var outputNumOfChords = document.getElementById("num-of-chords");
outputNumOfChords.innerHTML = slider.value;

sliderNumOfChords.oninput = function () {
    outputNumOfChords.innerHTML = this.value;
    options.numOfChords = this.value;
}





// start progression on given harmony
var startx = document.getElementById("myStart");
var outputStart = document.getElementById("chord-start");
outputStart.innerHTML = currentHarmony[startx.value - 1];

startx.oninput = function () {
    outputStart.innerHTML = currentHarmony[this.value - 1];
    options.startingChord = this.value;

    // return majorHarmony[this.value - 1]
}




// type of cadence 
var cadenceSlide = document.getElementById("myCadence");
var outputCadenceSlide = document.getElementById("chord-end");
outputCadenceSlide.innerHTML = cadenceType[cadenceSlide.value - 1];

cadenceSlide.oninput = function () {
    outputCadenceSlide.innerHTML = cadenceType[this.value - 1];
    options.typeOfCadence = this.value;

    // return cadenceType[this.value - 1];
}





// On-screen diagnostic/helper functions 

function clearPlayContainers() {
    phraseContainer = [];
    allVoicesPlaybackArray = [
        [],
        [],
        [],
        []
    ];
    tempPlaybackArray = [];
}

function allStop() {
    // empty setTimeout to establish variable name
    var queuedNote = window.setTimeout(() => {}, 0);
    // while setTimeout's exist with positive integers, clear them
    while (queuedNote--) {
        window.clearTimeout(queuedNote);
    }
}

function checkForUndefined() {
    for ( i = 0; i <= phraseContainer.length - 1; i++) {
        console.log('test ' + i);
        phraseContainer[i][0].voiceLeading[0].includes(undefined) && console.log('undefined value occured bass');
        phraseContainer[i][0].voiceLeading[1].includes(undefined) && console.log('undefined value occured t');
        phraseContainer[i][0].voiceLeading[2].includes(undefined) && console.log('undefined value occured a');
        phraseContainer[i][0].voiceLeading[3].includes(undefined) && console.log('undefined value occured s');
    }
}

function makePersist() {
    if (options.persistState !== undefined) {
        options.persistState = !options.persistState;
    }
    if (options.persistState === undefined) {
        options.persistState = true;
    }
    if (options.persistState === true) {
        document.getElementById('persist-toggle').style.backgroundColor = 'pink';
    } else {
        document.getElementById('persist-toggle').style.backgroundColor = 'grey';
    }
}

function preset1() {
    options.numOfChords = 7;
    options.keyCenter = keyOfF;
}

function preset2() {
    options.numOfChords = 7;
    options.keyCenter = keyOfC;
    options.numOfRepeats = 3;
    options.typeOfCadence = 2;
    options.startingChord = 2;
    options.makePersist = true;
}

// END of document