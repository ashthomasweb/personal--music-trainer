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

// build basic harmonic unit

// assign authentic cadence

// copy it with small variation and new cadence and perhaps new voice leading

// create alternate material !authentic cadence both harmonic and phrasing

// repeat first A section with authentic cadence

// transition to BPrime as new A

// rinse repeat


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

        // progression = [...progression]
    }
    playFromArray();
}

// calls all builder helper functions and provides data for playback via phraseContainer
function buildUnit(section, formNum) {
    builtPhrase = getPhraseUnit();

    harmonicUnit(section, formNum);

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
        let chance = Math.ceil(Math.random() * 2)

        if (chance === 1) {
            progression[progression.length - 1] = 'bVI';
            progression[progression.length - 2] = 'V';
            // progression[progression.length - 3] = 'I';
        }
        if (chance === 2) {
            progression[progression.length - 1] = 'V';
        }

        // let sequence = [...progression];
        // sequence.forEach((item, i) => {
        //     if ( i === 6 ) {
        //         item = majorHarmony[0]
        //     } else {
        //         item = majorHarmony.indexOf(item) + 1;
        //     }
        // });
        harmonicRhythm();

        builtPhrase[0][0] = formNum + ':A1';
        builtPhrase[0][1] = [...progression];
    } else if (section === 2) {
        let chance = Math.ceil(Math.random() * 6)
        getProgression(majorHarmony[chance], cadenceType[(Math.floor(Math.random() * 2)) + 2]);
        harmonicRhythm();

        builtPhrase[0][0] = formNum + ':B';
        builtPhrase[0][1] = [...progression];
    } else if (section === 3) {
        // Probable cause of undefined variables in array
        progression = [...phraseContainer[formNum - 1][0][1]];
        progression[progression.length - 1] = 'i';
        progression[progression.length - 2] = 'V';
        harmonicRhythm();

        builtPhrase[0][0] = formNum + ':A';
        builtPhrase[0][1] = [...progression];
        // builtPhrase[0][2] = phraseContainer[formNum - 1][0][2];

    }
}

// // cadence handler
// function cadenceHandler(section) {
//     // return anything but Authentic
//     if (section === 0) {
//         return cadenceType[(Math.ceil(Math.random() * 3)) + 1]
//     }
//     if (section === 1) {
//         // do nothing
//     }
//     if (section === 2) {
//         return cadenceType[(Math.ceil(Math.random() * 3)) + 1]
//     }
//     if (section === 3) {
//         // do nothing
//         // add transition to new section
//     }

// }

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



// // construct harmonic variations
// function harmonicVariation() {

// }

// // harmonic sequencing
// function harmonicSequence() {   

// }

// END of document 