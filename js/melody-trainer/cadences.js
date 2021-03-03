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




// playback from root


// end with tonic triad


function playScale() {

    let availArray = chromIndex.filter(x => modeChoice[1].includes(x));
    let majTri = ['C4', 'E4', 'G4', 'E4', 'C4', 'G3'];
    let minTri = ['C4', 'Eb4', 'G4', 'Eb4', 'C4', 'G3'];
    let dimTri = ['C4', 'Eb4', 'Gb4', 'Eb4', 'C4', 'Gb3'];
    let augTri = ['C4', 'E4', 'Ab4', 'E4', 'C4', 'Ab3'];
    let startNote = availArray.indexOf('C4');
    let lastNote = availArray[availArray.length - 1];



    if (modeChoice[0] !== 'Chromatic') {

        new Promise(function (resolve, reject) {

            // ascending octave
            noteSwitch('C4');

            setTimeout(function () {
                noteSwitch(lastNote);
            }, 800);

            setTimeout(() => resolve(), 800);

        }).then(function (result) {
            let index = 700;
            let number = (availArray.length - 2) - startNote;
            console.log(number);

            // descending modular section loop in promise for varying scale length
            for (let i = availArray.length - 2; i > startNote; i--) {

                setTimeout(function () {
                    noteSwitch(availArray[i]);
                }, index);

                index = index + 500;

            }
            // begin arpeggios 
            if (modeType === 'major') {
                for (let i = 0; i <= majTri.length - 1; i++) {

                    setTimeout(function () {
                        noteSwitch(majTri[i]);
                    }, index);

                    index = index + 550;
                }
            }

            if (modeType === 'minor') {
                for (let i = 0; i <= minTri.length - 1; i++) {

                    setTimeout(function () {
                        noteSwitch(minTri[i]);
                    }, index);

                    index = index + 550;
                }
            }
            if (modeType === 'diminished') {
                for (let i = 0; i <= dimTri.length - 1; i++) {

                    setTimeout(function () {
                        noteSwitch(dimTri[i]);
                    }, index);

                    index = index + 550;
                }
            }
            if (modeType === 'augmented') {
                for (let i = 0; i <= augTri.length - 1; i++) {

                    setTimeout(function () {
                        noteSwitch(augTri[i]);
                    }, index);

                    index = index + 550;
                }
            }


            setTimeout(function () {
                noteSwitch('C4');
            }, index + 100);

        });

    } else if (modeChoice[0] === "Chromatic") {

        noteSwitch("C4");

        setTimeout(function () {
            noteSwitch("C5");
        }, 700);

        setTimeout(function () {
            noteSwitch("G4");
        }, 1400);

        setTimeout(function () {
            noteSwitch("F4");
        }, 2000);

        setTimeout(function () {
            noteSwitch("C4");
        }, 2600);

        setTimeout(function () {
            noteSwitch("F4");
        }, 3200);

        setTimeout(function () {
            noteSwitch("G4");
        }, 3800);

        setTimeout(function () {
            noteSwitch("G3");
        }, 4450);

        setTimeout(function () {
            noteSwitch("C4");
        }, 5100);

    }


}


// END of document