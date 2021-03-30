// Harmonic Generator for "Music Trainer"


let progLength;

let major = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'viiHalfDim'];
let minor = ['i', 'iiHalfDim', 'bIII', 'iv', 'V', 'bVI', 'bVII'];



// let minorRaised = ['imM6', 'ii', 'bIII', 'IVMm7', 'V', 'viHalfDim', 'viiFullDim'];

// let minor = [function1, function2, function3, function4, function5, function6, function7]

// function function1() {
//     return 'i'
// }

// function function2() {
//     let chance = Math.ceil(Math.random() * 2);
//     if ( chance === 0 ) {
//         return 'iiHalfDim';
//     } else {
//         return 'ii'
//     }
// }

// function function3() {
//     return 'i'
// }

// function function4() {
//     let chance = Math.ceil(Math.random() * 2);
//     if ( chance === 0 ) {
//         return 'iv';
//     } else {
//         return 'IVMm7'
//     }
// }

// function function5() {
//     return 'i'
// }

// function function6() {
//     let chance = Math.ceil(Math.random() * 2);
//     if ( chance === 0 ) {
//         return 'bVI';
//     } else {
//         return 'viHalfDim'
//     }
// }

// function function7() {
//     let chance = Math.ceil(Math.random() * 2);

//     if ( chance === 0 ) {
//         return 'bVII';
//     } else {
//         return 'viiFullDim'
//     }
// }

let currentHarmony = major;
let numeralOne = 'I';
let numeralFour = 'IV';
let numeralSix = 'vi';


function harmonyPicker() {
    let chance = Math.ceil(Math.random() * 2);

    if (chance === 0) {
        currentHarmony = minor;
        numeralOne = 'i';
        numeralFour = 'iv';
        numeralSix = 'bVI';
    } else {
        currentHarmony = major;
        numeralOne = 'I';
        numeralFour = 'IV';
        numeralSix = 'vi';
    }
}

function harmonySwitcher() {
    if (currentHarmony === major) {

        currentHarmony = minor;
        numeralOne = 'i';
        numeralFour = 'iv';
        numeralSix = 'bVI';

    } else {
        // console.log('minor');
        currentHarmony = major;
        numeralOne = 'I';
        numeralFour = 'IV';
        numeralSix = 'vi';
    }
}

let cadenceType = ['Authentic', 'Plagal', 'Deceptive', 'Half'];

let phraseUnit = [];
let builtPhrase = [];
let phraseContainer = [];
let firstHarmonicArea;

// form construction
function buildForm(input) {
    for (let i = 0; i < input; i++) {
        // THIS is where I can change options on a 16 measure basis
        harmonyPicker();
        keyPicker();
        for (let ii = 0; ii < 4; ii++) {
            if (ii === 0) {
                buildUnit(0, i + 1); // builds phrasing array, harmonic progression, and harmonic rhythm
                getStartTones(); // voice-leads progression

            }
            if (ii === 1) {
                buildUnit(1, i + 1);
                getStartTones();
            }
            if (ii === 2) {
                harmonySwitcher();
                buildUnit(2, i + 1);
                getStartTones();
            }
            if (ii === 3) {
                harmonySwitcher();

                buildUnit(3, i + 1);
                getStartTones();
                // console.log('end');
            }
        }
    }
    playFromArray();
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

// makes a base unit of chords
function harmonicUnit(section, formNum) {

    

    // harmonic rhythm handler
    function harmonicRhythm() {
        if ( progLength === 5 ) {
            let chance = Math.ceil(Math.random() * 3);
            if (chance === 1 ) {
                builtPhrase[1][0].push(progression[0]);
                builtPhrase[2][0].push(progression[1]);
                builtPhrase[3][0].push(progression[2]);
                builtPhrase[3][Math.floor((Math.random() * 2) + 2)].push(progression[3]);
                builtPhrase[4][0].push(progression[4]);
            } else if ( chance === 2 ) {
                builtPhrase[1][0].push(progression[0]);
                builtPhrase[1][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
                builtPhrase[2][0].push(progression[2]);
                builtPhrase[3][0].push(progression[3]);
                builtPhrase[4][0].push(progression[4]);
            } else if ( chance === 3 ) {
                builtPhrase[1][0].push(progression[0]);
                builtPhrase[2][0].push(progression[1]);
                builtPhrase[2][Math.floor((Math.random() * 2) + 2)].push(progression[2]);
                builtPhrase[3][0].push(progression[3]);
                builtPhrase[4][0].push(progression[4]);
            }
        }
        if ( progLength === 6 ) {
            let chance = Math.ceil(Math.random() * 3);
            if (chance === 1 ) {
                builtPhrase[1][0].push(progression[0]);
                builtPhrase[2][0].push(progression[1]);
                builtPhrase[2][Math.floor((Math.random() * 2) + 2)].push(progression[2]);
                builtPhrase[3][0].push(progression[3]);
                builtPhrase[3][Math.floor((Math.random() * 2) + 2)].push(progression[4]);
                builtPhrase[4][0].push(progression[5]);
            } else if ( chance === 2 ) {
                builtPhrase[1][0].push(progression[0]);
                builtPhrase[1][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
                builtPhrase[2][0].push(progression[2]);
                builtPhrase[3][0].push(progression[3]);
                builtPhrase[3][Math.floor((Math.random() * 2) + 2)].push(progression[4]);
                builtPhrase[4][0].push(progression[5]);
            } else if ( chance === 3 ) {
                builtPhrase[1][0].push(progression[0]);
                builtPhrase[1][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
                builtPhrase[2][0].push(progression[2]);
                builtPhrase[2][Math.floor((Math.random() * 2) + 2)].push(progression[3]);
                builtPhrase[3][0].push(progression[4]);
                builtPhrase[4][0].push(progression[5]);
            }
        }
        if ( progLength === 7 ) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[1][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
            builtPhrase[2][0].push(progression[2]);
            builtPhrase[2][Math.floor((Math.random() * 2) + 2)].push(progression[3]);
            builtPhrase[3][0].push(progression[4]);
            builtPhrase[3][Math.floor((Math.random() * 2) + 2)].push(progression[5]);
            builtPhrase[4][0].push(progression[6]);
        }
    }

    progLength = 5;
    if (section === 0) {
        let chance = Math.ceil(Math.random() * 6)

        getProgression(currentHarmony[chance], cadenceType[(Math.floor(Math.random() * 3)) + 1]);
        harmonicRhythm();
        builtPhrase[0][1] = [...progression];
        builtPhrase[0][0] = formNum + ':A';
        // console.log(progression);
    } else if (section === 1) {
        let chance = Math.ceil(Math.random() * 15);
        // sequence by stongest motion most often
        if (chance <= 8) {
            sequenceHarmony(chance);
        } else if (chance > 8) {
            sequenceHarmony(4)
        }


        chance = Math.ceil(Math.random() * 2);
        if (chance === 1) {
            progression[progression.length - 1] = numeralSix;
            progression[progression.length - 2] = 'V';
            progression[progression.length - 3] = numeralOne;
        }
        if (chance === 2) {
            progression[progression.length - 1] = 'V';
            progression[progression.length - 3] = numeralOne;
        }
        harmonicRhythm();
        builtPhrase[0][0] = formNum + ':A1';
        builtPhrase[0][1] = [...progression];
        // console.log(progression);
    } else if (section === 2) {
        let chance = Math.ceil(Math.random() * 6)
        getProgression(upFourth(progression[progression.length - 1]), cadenceType[(Math.floor(Math.random() * 2)) + 2]);
        harmonicRhythm();
        builtPhrase[0][0] = formNum + ':B';
        builtPhrase[0][1] = [...progression];
        // console.log(progression);
    } else if (section === 3) {
        progression = [];
        progression = [...phraseContainer[(formNum - 1) * 4][0][1]];
        progression[progression.length - 1] = numeralOne;
        progression[progression.length - 2] = 'V';
        harmonicRhythm();
        builtPhrase[0][0] = formNum + ':A';
        builtPhrase[0][1] = [...progression];
        // console.log(progression);
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
        // THIS is where I can add raised harmonies
        if (currentHarmony === minor) {

            progression.forEach((item, i) => {
                let chance = Math.ceil(Math.random() * 2);
                if (item === 'ii') {
                    if (chance === 0) {
                        progression[i] = 'iiHalfDim';
                    } else {
                        progression[i] = 'ii';
                    }
                }

                if (item === 'iv') {
                    chance = Math.ceil(Math.random() * 2);
                    if (chance === 0) {
                        progression[i] = 'iv';
                    } else {
                        progression[i] = 'IVMm7';
                    }
                }

                if (item === 'bVI') {
                    chance = Math.ceil(Math.random() * 2);
                    if (chance === 0) {
                        progression[i] = 'bVI';
                    } else {
                        progression[i] = 'viHalfDim'
                    }
                }

                if (item === 'bVII') {
                    chance = Math.ceil(Math.random() * 2);
                    if (chance === 0) {
                        progression[i] = 'bVII';
                    } else {
                        progression[i] = 'viiFullDim'
                    }
                }
            });
        }
    }

    progression[0] = start;
    startGeneration();

    if (cadence === cadenceType[0]) {
        progression[i] = numeralOne;
        progression[i - 1] = 'V';
    }
    if (cadence === cadenceType[1]) {
        progression[i] = numeralOne;
        progression[i - 1] = numeralFour;
    }
    if (cadence === cadenceType[2]) {
        progression[i] = numeralSix;
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

function sequenceHarmony(input) {
    for (let ii = 1; ii < input; ii++) {
        progression.forEach((item, i, progression) => {
            if (currentHarmony.indexOf(item) === currentHarmony.length - 1) {
                progression[i] = currentHarmony[0];
            } else {
                progression[i] = currentHarmony[currentHarmony.indexOf(item) + 1];
            }
        });
    }
}

function strongMotion(x) {
    let num = Math.floor(Math.random() * 6);
    if (num === 0) {
        return upSecond(x);
    }
    if (num === 1) {
        let chance = Math.floor(Math.random() * 3);
        if (chance === 0) {
            return staticMotion(x);
        } else if (chance === 1) {
            return upSecond(x);
        } else if (chance === 2) {
            return downThird(x);
        }
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

function upSecond(x) {
    let startPosition = currentHarmony.indexOf(x);
    let finishPosition;
    if (startPosition === 6) {
        finishPosition = 0;
    } else {
        startPosition++;
        finishPosition = startPosition;
    }
    return currentHarmony[finishPosition];
}

function downThird(x) {
    let startPosition = currentHarmony.indexOf(x);
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
    return currentHarmony[finishPosition];
}

function upFourth(x) {
    let startPosition = currentHarmony.indexOf(x);
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
    return currentHarmony[finishPosition];
}

function staticMotion(x) {
    return currentHarmony[currentHarmony.indexOf(x)];
}

function anyToHome(x) {
    if (x === 'i') {
        return currentHarmony[Math.ceil(Math.random() * 6)];
    } else {
        return currentHarmony[0];
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

// END of document 