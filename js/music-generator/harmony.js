// Harmonic Generator for "Music Trainer"

let progLength;

// let majorHarmony = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'];
let majorHarmony = ['i', 'iidim', 'bIII', 'iv', 'V', 'bVI', 'bVII'];

let cadenceType = ['Authentic', 'Plagal', 'Deceptive', 'Half'];

function upSecond(x) {
    let startPosition = majorHarmony.indexOf(x);
    let finishPosition;
    if (startPosition === 6) {
        finishPosition = 0;
    } else {
        startPosition++;
        finishPosition = startPosition;
    }
    return majorHarmony[finishPosition];
}

function downThird(x) {
    let startPosition = majorHarmony.indexOf(x);
    let finishPosition;
    if (startPosition === 0) {
        finishPosition = 5;
    } else if (startPosition === 1) {
        finishPosition = 6;
    } else if (startPosition === 4) {
        if (Math.floor(Math.random * 2) === 0) {
            return upSecond(x);
        } else {
            return upFourth(x)
        }
    } else {
        startPosition = startPosition - 2;
        finishPosition = startPosition;
    }
    return majorHarmony[finishPosition];
}

function upFourth(x) {
    let startPosition = majorHarmony.indexOf(x);
    let finishPosition;
    if (startPosition === 6) {
        finishPosition = 2;
    } else if (startPosition === 5) {
        finishPosition = 1;
    } else if (startPosition === 4) {
        finishPosition = 0;
    } else {
        startPosition = startPosition + 3;
        finishPosition = startPosition;
    }
    return majorHarmony[finishPosition];
}

function staticMotion(x) {
    return majorHarmony[majorHarmony.indexOf(x)];
}

function anyToHome(x) {
    if (x === 'i') {
        return majorHarmony[Math.ceil(Math.random() * 6)];
    } else {
        return majorHarmony[0];
    }
}

// function to ensure progression moves into cadential figure with strong motion 
function checkIsStrong(chord, resolution) {
    if (upSecond(chord) === resolution) {
        return true;
    } else if (downThird(chord) === resolution) {
        return true;
    } else if (upFourth(chord) === resolution) {
        return true;
    } else if (staticMotion(chord) === resolution) {
        return true;
    } else if (anyToHome(chord) === resolution) {
        return true;
    } else {
        return false;
    }
}

function strongMotion(x) {
    let num = Math.floor(Math.random() * 6);
    if (num === 0) {
        return upSecond(x);
    }
    if (num === 1) {
        return downThird(x);
    }
    if (num === 2) {
        return staticMotion(x);
    }
    if (num === 3) {
        return anyToHome(x);
    }
    if (num >= 4) {
        return upFourth(x);
    }
}

let progression = [];

function getProgression(start, cadence) {
    progression = [...progression];
    let i = progLength - 1;

    function startGeneration() {
        for (let i = 1; i <= progLength - 1; i++) {
            progression[i] = strongMotion(progression[i - 1]);
        }
    }

    progression[0] = start;
    startGeneration();

    if (cadence === cadenceType[0]) {
        progression[i] = 'i';
        progression[i - 1] = 'V';
    }
    if (cadence === cadenceType[1]) {
        progression[i] = 'i';
        progression[i - 1] = 'iv';
    }
    if (cadence === cadenceType[2]) {
        progression[i] = 'bVI';
        progression[i - 1] = 'V';
    }
    if (cadence === cadenceType[3]) {
        progression[i] = 'V';
    }

    if (cadence === 'Plagal') {
        for (let index = 1; index <= progression.length - 2; index++) {
            if (checkIsStrong(progression[index - 1], progression[index]) === false) {
                return getProgression(start, cadence);
            }
        }
    } else {
        for (let index = 1; index <= progression.length - 1; index++) {
            if (checkIsStrong(progression[index - 1], progression[index]) === false) {
                return getProgression(start, cadence);
            }
        }
    }

    return progression;
}


let phraseUnit = [];
let builtPhrase = [];
let phraseContainer = [];

// form construction
function buildForm(input) {
    for (let i = 0; i < input; i++) {

        for (let ii = 0; ii < 4; ii++) {
            if (ii === 0) {
                buildUnit(0, i + 1);
                getStartTones();
            }
            if (ii === 1) {
                buildUnit(1, i + 1);
                getStartTones();

            }
            if (ii === 2) {
                buildUnit(2, i + 1);
                getStartTones();

            }
            if (ii === 3) {
                buildUnit(3, i + 1);
                getStartTones();
            }
        }


    }
    playFromArray();
}



// gets phrase length
function getPhraseUnit() {
    phraseUnit = [
        [
            ['section'],
            ['progression']
        ],
        [
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            []
        ]
    ];

    return phraseUnit;
}

function sequenceHarmony(input) {
    for (let ii = 1; ii < input; ii++) {
        progression.forEach((item, i, progression) => {
            if (majorHarmony.indexOf(item) === majorHarmony.length - 1) {
                progression[i] = majorHarmony[0];
            } else {
                progression[i] = majorHarmony[majorHarmony.indexOf(item) + 1];
            }
        });
    }
}


// calls all builder helper functions and provides data for playback via phraseContainer
function buildUnit(section, formNum) {
    // gets empty phrase
    builtPhrase = getPhraseUnit();
    // gets progression and generates harmonic rhythm
    harmonicUnit(section, formNum);
    // push to container for play handling
    phraseContainer.push(builtPhrase);
}

// makes a base unit of chords
function harmonicUnit(section, formNum) {

    // harmonic rhythm handler
    function harmonicRhythm() {
        builtPhrase[1][0].push(progression[0]);
        builtPhrase[1][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
        builtPhrase[2][0].push(progression[2]);
        builtPhrase[2][Math.floor((Math.random() * 2) + 2)].push(progression[3]);
        builtPhrase[3][0].push(progression[4]);
        builtPhrase[3][Math.floor((Math.random() * 2) + 2)].push(progression[5]);
        builtPhrase[4][0].push(progression[6]);
    }

    progLength = 7;
    if (section === 0) {
        let chance = Math.ceil(Math.random() * 6)

        getProgression(majorHarmony[chance], cadenceType[(Math.floor(Math.random() * 3)) + 1]);
        harmonicRhythm();
        builtPhrase[0][1] = [...progression];
        builtPhrase[0][0] = formNum + ':A';

    } else if (section === 1) {
        let chance = Math.ceil(Math.random() * 2);

        if (chance === 1) {
            progression[progression.length - 1] = 'bVI';
            progression[progression.length - 2] = 'V';
        }
        if (chance === 2) {
            progression[progression.length - 1] = 'V';
        }

        chance = Math.ceil(Math.random() * 15);
        if ( chance <= 8 ) {
            sequenceHarmony(chance);
        } else if ( chance > 8 ) {
            sequenceHarmony(4)
        }
        
        harmonicRhythm();
        builtPhrase[0][0] = formNum + ':A1';
        builtPhrase[0][1] = [...progression];

    } else if (section === 2) {
        let chance = Math.ceil(Math.random() * 6)
        getProgression(upFourth(progression[progression.length - 1]), cadenceType[(Math.floor(Math.random() * 2)) + 2]);
        harmonicRhythm();

        builtPhrase[0][0] = formNum + ':B';
        builtPhrase[0][1] = [...progression];
    } else if (section === 3) {
        progression = [...phraseContainer[formNum - 1][0][1]];
        progression[progression.length - 1] = 'i';
        progression[progression.length - 2] = 'V';
        harmonicRhythm();
        builtPhrase[0][0] = formNum + ':A';
        builtPhrase[0][1] = [...progression];
    }
}



// // harmonic sequencing
// function harmonicSequence() {   

// }

// END of document 