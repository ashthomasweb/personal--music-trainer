//  Cadences and scale playback JS file for "Music Trainer"

let sourceNoteIndex = ['C5', 'B4', 'Bb4', 'A4', 'Ab4', 'G4', 'Gb4', 'F4', 'E4', 'Eb4', 'D4', 'Db4', 'C4', 'B3', 'Bb3', 'A3', 'Ab3', 'G3', 'Gb3']

function chord(a, b, c, d, e, f, g) {
    stopChord();
    let args = Array.from(arguments);
    args.forEach((item) => {
        let noteIndex = sourceNoteIndex.indexOf(item);
        currentChord.push(instrumentChoice[0][noteIndex]);
    });

    cadenceBool = true;
    args.forEach((item) => noteSwitch(item));
    cadenceBool = false;

}

function stopChord() {
    currentChord.forEach( item => {
        item.pause();
        item.currentTime = 0;
    });
    currentChord = [];
}

function playScale() {

    if (modeChoice[0] === "Major" || modeChoice[0] === "Minor") {

        noteSwitch("C4");

        setTimeout(function () {
            noteSwitch("C5");
        }, 800);

        if (modeChoice[0] === "Minor") {
            setTimeout(function () {
                noteSwitch("Bb4");
            }, 1500);
        } else {
            setTimeout(function () {
                noteSwitch("B4");
            }, 1500);
        }

        if (modeChoice[0] === "Minor") {
            setTimeout(function () {
                noteSwitch("Ab4");
            }, 2000);
        } else {
            setTimeout(function () {
                noteSwitch("A4");
            }, 2000);
        }

        setTimeout(function () {
            noteSwitch("G4");
        }, 2500);

        setTimeout(function () {
            noteSwitch("F4");
        }, 3000);

        if (modeChoice[0] === "Minor") {
            setTimeout(function () {
                noteSwitch("Eb4");
            }, 3500);
        } else {
            setTimeout(function () {
                noteSwitch("E4");
            }, 3500);
        }

        setTimeout(function () {
            noteSwitch("D4");
        }, 4000);

        setTimeout(function () {
            noteSwitch("C4");
        }, 4500);

        if (modeChoice[0] === "Minor") {
            setTimeout(function () {
                noteSwitch("Eb4");
            }, 5050);
        } else {
            setTimeout(function () {
                noteSwitch("E4");
            }, 5050);
        }

        setTimeout(function () {
            noteSwitch("G4");
        }, 5600);

        if (modeChoice[0] === "Minor") {
            setTimeout(function () {
                noteSwitch("Eb4");
            }, 6150);
        } else {
            setTimeout(function () {
                noteSwitch("E4");
            }, 6150);
        }

        setTimeout(function () {
            noteSwitch("C4");
        }, 6750);

        setTimeout(function () {
            noteSwitch("G3");
        }, 7350);

        setTimeout(function () {
            noteSwitch("C4");
        }, 8000);


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