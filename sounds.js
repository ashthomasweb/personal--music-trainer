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
    "sounds/piano/piano-C5.mp3"
]

let player1Sounds = pianoChromaticC;

let currentAudio;

function noteSwitch(sqId) {

    var sq1Sound = new Audio(player1Sounds[0]);
    var sq2Sound = new Audio(player1Sounds[1]);
    var sq3Sound = new Audio(player1Sounds[2]);
    var sq4Sound = new Audio(player1Sounds[3]);
    var sq5Sound = new Audio(player1Sounds[4]);
    var sq6Sound = new Audio(player1Sounds[5]);
    var sq7Sound = new Audio(player1Sounds[6]);
    var sq8Sound = new Audio(player1Sounds[7]);
    var sq9Sound = new Audio(player1Sounds[8]);
    var sq10Sound = new Audio(player1Sounds[9]);
    var sq11Sound = new Audio(player1Sounds[10]);
    var sq12Sound = new Audio(player1Sounds[11]);
    var sq13Sound = new Audio(player1Sounds[12]);

    switch (sqId) {
        case "sq1":
            sq1Sound.load();
            sq1Sound.play();
            currentAudio = sq1Sound;
            break;

        case "sq2":
            sq2Sound.load();
            sq2Sound.play();
            currentAudio = sq2Sound;
            break;

        case "sq3":
            sq3Sound.load();
            sq3Sound.play();
            currentAudio = sq3Sound;
            break;

        case "sq4":
            sq4Sound.load();
            sq4Sound.play();
            currentAudio = sq4Sound;
            break;

        case "sq5":
            sq5Sound.load();
            sq5Sound.play();
            currentAudio = sq5Sound;
            break;

        case "sq6":
            sq6Sound.load();
            sq6Sound.play();
            currentAudio = sq6Sound;
            break;

        case "sq7":
            sq7Sound.load();
            sq7Sound.play();
            currentAudio = sq7Sound;
            break;

        case "sq8":
            sq8Sound.load();
            sq8Sound.play();
            currentAudio = sq8Sound;
            break;

        case "sq9":
            sq9Sound.load();
            sq9Sound.play();
            currentAudio = sq9Sound;
            break;

        case "sq10":
            sq10Sound.load();
            sq10Sound.play();
            currentAudio = sq10Sound;
            break;

        case "sq11":
            sq11Sound.load();
            sq11Sound.play();
            currentAudio = sq11Sound;
            break;

        case "sq12":
            sq12Sound.load();
            sq12Sound.play();
            currentAudio = sq12Sound;
            break;

        case "sq13":
            sq13Sound.load();
            sq13Sound.play();
            currentAudio = sq13Sound;
            break;

        default:
    }
}



function playNote1() {
    noteSwitch("sq1");
}

function playNote2() {
    noteSwitch("sq2");
    // currentAudio.pause();
}

function playNote3() {
    noteSwitch("sq3");
}

function playNote4() {
    noteSwitch("sq4");
}

function playNote5() {
    noteSwitch("sq5");
}

function playNote6() {
    noteSwitch("sq6");
}

function playNote7() {
    noteSwitch("sq7");
}

function playNote8() {
    noteSwitch("sq8");
}

function playNote9() {
    noteSwitch("sq9");
}

function playNote10() {
    noteSwitch("sq10");
}

function playNote11() {
    noteSwitch("sq11");
}

function playNote12() {
    noteSwitch("sq12");
}

function playNote13() {
    noteSwitch("sq13");
}






function playScale() {
    noteSwitch("sq1");

    setTimeout(function () {
        noteSwitch("sq13");
    }, 800);

    if (scaleChoice === "minor") {
        setTimeout(function () {
            noteSwitch("sq11");
        }, 1500);
    } else {
        setTimeout(function () {
            noteSwitch("sq12");
        }, 1500);
    }

    if (scaleChoice === "minor") {
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

    if (scaleChoice === "minor") {
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

    if (scaleChoice === "minor") {
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

    if (scaleChoice === "minor") {
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

}

let modeArray = ["major", "minor", "chromatic"];
let scaleChoice = modeArray[0]
let n = 0;

function modeCycle() {
    if (n == modeArray.length - 1) {
        n = 0;
    } else {
        n++;
    }
    scaleChoice = modeArray[n++]
}