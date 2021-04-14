// Harmonic Generator for "Music Trainer"

let major = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii∅'];
let minor = ['i', 'ii∅', 'bIII', 'iv', 'V', 'bVI', 'bVII'];
const testChance = (factor, addend = 0) => Math.ceil(Math.random() * factor) + addend;
const generateChance = (factor, addend = 0) => Math.ceil(Math.random() * factor) + addend;

// gets phrase length
function getPhraseUnit() {

    phraseUnit = {
        info: {
            formId: "",
            progression: "",
            progressionLength: "",
            voiceLeading: [],
            prevFinalVoicing: [],
            key: "",
            tempo: "",
        },
        measure1: [
            [],
            [],
            [],
            []
        ],
        measure2: [
            [],
            [],
            [],
            []
        ],
        measure3: [
            [],
            [],
            [],
            []
        ],
        measure4: [
            [],
            [],
            [],
            []
        ]
    };

    return phraseUnit;
}

let currentHarmony = major;
let romanNumOne = 'I';
let romanNumFour = 'IV';
let romanNumFive = 'V';
let romanNumSix = 'vi';

function getKeyMode() {
    let modeChance = generateChance(2);
    if (modeChance === 1) {
        currentHarmony = minor;
        romanNumOne = 'i';
        romanNumFour = 'iv';
        romanNumSix = 'bVI';
    } else if (modeChance === 2) {
        currentHarmony = major;
        romanNumOne = 'I';
        romanNumFour = 'IV';
        romanNumSix = 'vi';
    }
}

function getKeyCenter() {

    switch (generateChance(3)) {
        case 1:
            keyNumerals = keyOfC;
            break;
        case 2:
            keyNumerals = keyOfF;
            break;
        case 3:
            keyNumerals = keyOfG;
        default:
            break;
    }
}

function switchHarmonicMode() {
    if (currentHarmony === major) {
        currentHarmony = minor;
        romanNumOne = 'i';
        romanNumFour = 'iv';
        romanNumSix = 'bVI';
    } else {
        currentHarmony = major;
        romanNumOne = 'I';
        romanNumFour = 'IV';
        romanNumSix = 'vi';
    }
}

let cadenceType = ['Authentic', 'Plagal', 'Deceptive', 'Half'];
let phraseUnit = [];
let phraseContainer = [];
let firstHarmonicArea;

// form construction
function buildForm(numberOfRepeats) {
    for (let i = 0; i < numberOfRepeats; i++) {
        // THIS is where I can change options on a 16 measure basis
        for (let ii = 0; ii < 4; ii++) {
            if (ii === 0) {
                getKeyMode();
                getKeyCenter();
                createPhraseChart(0, i + 1); // builds phrasing array, harmonic progression, and harmonic rhythm
                voiceLeadHandler(); // voice-leads progression
            }
            if (ii === 1) {
                createPhraseChart(1, i + 1);
                voiceLeadHandler();
            }
            if (ii === 2) {
                switchHarmonicMode();
                createPhraseChart(2, i + 1);
                voiceLeadHandler();
            }
            if (ii === 3) {
                switchHarmonicMode();
                createPhraseChart(3, i + 1);
                voiceLeadHandler();
            }
        }
    }
    playPhraseChart();
}

// calls all builder helper functions and provides data for playback via phraseContainer
function createPhraseChart(section, formNum) {
    // gets empty phrase
    phraseUnit = getPhraseUnit();
    // gets progression and generates harmonic rhythm
    createHarmonicUnit(section, formNum);

    // convert and push to container for play handling
    let phraseUnitArray = Object.values(phraseUnit);
    phraseContainer.push(phraseUnitArray);
}

// makes a base unit of chords
function createHarmonicUnit(section, formNum) {
    // parent array
    let info = phraseUnit.info;

    function concatKeyInfo() {
        if (keyNumerals === keyOfC) {
            center = 'C'
        } else if (keyNumerals === keyOfF) {
            center = 'F'
        } else {
            center = 'G'
        }
        currentHarmony === major ? mode = 'major' : mode = 'minor';
        return center + ' ' + mode;
    }

    function cadenceHandler(section, progression) {
        if (section === 1) { // second 'A'
            let cadenceChance = generateChance(2);
            if (cadenceChance === 1) {
                cadenceValue = 'Deceptive';
                progression[progression.length - 1] = romanNumSix;
                progression[progression.length - 2] = romanNumFive;
                progression[progression.length - 3] = romanNumOne;
            }
            if (cadenceChance === 2) {
                cadenceValue = 'Half';
                progression[progression.length - 1] = romanNumFive;
                progression[progression.length - 2] = romanNumOne;
            }
        }
        if (section === 3) { // final 'A'
            cadenceValue = 'Authentic';
            progression[progression.length - 1] = romanNumOne;
            progression[progression.length - 2] = romanNumFive;
        }
    }

    // send musical data to phraseChart
    function storePlaybackData() {
        applyHarmonicRhythm(); // reference /harm-rhythm.js
        savePrevFinalVoicing();
        info.progression = [...progression];
        info.progressionLength = progression.length;
        info.key = concatKeyInfo();
    }

    // first 4 bar phrase
    if (section === 0) {
        info.formId = formNum + ':A';
        info.tempo = getNewTempo();
        // generate new progression, any starting point, never Authentic cadence
        getNewProgression(currentHarmony[generateChance(6, 1) - 1], cadenceType[generateChance(3, 1) - 1]);
        storePlaybackData();
        // second 4 bar phrase
    } else if (section === 1) {
        info.formId = formNum + ':A1';
        info.tempo = phraseContainer[(formNum - 1) * 4][0].tempo;
        // sequence by stongest motion most often
        let sequenceChance = generateChance(20);
        if (sequenceChance <= 8) {
            harmonicDiatonicSequencer(generateChance(8));
        } else if (sequenceChance > 8) {
            harmonicDiatonicSequencer(4);
        }
        cadenceHandler(section, progression);
        storePlaybackData();
        // third 4 bar phrase
    } else if (section === 2) {
        info.formId = formNum + ':B';
        getNewProgression(motionUpFourth(progression[progression.length - 1]), cadenceType[generateChance(2, 2) - 1]);
        info.tempo = getCloselyRelatedTempo(phraseContainer[(formNum - 1) * 4][0].tempo);
        storePlaybackData();
        // last 4 bar phrase
    } else if (section === 3) {
        info.formId = formNum + ':A';
        info.tempo = phraseContainer[(formNum - 1) * 4][0].tempo;
        // get 'A' section progression and apply cadence
        progression = [...phraseContainer[(formNum - 1) * 4][0].progression];
        cadenceHandler(section, progression);
        storePlaybackData();
    }
}

let progression = [];

const generateProgressionLength = () => generateChance(5, 2);

function getNewProgression(start, cadence) {
    cadenceValue = cadence;

    function generateInitialHarmonies() {
        for (let index = 1; index <= generateProgressionLength() - 1; index++) {
            progression[index] = generateStrongMotion(progression[index - 1]);
        }
        // THIS is where I can add raised harmonies
        if (currentHarmony === minor) {

            progression.forEach((item, i) => {
                switch (item) {
                    case "ii∅":
                        generateChance(2) === 1 ? progression[i] = 'ii∅' : progression[i] = 'ii';
                        break;
                    case "iv":
                        generateChance(2) === 1 ? progression[i] = 'iv' : progression[i] = 'IV7';
                        break;
                    case "bVI":
                        generateChance(2) === 1 ? progression[i] = 'bVI' : progression[i] = 'vi∅';
                        break;
                    case "bVII":
                        generateChance(2) === 1 ? progression[i] = 'bVII' : progression[i] = 'vii°';
                    default:
                        break;
                }
            });
        }
    }

    function assignNewCadence() {
        let i = progression.length - 1;
        switch (cadence) {
            case 'Authentic':
                progression[i] = romanNumOne;
                progression[i - 1] = romanNumFive;
                break;
            case 'Plagal':
                progression[i] = romanNumOne;
                progression[i - 1] = romanNumFour;
                break;
            case 'Deceptive':
                progression[i] = romanNumSix;
                progression[i - 1] = romanNumFive;
                break;
            case 'Half':
                progression[i] = romanNumFive;
            default:
                break;
        }
    }

    function checkForStrongMotion() {
        if (cadence === 'Plagal') {
            for (let index = 1; index <= progression.length - 2; index++) {
                if (checkIfStrong(progression[index - 1], progression[index]) === false) {
                    return getNewProgression(start, cadence);
                }
            }
        } else {
            for (let index = 1; index <= progression.length - 1; index++) {
                if (checkIfStrong(progression[index - 1], progression[index]) === false) {
                    return getNewProgression(start, cadence);
                }
            }
        }
    }

    progression = [];
    progression[0] = start;
    generateInitialHarmonies();
    assignNewCadence();
    checkForStrongMotion();
    return progression;
}

function harmonicDiatonicSequencer(degreesUp) {
    for (let ii = 1; ii < degreesUp; ii++) {
        progression.forEach((item, i, progression) => {
            if (currentHarmony.indexOf(item) === currentHarmony.length - 1) {
                progression[i] = currentHarmony[0];
            } else {
                progression[i] = currentHarmony[currentHarmony.indexOf(item) + 1];
            }
        });
    }
}

function generateStrongMotion(x) {
    switch (generateChance(7)) {
        case 1:
            return motionUpSecond(x);
        case 2:
            switch (generateChance(3)) {
                case 1:
                    return motionStatic(x);
                case 2:
                    return motionUpSecond(x);
                case 3:
                    return motionDownThird(x);
            }
        case 3:
            return motionStatic(x);
        case 4:
            return motionAnyToHome(x);
        default:
            return motionUpFourth(x);
    }
}

function motionUpSecond(x) {
    let startPosition = currentHarmony.indexOf(x);
    let finishPosition;
    // conditional statement converting array indexes to base7
    if (startPosition === 6) {
        finishPosition = 0;
    } else {
        startPosition++;
        finishPosition = startPosition;
    }
    return currentHarmony[finishPosition];
}

function motionDownThird(x) {
    let startPosition = currentHarmony.indexOf(x);
    let finishPosition;
    // conditional statement converting array indexes to base7
    if (startPosition === 0) {
        finishPosition = 5;
    } else if (startPosition === 1) {
        finishPosition = 6;
    } else if (startPosition === 4) { // prevents motion down a third from V
        if (generateChance(2) === 1) {
            return motionUpSecond(x);
        } else {
            return motionUpFourth(x)
        }
    } else {
        startPosition = startPosition - 2;
        finishPosition = startPosition;
    }
    return currentHarmony[finishPosition];
}

function motionUpFourth(x) {
    let startPosition = currentHarmony.indexOf(x);
    let finishPosition;
    // conditional statement converting array indexes to base7
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

function motionStatic(x) {
    return currentHarmony[currentHarmony.indexOf(x)];
}

function motionAnyToHome(x) {
    if (x === 'i' || x === 'I') {
        return currentHarmony[generateChance(6)];
    } else {
        return currentHarmony[0];
    }
}

// function to ensure progression moves into cadential figure with strong motion
function checkIfStrong(chord, resolution) {
    switch (resolution) {
        case motionUpSecond(chord):
            return true;
        case motionDownThird(chord):
            return true;
        case motionUpFourth(chord):
            return true;
        case motionStatic(chord):
            return true;
        case motionAnyToHome(chord):
            return true;
        default:
            return false;
    }
}

// END of document


// SCRATCH

// half dim glyph ∅  ♭  °
// const chance = (factor) =>  Math.ceil(Math.random() * factor);