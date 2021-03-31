// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCont = new AudioContext();

function createGainArray() {
    let array = [];
    for (let i = 0; i < 51; i++) {
        array.push(audioCont.createGain());
    }
    return array;
}
let [gainNode0, gainNode1, gainNode2, gainNode3, gainNode4, gainNode5, gainNode6, gainNode7, gainNode8, gainNode9, gainNode10, gainNode11, gainNode12, gainNode13, gainNode14, gainNode15, gainNode16, gainNode17, gainNode18, gainNode19, gainNode20, gainNode21, gainNode22, gainNode23, gainNode24, gainNode25, gainNode26, gainNode27, gainNode28, gainNode29, gainNode30, gainNode31, gainNode32, gainNode33, gainNode34, gainNode35, gainNode36, gainNode37, gainNode38, gainNode39, gainNode40, gainNode41, gainNode42, gainNode43, gainNode44, gainNode45, gainNode46, gainNode47, gainNode48, gainNode49, gainNode50,
    gainNode51
] = createGainArray();

let gainNodes = [gainNode0, gainNode1, gainNode2, gainNode3, gainNode4, gainNode5, gainNode6, gainNode7, gainNode8, gainNode9, gainNode10, gainNode11, gainNode12, gainNode13, gainNode14, gainNode15, gainNode16, gainNode17, gainNode18, gainNode19, gainNode20, gainNode21, gainNode22, gainNode23, gainNode24, gainNode25, gainNode26, gainNode27, gainNode28, gainNode29, gainNode30, gainNode31, gainNode32, gainNode33, gainNode34, gainNode35, gainNode36, gainNode37, gainNode38, gainNode39, gainNode40, gainNode41, gainNode42, gainNode43, gainNode44, gainNode45, gainNode46, gainNode47, gainNode48, gainNode49,
    gainNode50, gainNode51
];

let bassGain = audioCont.createGain();
let tenorGain = audioCont.createGain();
let altoGain = audioCont.createGain();
let sopranoGain = audioCont.createGain();

const pianoTrackArray = [];
const pianoExtendedC = [
    new Audio("sounds/gen-piano/gen-piano-D6.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Db6.mp3"),
    new Audio("sounds/gen-piano/gen-piano-C6.mp3"),
    new Audio("sounds/gen-piano/gen-piano-B5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Bb5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-A5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Ab5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-G5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Gb5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-F5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-E5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Eb5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-D5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Db5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-C5.mp3"),
    new Audio("sounds/gen-piano/gen-piano-B4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Bb4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-A4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Ab4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-G4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Gb4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-F4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-E4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Eb4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-D4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Db4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-C4.mp3"),
    new Audio("sounds/gen-piano/gen-piano-B3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Bb3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-A3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Ab3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-G3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Gb3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-F3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-E3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Eb3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-D3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Db3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-C3.mp3"),
    new Audio("sounds/gen-piano/gen-piano-B2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Bb2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-A2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Ab2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-G2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Gb2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-F2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-E2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Eb2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-D2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-Db2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-C2.mp3"),
    new Audio("sounds/gen-piano/gen-piano-B1.mp3"),
];
for (let i = 0; i < pianoExtendedC.length; i++) {
    pianoTrackArray.push(audioCont.createMediaElementSource(pianoExtendedC[i]));
};

function soundLoader() {
    for (let i = 0; i <= pianoExtendedC.length - 1; i++) {

        if (i > 32) { // F3 and below
            pianoTrackArray[i].connect(bassGain);
            bassGain.connect(audioCont.destination);
        } else if (i <= 32 && i > 23) { // Gb3 to D4
            pianoTrackArray[i].connect(tenorGain);
            tenorGain.connect(audioCont.destination);

        } else if (i <= 23 && i > 13) { // Eb4 to C5
            pianoTrackArray[i].connect(altoGain);
            altoGain.connect(audioCont.destination);
        } else if (i <= 13) { // C5 and above
            pianoTrackArray[i].connect(sopranoGain);
            sopranoGain.connect(audioCont.destination);
        }
        // webAudio track connect to destination


    }
}

soundLoader();

function testStop() {

    bassGain.gain.setValueAtTime(1, audioCont.currentTime);
    bassGain.gain.exponentialRampToValueAtTime(0.0001, audioCont.currentTime + 0.01);
}

function testStart() {
    bassGain.gain.setValueAtTime(1, audioCont.currentTime);
}

let currentBass = [];
let currentTenor = [];
let currentAlto = [];
let currentSoprano = [];


// webAudio function for noteSwitch
function playNote(i) {
    // check if context is in suspended state (autoplay policy)
    if (audioCont.state === 'suspended') {
        audioCont.resume();
    }

    let tempNum = 20; 

    if (i > 32) { // F3 and below
        stopVoice(bassGain, currentBass);
        currentBass.push(i);
        // bassGain.gain.setValueAtTime(1, audioCont.currentTime);
        // bassGain.gain.exponentialRampToValueAtTime(0.001, audioCont.currentTime + 0.005);
        setTimeout(() => {
            pianoExtendedC[i].play();
            bassGain.gain.exponentialRampToValueAtTime(1, audioCont.currentTime + 0.02);
        }, tempNum)

        // bassGain.gain.setValueAtTime(1, audioCont.currentTime + 0.008);

    } else if (i <= 32 && i > 23) { // Gb3 to D4
        stopVoice(tenorGain, currentTenor);
        currentTenor.push(i);

        // tenorGain.gain.setValueAtTime(1, audioCont.currentTime);
        // tenorGain.gain.exponentialRampToValueAtTime(0.0001, audioCont.currentTime + 0.005);
        setTimeout(() => {
            pianoExtendedC[i].play();
            tenorGain.gain.exponentialRampToValueAtTime(1, audioCont.currentTime + 0.02);
        }, tempNum)

        // tenorGain.gain.setValueAtTime(1, audioCont.currentTime + 0.008);
    } else if (i <= 23 && i > 13) { // Eb4 to C5
        stopVoice(altoGain, currentAlto);
        currentAlto.push(i);

        // altoGain.gain.setValueAtTime(1, audioCont.currentTime);
        // altoGain.gain.exponentialRampToValueAtTime(0.0001, audioCont.currentTime + 0.005);
        setTimeout(() => {
            pianoExtendedC[i].play();
            altoGain.gain.exponentialRampToValueAtTime(1, audioCont.currentTime + 0.02);
        }, tempNum)

        // altoGain.gain.setValueAtTime(1, audioCont.currentTime + 0.008);
    } else if (i <= 13) { // C5 and above
        stopVoice(sopranoGain, currentSoprano);
        currentSoprano.push(i);

        // sopranoGain.gain.setValueAtTime(1, audioCont.currentTime);
        // sopranoGain.gain.exponentialRampToValueAtTime(0.0001, audioCont.currentTime + 0.005);
        setTimeout(() => {
            pianoExtendedC[i].play();
            sopranoGain.gain.exponentialRampToValueAtTime(1, audioCont.currentTime + 0.02);
        }, tempNum)

        // sopranoGain.gain.setValueAtTime(1, audioCont.currentTime + 0.008);
    }


    // pianoExtendedC[i].play();
}

function noteSwitch(noteId) {

    switch (noteId) {

        case "D6":
            playNote(0, noteId);
            break;
        case "Db6":
            playNote(1, noteId);
            break;
        case "C6":
            playNote(2, noteId);
            break;
        case "B5":
            playNote(3, noteId);
            break;
        case "Bb5":
            playNote(4, noteId);
            break;
        case "A5":
            playNote(5, noteId);
            break;
        case "Ab5":
            playNote(6, noteId);
            break;
        case "G5":
            playNote(7, noteId);
            break;
        case "Gb5":
            playNote(8, noteId);
            break;
        case "F5":
            playNote(9, noteId);
            break;
        case "E5":
            playNote(10, noteId);
            break;
        case "Eb5":
            playNote(11, noteId);
            break;
        case "D5":
            playNote(12, noteId);
            break;
        case "Db5":
            playNote(13, noteId);
            break;
        case "C5":
            playNote(14, noteId);
            break;
        case "B4":
            playNote(15, noteId);
            break;
        case "Bb4":
            playNote(16, noteId);
            break;
        case "A4":
            playNote(17, noteId);
            break;
        case "Ab4":
            playNote(18, noteId);
            break;
        case "G4":
            playNote(19, noteId);
            break;
        case "Gb4":
            playNote(20, noteId);
            break;
        case "F4":
            playNote(21, noteId);
            break;
        case "E4":
            playNote(22, noteId);
            break;
        case "Eb4":
            playNote(23, noteId);
            break;
        case "D4":
            playNote(24, noteId);
            break;
        case "Db4":
            playNote(25, noteId);
            break;
        case "C4":
            playNote(26, noteId);
            break;
        case "B3":
            playNote(27, noteId);
            break;
        case "Bb3":
            playNote(28, noteId);
            break;
        case "A3":
            playNote(29, noteId);
            break;
        case "Ab3":
            playNote(30, noteId);
            break;
        case "G3":
            playNote(31, noteId);
            break;
        case "Gb3":
            playNote(32, noteId);
            break;
        case "F3":
            playNote(33, noteId);
            break;
        case "E3":
            playNote(34, noteId);
            break;
        case "Eb3":
            playNote(35, noteId);
            break;
        case "D3":
            playNote(36, noteId);
            break;
        case "Db3":
            playNote(37, noteId);
            break;
        case "C3":
            playNote(38, noteId);
            break;
        case "B2":
            playNote(39, noteId);
            break;
        case "Bb2":
            playNote(40, noteId);
            break;
        case "A2":
            playNote(41, noteId);
            break;
        case "Ab2":
            playNote(42, noteId);
            break;
        case "G2":
            playNote(43, noteId);
            break;
        case "Gb2":
            playNote(44, noteId);
            break;
        case "F2":
            playNote(45, noteId);
            break;
        case "E2":
            playNote(46, noteId);
            break;
        case "Eb2":
            playNote(47, noteId);
            break;
        case "D2":
            playNote(48, noteId);
            break;
        case "Db2":
            playNote(49, noteId);
            break;
        case "C2":
            playNote(50, noteId);
            break;
        case "B1":
            playNote(51, noteId);
            break;
        default:
            // console.log('Fin.')
    }
}

// END of document 