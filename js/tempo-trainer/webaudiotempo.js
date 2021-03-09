
// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCont = new AudioContext();

const percTrackArray = []
const percussionSamples = [
    new Audio("sounds/tempo/low-woodblock.mp3")
];
for (let i = 0; i < percussionSamples.length; i++) {
    percTrackArray.push(audioCont.createMediaElementSource(percussionSamples[i]));
}
// const pianoSource = [pianoChromaticC, pianoTrackArray, "Piano"];

// pianoSource[1][i].connect(audioCont.destination);

function soundLoader() {
    for (let i = 0; i <= percussionSamples.length - 1; i++) {
        // webAudio track connect to destination
        percTrackArray[i].connect(audioCont.destination);

    }
}

// initializes sounds to note-buttons
soundLoader();

// webAudio function for noteSwitch
function playClick(i) {
    
    // check if context is in suspended state (autoplay policy)
    if (audioCont.state === 'suspended') {
        audioCont.resume();
    }
 
    percussionSamples[i].play();
   
   
}
