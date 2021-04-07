// Harmonic Generator for "Music Trainer"

let major = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii∅'];
let minor = ['i', 'ii∅', 'bIII', 'iv', 'V', 'bVI', 'bVII'];

let currentHarmony = major;
let numeralOne = 'I';
let numeralFour = 'IV';
let numeralSix = 'vi';

function harmonyPicker() {
    let chance = Math.ceil(Math.random() * 2);

    if (chance === 1) {
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
        for (let ii = 0; ii < 4; ii++) {
            if (ii === 0) {
                harmonyPicker();
                keyPicker();
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
            ['progression'],
            ['progression length'],
            ['voice-leading'],
            ['prev-final-voicing']
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

// phraseUnit = {
//     info: [
//         ['section'],
//         ['progression'],
//         ['voice-lead']
//     ],
//     measure1: [
//         [],
//         [],
//         [],
//         []
//     ],
//     measure2: [
//         [],
//         [],
//         [],
//         []
//     ],
//     measure3:[
//         [],
//         [],
//         [],
//         []
//     ],
//     measure4: [
//         [],
//         [],
//         [],
//         []
//     ]
// };
//
// const array = Object.values(phraseUnit)
// half dim glyph ∅  ♭  °

const harmonyNum = () => Math.ceil(Math.random() * 5) + 2;
// const chance = (factor) =>  Math.ceil(Math.random() * factor);

// makes a base unit of chords
function harmonicUnit(section, formNum) {

    if (section === 0) {
        let chance = Math.ceil(Math.random() * 6);
        getProgression(currentHarmony[chance], cadenceType[(Math.floor(Math.random() * 3)) + 1]);
        applyHarmonicRhythm();

        // refactor example
        // builtPhrase.info[1] = [...progression];
        // refactor example

        builtPhrase[0][0] = formNum + ':A';
        builtPhrase[0][1] = [...progression];
        builtPhrase[0][2] = [progression.length];
        builtPhrase[0][5] = [displayKeyInArray()];
        builtPhrase[0][6] = [getTempo()];
        getFinalVoicing();
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

        builtPhrase[0][6] = [...phraseContainer[(formNum - 1) * 4][0][6]];
        
        applyHarmonicRhythm();
        builtPhrase[0][0] = formNum + ':A1';
        builtPhrase[0][1] = [...progression];
        builtPhrase[0][2] = [progression.length];
        builtPhrase[0][5] = [displayKeyInArray()];
        getFinalVoicing();
    } else if (section === 2) {
        getProgression(upFourth(progression[progression.length - 1]), cadenceType[(Math.floor(Math.random() * 2)) + 2]);
        applyHarmonicRhythm();
        builtPhrase[0][0] = formNum + ':B';
        builtPhrase[0][1] = [...progression];
        builtPhrase[0][2] = [progression.length];
        builtPhrase[0][5] = [displayKeyInArray()];
        builtPhrase[0][6] = [getBSectionTempo(phraseContainer[(formNum - 1) * 4][0][6][0])];
        getFinalVoicing();
    } else if (section === 3) {
        progression = [];
        progression = [...phraseContainer[(formNum - 1) * 4][0][1]];
        builtPhrase[0][6] = [...phraseContainer[(formNum - 1) * 4][0][6]];
        progression[progression.length - 1] = numeralOne;
        progression[progression.length - 2] = 'V';
        applyHarmonicRhythm();
        builtPhrase[0][0] = formNum + ':A';
        builtPhrase[0][1] = [...progression];
        builtPhrase[0][2] = [progression.length];
        builtPhrase[0][5] = [displayKeyInArray()];
        getFinalVoicing();
    }
}

function displayKeyInArray() {
    let center;
    if (keyNumerals === keyOfC ) {
        center = 'C';
    } else if ( keyNumerals === keyOfF ) {
        center = 'F';
    } else {
        center = 'G';
    }

    let quality;
    if (currentHarmony === major ) {
        quality = ' major';
    } else {
        quality = ' minor';
    }

    return center + quality;
}

let progression = [];

function getProgression(start, cadence) {
    function startGeneration() {
        for (let index = 1; index <= harmonyNum() - 1; index++) {
            progression[index] = strongMotion(progression[index - 1]);
        }
        // THIS is where I can add raised harmonies
        if (currentHarmony === minor) {

            progression.forEach((item, i) => {
                let chance = Math.ceil(Math.random() * 2);
                if (item === 'ii') {
                    if (chance === 0) {
                        progression[i] = 'ii∅';
                    } else {
                        progression[i] = 'ii';
                    }
                }

                if (item === 'iv') {
                    chance = Math.ceil(Math.random() * 2);
                    if (chance === 0) {
                        progression[i] = 'iv';
                    } else {
                        progression[i] = 'IV7';
                    }
                }

                if (item === 'bVI') {
                    chance = Math.ceil(Math.random() * 2);
                    if (chance === 0) {
                        progression[i] = 'bVI';
                    } else {
                        progression[i] = 'vi∅'
                    }
                }

                if (item === 'bVII') {
                    chance = Math.ceil(Math.random() * 2);
                    if (chance === 0) {
                        progression[i] = 'bVII';
                    } else {
                        progression[i] = 'vii°'
                    }
                }
            });
        }
    }
    progression = [];
    progression[0] = start;
    startGeneration();

    let i = progression.length - 1;

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