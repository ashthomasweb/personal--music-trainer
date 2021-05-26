// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

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

const pianoTrackArray = [];
for (let i = 0; i < pianoExtendedC.length; i++) {
    pianoTrackArray.push(audioContext.createMediaElementSource(pianoExtendedC[i]));
};

let bassGain = audioContext.createGain();
let tenorGain = audioContext.createGain();
let altoGain = audioContext.createGain();
let sopranoGain = audioContext.createGain();

function satbNodeConnector() {
    for (let i = 0; i <= pianoExtendedC.length - 1; i++) {
        if (i >= 33) { // F3 and below
            pianoTrackArray[i].connect(bassGain);
            bassGain.connect(audioContext.destination);
        } else if (i <= 32 && i >= 24) { // Gb3 to D4
            pianoTrackArray[i].connect(tenorGain);
            tenorGain.connect(audioContext.destination);
        } else if (i <= 23 && i >= 15) { // Eb4 to B4
            pianoTrackArray[i].connect(altoGain);
            altoGain.connect(audioContext.destination);
        } else if (i <= 14) { // C5 and above
            pianoTrackArray[i].connect(sopranoGain);
            sopranoGain.connect(audioContext.destination);
        }
    }
}
satbNodeConnector();

let currentBass = [];
let currentTenor = [];
let currentAlto = [];
let currentSoprano = [];

function stopVoice(voiceGain, currentVoice) {
    if (currentVoice === []) {
        // do nothing 
    } else {
        currentVoice.forEach(item => {
            new Promise(function (resolve, reject) {
                voiceGain.gain.setValueAtTime(1, audioContext.currentTime);
                voiceGain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.01);
                setTimeout(() => {
                    resolve();
                }, 10)
            }).then(() => {
                pianoExtendedC[item].pause();
                pianoExtendedC[item].currentTime = 0;
            });
        });
        if (voiceGain === bassGain) {
            currentBass = [];
        }
        if (voiceGain === tenorGain) {
            currentTenor = [];
        }
        if (voiceGain === altoGain) {
            currentAlto = [];
        }
        if (voiceGain === sopranoGain) {
            currentSoprano = [];
        }
    }
}

// webAudio function for noteSwitch
function playHandler(i) {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    if (i >= 33) { // F3 and below
        stopVoice(bassGain, currentBass);
        currentBass.push(i);
        setTimeout(() => {
            pianoExtendedC[i].play();
            bassGain.gain.exponentialRampToValueAtTime(1.35, audioContext.currentTime + 0.02);
        }, 20)
    } else if (i <= 32 && i >= 24) { // Gb3 to D4
        stopVoice(tenorGain, currentTenor);
        currentTenor.push(i);
        setTimeout(() => {
            pianoExtendedC[i].play();
            tenorGain.gain.exponentialRampToValueAtTime(.9, audioContext.currentTime + 0.02);
        }, 20)
    } else if (i <= 23 && i >= 15) { // Eb4 to B4
        stopVoice(altoGain, currentAlto);
        currentAlto.push(i);
        setTimeout(() => {
            pianoExtendedC[i].play();
            altoGain.gain.exponentialRampToValueAtTime(.9, audioContext.currentTime + 0.02);
        }, 20)
    } else if (i <= 14) { // C5 and above
        stopVoice(sopranoGain, currentSoprano);
        currentSoprano.push(i);
        setTimeout(() => {
            pianoExtendedC[i].play();
            sopranoGain.gain.exponentialRampToValueAtTime(1, audioContext.currentTime + 0.02);
        }, 20)
    }
}

function noteSwitch(noteId) {

    switch (noteId) {

        case "D6":
            playHandler(0);
            break;
        case "Db6":
            playHandler(1);
            break;
        case "C6":
            playHandler(2);
            break;
        case "B5":
            playHandler(3);
            break;
        case "Bb5":
            playHandler(4);
            break;
        case "A5":
            playHandler(5);
            break;
        case "Ab5":
            playHandler(6);
            break;
        case "G5":
            playHandler(7);
            break;
        case "Gb5":
            playHandler(8);
            break;
        case "F5":
            playHandler(9);
            break;
        case "E5":
            playHandler(10);
            break;
        case "Eb5":
            playHandler(11);
            break;
        case "D5":
            playHandler(12);
            break;
        case "Db5":
            playHandler(13);
            break;
        case "C5":
            playHandler(14);
            break;
        case "B4":
            playHandler(15);
            break;
        case "Bb4":
            playHandler(16);
            break;
        case "A4":
            playHandler(17);
            break;
        case "Ab4":
            playHandler(18);
            break;
        case "G4":
            playHandler(19);
            break;
        case "Gb4":
            playHandler(20);
            break;
        case "F4":
            playHandler(21);
            break;
        case "E4":
            playHandler(22);
            break;
        case "Eb4":
            playHandler(23);
            break;
        case "D4":
            playHandler(24);
            break;
        case "Db4":
            playHandler(25);
            break;
        case "C4":
            playHandler(26);
            break;
        case "B3":
            playHandler(27);
            break;
        case "Bb3":
            playHandler(28);
            break;
        case "A3":
            playHandler(29);
            break;
        case "Ab3":
            playHandler(30);
            break;
        case "G3":
            playHandler(31);
            break;
        case "Gb3":
            playHandler(32);
            break;
        case "F3":
            playHandler(33);
            break;
        case "E3":
            playHandler(34);
            break;
        case "Eb3":
            playHandler(35);
            break;
        case "D3":
            playHandler(36);
            break;
        case "Db3":
            playHandler(37);
            break;
        case "C3":
            playHandler(38);
            break;
        case "B2":
            playHandler(39);
            break;
        case "Bb2":
            playHandler(40);
            break;
        case "A2":
            playHandler(41);
            break;
        case "Ab2":
            playHandler(42);
            break;
        case "G2":
            playHandler(43);
            break;
        case "Gb2":
            playHandler(44);
            break;
        case "F2":
            playHandler(45);
            break;
        case "E2":
            playHandler(46);
            break;
        case "Eb2":
            playHandler(47);
            break;
        case "D2":
            playHandler(48);
            break;
        case "Db2":
            playHandler(49);
            break;
        case "C2":
            playHandler(50);
            break;
        case "B1":
            playHandler(51);
            break;
        default:
            console.log('Fin.');
            break;
    }
}

// END of document 