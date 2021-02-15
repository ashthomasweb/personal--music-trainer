//  Cadences and scale playback JS file for "Music Trainer"

function chord(a, b, c, d, e, f, g) {
    let args = Array.from(arguments);
    cadenceBool = true;
    args.forEach((item) => noteSwitch(item));
    cadenceBool = false;
}

function playScale() {

    if (modeChoice === "Major" || modeChoice === "Minor") {

        noteSwitch("C4");

        setTimeout(function () {
            noteSwitch("C5");
        }, 800);

        if (modeChoice === "Minor") {
            setTimeout(function () {
                noteSwitch("Bb4");
            }, 1500);
        } else {
            setTimeout(function () {
                noteSwitch("B4");
            }, 1500);
        }

        if (modeChoice === "Minor") {
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

        if (modeChoice === "Minor") {
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

        if (modeChoice === "Minor") {
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

        if (modeChoice === "Minor") {
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

    } else if (modeChoice === "Chromatic") {

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