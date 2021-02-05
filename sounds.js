var pianoChromaticC = [
    "sounds/piano/piano-C4.mp3",
    "sounds/piano/piano-Db4.mp3",
    "sounds/piano/piano-D4.mp3",
    "sounds/piano/piano-Eb4.mp3",
    "sounds/piano/piano-E4.mp3",
    "sounds/piano/piano-F4.mp3",
    "sounds/piano/piano-Gb4.mp3",
    "sounds/piano/piano-G4.mp3",
    "sounds/piano/piano-Ab4.mp3",
    "sounds/piano/piano-A4.mp3",
    "sounds/piano/piano-Bb4.mp3",
    "sounds/piano/piano-B4.mp3",
    "sounds/piano/piano-C5.mp3",
    "sounds/piano/piano-C5.mp3",
    "Piano"
]

var frenchHornChromaticC = [
    "sounds/french-horn/french-horn-C4.mp3",
    "sounds/french-horn/french-horn-Db4.mp3",
    "sounds/french-horn/french-horn-D4.mp3",
    "sounds/french-horn/french-horn-Eb4.mp3",
    "sounds/french-horn/french-horn-E4.mp3",
    "sounds/french-horn/french-horn-F4.mp3",
    "sounds/french-horn/french-horn-Gb4.mp3",
    "sounds/french-horn/french-horn-G4.mp3",
    "sounds/french-horn/french-horn-Ab4.mp3",
    "sounds/french-horn/french-horn-A4.mp3",
    "sounds/french-horn/french-horn-Bb4.mp3",
    "sounds/french-horn/french-horn-B4.mp3",
    "sounds/french-horn/french-horn-C5.mp3",
    "sounds/french-horn/french-horn-C5.mp3",
    "French Horn"
]

var violinChromaticC = [
    "sounds/violin/violin-C4.mp3",
    "sounds/violin/violin-Db4.mp3",
    "sounds/violin/violin-D4.mp3",
    "sounds/violin/violin-Eb4.mp3",
    "sounds/violin/violin-E4.mp3",
    "sounds/violin/violin-F4.mp3",
    "sounds/violin/violin-Gb4.mp3",
    "sounds/violin/violin-G4.mp3",
    "sounds/violin/violin-Ab4.mp3",
    "sounds/violin/violin-A4.mp3",
    "sounds/violin/violin-Bb4.mp3",
    "sounds/violin/violin-B4.mp3",
    "sounds/violin/violin-C5.mp3",
    "sounds/violin/violin-C5.mp3",
    "Violin"
]




function noteSwitch(sqId) {
        var sq1Sound = new Audio(instrumentChoice[0]);
        var sq2Sound = new Audio(instrumentChoice[1]);
        var sq3Sound = new Audio(instrumentChoice[2]);
        var sq4Sound = new Audio(instrumentChoice[3]);
        var sq5Sound = new Audio(instrumentChoice[4]);
        var sq6Sound = new Audio(instrumentChoice[5]);
        var sq7Sound = new Audio(instrumentChoice[6]);
        var sq8Sound = new Audio(instrumentChoice[7]);
        var sq9Sound = new Audio(instrumentChoice[8]);
        var sq10Sound = new Audio(instrumentChoice[9]);
        var sq11Sound = new Audio(instrumentChoice[10]);
        var sq12Sound = new Audio(instrumentChoice[11]);
        var sq13Sound = new Audio(instrumentChoice[12]);
        
    
        sq1Sound.preload = "auto";
        sq2Sound.preload = "auto";
    
        sq3Sound.preload = "auto";
    
        sq4Sound.preload = "auto";
        sq5Sound.preload = "auto";
        sq6Sound.preload = "auto";
        sq7Sound.preload = "auto";
        sq8Sound.preload = "auto";
        sq9Sound.preload = "auto";
        sq10Sound.preload = "auto";
        sq11Sound.preload = "auto";
        sq12Sound.preload = "auto";
        sq13Sound.preload = "auto";
    



    switch (sqId) {
        case "sq1":
            sq1Sound.play();
            break;

        case "sq2":
            sq2Sound.play();
            break;

        case "sq3":
            sq3Sound.play();
            break;

        case "sq4":
            sq4Sound.play();
            break;

        case "sq5":
            sq5Sound.play();
            break;

        case "sq6":
            sq6Sound.play();
            break;

        case "sq7":
            sq7Sound.play();
            break;

        case "sq8":
            sq8Sound.play();
            break;

        case "sq9":
            sq9Sound.play();
            break;

        case "sq10":
            sq10Sound.play();
            break;

        case "sq11":
            sq11Sound.play();
            break;

        case "sq12":
            sq12Sound.play();
            break;

        case "sq13":
            sq13Sound.play();
            break;

        default:
    }
}


function playScale() {

    if (modeChoice === "Major" || modeChoice === "Minor") {

        noteSwitch("sq1");

        setTimeout(function () {
            noteSwitch("sq13");
        }, 800);

        if (modeChoice === "Minor") {
            setTimeout(function () {
                noteSwitch("sq11");
            }, 1500);
        } else {
            setTimeout(function () {
                noteSwitch("sq12");
            }, 1500);
        }

        if (modeChoice === "Minor") {
            setTimeout(function () {
                noteSwitch("sq9");
            }, 2000);
        } else {
            setTimeout(function () {
                noteSwitch("sq10");
            }, 2000);
        }

        setTimeout(function () {
            noteSwitch("sq8");
        }, 2500);

        setTimeout(function () {
            noteSwitch("sq6");
        }, 3000);

        if (modeChoice === "Minor") {
            setTimeout(function () {
                noteSwitch("sq4");
            }, 3500);
        } else {
            setTimeout(function () {
                noteSwitch("sq5");
            }, 3500);
        }

        setTimeout(function () {
            noteSwitch("sq3");
        }, 4000);

        setTimeout(function () {
            noteSwitch("sq1");
        }, 4500);

        if (modeChoice === "Minor") {
            setTimeout(function () {
                noteSwitch("sq4");
            }, 5050);
        } else {
            setTimeout(function () {
                noteSwitch("sq5");
            }, 5050);
        }

        setTimeout(function () {
            noteSwitch("sq8");
        }, 5625);

        if (modeChoice === "Minor") {
            setTimeout(function () {
                noteSwitch("sq4");
            }, 6200);
        } else {
            setTimeout(function () {
                noteSwitch("sq5");
            }, 6200);
        }

        setTimeout(function () {
            noteSwitch("sq1");
        }, 7000);

    } else if (modeChoice === "Chromatic") {

        noteSwitch("sq1");

        setTimeout(function () {
            noteSwitch("sq13");
        }, 700);

        setTimeout(function () {
            noteSwitch("sq8");
        }, 1400);

        setTimeout(function () {
            noteSwitch("sq6");
        }, 2000);

        setTimeout(function () {
            noteSwitch("sq1");
        }, 2600);

        setTimeout(function () {
            noteSwitch("sq6");
        }, 3200);

        setTimeout(function () {
            noteSwitch("sq8");
        }, 3800);

        setTimeout(function () {
            noteSwitch("sq6");
        }, 4450);

        setTimeout(function () {
            noteSwitch("sq1");
        }, 5100);

    }

}


// END of document