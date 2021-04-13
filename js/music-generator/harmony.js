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
let numeralOne = 'I';
let numeralFour = 'IV';
let numeralFive = 'V';
let numeralSix = 'vi';

function getKeyMode() {
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

function getKeyCenter() {
    // let chance = Math.floor(Math.random() * 3);
    // if (chance === 0) {
    //     keyNumerals = keyOfC;
    // } else if (chance === 1) {
    //     keyNumerals = keyOfF;
    // } else {
    //     keyNumerals = keyOfG;
    // }
    // let chance = genChance(3);
    switch(generateChance(3)) {
        case 1: keyNumerals = keyOfC; break;
        case 2: keyNumerals = keyOfF; break;
        case 3: keyNumerals = keyOfG;
        default: break;
    }
}

function switchHarmonicMode() {
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

    // let primaryTempo;

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
        // apply cadence
        let cadenceChance = generateChance(2);
        if (cadenceChance === 1) {
            progression[progression.length - 3] = numeralOne;
            progression[progression.length - 2] = numeralFive;
            progression[progression.length - 1] = numeralSix;
            tempCadenceType = 'Deceptive';
        }
        if (cadenceChance === 2) {
            progression[progression.length - 2] = numeralOne;
            progression[progression.length - 1] = numeralFive;
            tempCadenceType = 'Half';
        }
        storePlaybackData();
    // third 4 bar phrase
    } else if (section === 2) {
        info.formId = formNum + ':B';
        getNewProgression(motionUpFourth(progression[progression.length - 1]), cadenceType[(Math.floor(Math.random() * 2)) + 2]);
        info.tempo = getCloselyRelatedTempo(phraseContainer[(formNum - 1) * 4][0].tempo);
        storePlaybackData();
    // last 4 bar phrase
    } else if (section === 3) {
        info.formId = formNum + ':A';
        info.tempo = phraseContainer[(formNum - 1) * 4][0].tempo;
        // get 'A' section progression and apply cadence
        progression = [...phraseContainer[(formNum - 1) * 4][0].progression];
        progression[progression.length - 1] = numeralOne;
        progression[progression.length - 2] = numeralFive;
        tempCadenceType = 'Authentic';
        storePlaybackData();
    }
}

function concatKeyInfo() {
    let center;
    if (keyNumerals === keyOfC) {
        center = 'C';
    } else if (keyNumerals === keyOfF) {
        center = 'F';
    } else {
        center = 'G';
    }

    let quality;
    if (currentHarmony === major) {
        quality = ' major';
    } else {
        quality = ' minor';
    }

    return center + quality;
}

let progression = [];

const generateProgressionLength = () => Math.ceil(Math.random() * 5) + 2;



function getNewProgression(start, cadence) {
    tempCadenceType = cadence;

    function getInitialProgression() {
        for (let index = 1; index <= generateProgressionLength() - 1; index++) {
            progression[index] = generateStrongMotion(progression[index - 1]);
        }
        // THIS is where I can add raised harmonies
        if (currentHarmony === minor) {

            progression.forEach((item, i) => {
                switch(item) {

                  case "ii∅":
                    if (generateChance(2) === 1) {
                        progression[i] = 'ii∅';
                    } else {
                        progression[i] = 'ii';
                    }
                    break;

                  case "iv":
                    if (generateChance(2) === 1) {
                        progression[i] = 'iv';
                    } else {
                        progression[i] = 'IV7';
                    }
                    break;

                  case "bVI":
                    if (generateChance(2) === 1) {
                        progression[i] = 'bVI';
                    } else {
                        progression[i] = 'vi∅'
                    }
                    break;

                  case "bVII":
                    if (generateChance(2) === 1) {
                        progression[i] = 'bVII';
                    } else {
                        progression[i] = 'vii°';
                    }

                  default: break;

                }

            });
        }
    }


    progression = [];
    progression[0] = start;
    getInitialProgression();

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
    let num = Math.floor(Math.random() * 6);
    if (num === 0) {
        return motionUpSecond(x);
    }
    if (num === 1) {
        let chance = Math.floor(Math.random() * 3);
        if (chance === 0) {
            return motionStatic(x);
        } else if (chance === 1) {
            return motionUpSecond(x);
        } else if (chance === 2) {
            return motionDownThird(x);
        }
    }
    if (num === 2) {
        return motionStatic(x);
    }
    if (num === 3) {
        return motionAnyToHome(x);
    }
    if (num >= 4) {
        return motionUpFourth(x);
    }
}

function motionUpSecond(x) {
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

function motionDownThird(x) {
    let startPosition = currentHarmony.indexOf(x);
    let finishPosition;
    if (startPosition === 0) {
        finishPosition = 5;
    } else if (startPosition === 1) {
        finishPosition = 6;
    } else if (startPosition === 4) {
        if (Math.floor(Math.random * 2) === 0) {
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
    if (x === 'i') {
        return currentHarmony[Math.ceil(Math.random() * 6)];
    } else {
        return currentHarmony[0];
    }
}

// function to ensure progression moves into cadential figure with strong motion
function checkIfStrong(chord, resolution) {
    switch(resolution) {
      case motionUpSecond(chord): return true;
      case motionDownThird(chord): return true;
      case motionUpFourth(chord): return true;
      case motionStatic(chord): return true;
      case motionAnyToHome(chord): return true;
      default: return false;
    }
}

// END of document


// SCRATCH

// half dim glyph ∅  ♭  °
// const chance = (factor) =>  Math.ceil(Math.random() * factor);
