
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