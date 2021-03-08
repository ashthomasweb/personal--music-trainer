
// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCont = new AudioContext();


const pianoTrackArray = [];
const pianoChromaticC = [
    new Audio("sounds/piano/piano-C5.mp3"),
    new Audio("sounds/piano/piano-B4.mp3"),
    new Audio("sounds/piano/piano-Bb4.mp3"),
    new Audio("sounds/piano/piano-A4.mp3"),
    new Audio("sounds/piano/piano-Ab4.mp3"),
    new Audio("sounds/piano/piano-G4.mp3"),
    new Audio("sounds/piano/piano-Gb4.mp3"),
    new Audio("sounds/piano/piano-F4.mp3"),
    new Audio("sounds/piano/piano-E4.mp3"),
    new Audio("sounds/piano/piano-Eb4.mp3"),
    new Audio("sounds/piano/piano-D4.mp3"),
    new Audio("sounds/piano/piano-Db4.mp3"),
    new Audio("sounds/piano/piano-C4.mp3"),
    new Audio("sounds/piano/piano-B3.mp3"),
    new Audio("sounds/piano/piano-Bb3.mp3"),
    new Audio("sounds/piano/piano-A3.mp3"),
    new Audio("sounds/piano/piano-Ab3.mp3"),
    new Audio("sounds/piano/piano-G3.mp3"),
    new Audio("sounds/piano/piano-Gb3.mp3")
];
for (let i = 0; i < pianoChromaticC.length; i++) {
    pianoTrackArray.push(audioCont.createMediaElementSource(pianoChromaticC[i]));
};
const pianoSource = [pianoChromaticC, pianoTrackArray, "Piano"];

function soundLoader() {
    for (let i = 0; i <= pianoChromaticC.length - 1; i++) {
        // webAudio track connect to destination
        pianoTrackArray[i].connect(audioCont.destination);
    }
}

soundLoader();


// webAudio function for noteSwitch
function playNote(i) {
    
    // check if context is in suspended state (autoplay policy)
    if (audioCont.state === 'suspended') {
        audioCont.resume();
    }
 
    pianoChromaticC[i].play();
   
   
}



function noteSwitch(noteId) {

    switch (noteId) {

        case "C5":
            playNote(0, noteId);
            break;
        case "B4":
            playNote(1, noteId);
            break;
        case "Bb4":
            playNote(2, noteId);
            break;
        case "A4":
            playNote(3, noteId);
            break;
        case "Ab4":
            playNote(4, noteId);
            break;
        case "G4":
            playNote(5, noteId);
            break;
        case "Gb4":
            playNote(6, noteId);
            break;
        case "F4":
            playNote(7, noteId);
            break;
        case "E4":
            playNote(8, noteId);
            break;
        case "Eb4":
            playNote(9, noteId);
            break;
        case "D4":
            playNote(10, noteId);
            break;
        case "Db4":
            playNote(11, noteId);
            break;
        case "C4":
            playNote(12, noteId);
            break;
        case "B3":
            playNote(13, noteId);
            break;
        case "Bb3":
            playNote(14, noteId);
            break;
        case "A3":
            playNote(15, noteId);
            break;
        case "Ab3":
            playNote(16, noteId);
            break;
        case "G3":
            playNote(17, noteId);
            break;
        case "Gb3":
            playNote(18, noteId);
            break;
        default:
            console.log('Fin.')
    }
}
