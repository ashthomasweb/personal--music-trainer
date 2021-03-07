//  Cadences and scale playback JS file for "Music Trainer"

let sourceNoteIndex = ['C5', 'B4', 'Bb4', 'A4', 'Ab4', 'G4', 'Gb4', 'F4', 'E4', 'Eb4', 'D4', 'Db4', 'C4', 'B3', 'Bb3', 'A3', 'Ab3', 'G3', 'Gb3']

function chord(a, b, c, d, e, f, g) {
    stopChord();
    let args = Array.from(arguments);
    args.forEach((item) => {
        // console.log(item);
        // console.log(document.getElementsByClassName(item)[0]);
        // document.getElementsByClassName(item)[0].classList = "wrap " + item;
        let noteIndex = sourceNoteIndex.indexOf(item);
        currentChord.push(instrumentChoice[0][noteIndex]);
    });

    cadenceBool = true;
    args.forEach((item) => noteSwitch(item));
    cadenceBool = false;

}

function stopChord() {
    currentChord.forEach(item => {
        item.pause();
        item.currentTime = 0;
    });
    currentChord = [];
}

// Scale Playback

// function playScale() {

//     let availArray = chromIndex.filter(x => modeChoice[1].includes(x));
//     let startNote = availArray.indexOf('C4');
//     let lastNote = availArray[availArray.length - 1];

//     new Promise(function (resolve, reject) {
//         // ascending octave
//         noteSwitch('C4');

//         setTimeout(function () {
//             noteSwitch(lastNote);
//         }, 800);

//         setTimeout(() => resolve(), 800);

//     }).then(function (result) {
//         let index = 700;

//         // descending modular section loop in promise for varying scale length
//         for (let i = availArray.length - 2; i > startNote; i--) {
//             setTimeout(function () {
//                 noteSwitch(availArray[i]);
//             }, index);
//             index = index + 500;
//         }

//         // arpeggiate
//         for (let i = 0; i <= modeType.length - 1; i++) {
//             setTimeout(function () {
//                 noteSwitch(modeType[i]);
//             }, index);
//             index = index + 550;
//         }

//         // resolution
//         setTimeout(function () {
//             noteSwitch('C4');
//         }, index + 100);

//     });

// }


// END of document