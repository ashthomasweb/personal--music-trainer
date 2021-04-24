// Harmonic Generator for "Music Trainer"

let major = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii∅'];
let minor = ['i', 'ii∅', 'bIII', 'iv', 'V', 'bVI', 'bVII'];
let cadenceType = ['Authentic', 'Plagal', 'Deceptive', 'Half'];

const generateChance = (factor, addend = 0) => Math.ceil(Math.random() * factor) + addend;

// gets phrase length
function getEmptyChart() {

    phraseChart = {
        info: {
            formId: "",
            progression: "",
            progressionLength: "",
            cadence: "",
            voiceLeading: [],
            prevFinalVoicing: [],
            prevFinalChord: '',
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

    return phraseChart;
}

let keyCenterConBool = false;
let keyCenterOption;
// control variables
let startingChordConBool = false;
let startingChordOption;
let typeOfCadenceConBool = false;
let typeOfCadenceOption;
let keyModeConBool = false;
let keyModeOption;
let numOfRepeatsConBool = false;
let numOfRepeatsOption;

let persistStateConBool = false;
let persistStateOption;
let numOfChordsConBool = false;
let numOfChordsOption;

function getKeyCenter() {
    keyCenterConVar = keyCenterOption
    if (keyCenterConBool === true) {
        keyNumerals = keyCenterConVar;
    } else {
        switch (generateChance(4)) {
            case 1:
                keyNumerals = keyOfC;
                break;
            case 2:
                keyNumerals = keyOfF;
                break;
            case 3:
                keyNumerals = keyOfG;
                break;
            case 4:
                keyNumerals = keyOfD;
            default:
                break;
        }
    }
}


let currentHarmony = major;
let romanNumOne;
let romanNumFour;
let romanNumFive;
let romanNumSix;



function getKeyMode() {
    if (keyModeConBool === true) {
        if (keyModeOption === major) {
            keyModeConVar = 2;
        } else if (keyModeOption === minor ) {
            keyModeConVar = 1;
        } else {
            keyModeConVar = generateChance(2);
        }
    } else {
        keyModeConVar = generateChance(2);
    }

    if (keyModeConVar === 1) {
        currentHarmony = minor;
        romanNumOne = 'i';
        romanNumFour = 'iv';
        romanNumFive = 'V';
        romanNumSix = 'bVI';
    } else if (keyModeConVar === 2) {
        currentHarmony = major;
        romanNumOne = 'I';
        romanNumFour = 'IV';
        romanNumFive = 'V';
        romanNumSix = 'vi';
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

// form construction

function buildDoublePeriod() {
    if (numOfRepeatsConBool === true) {
        numOfRepeatsConVar = numOfRepeatsOption;
    } else {
        numOfRepeatsConVar = 10;
    }
    
    for (let i = 0; i < numOfRepeatsConVar; i++) {
        // THIS is where I can change options on a 16 measure basis
        for (let section = 0; section <= 3; section++) {
            if (section === 0) {
                getKeyMode();
                getKeyCenter();
                createPhraseChart(0, i + 1); // builds phrasing array, harmonic progression, and harmonic rhythm
                voiceLeadHandler(section); // voice-leads progression
            }
            if (section === 1) {
                createPhraseChart(1, i + 1);
                voiceLeadHandler(section);
            }
            if (section === 2) {
                switchHarmonicMode();
                createPhraseChart(2, i + 1);
                voiceLeadHandler(section);
            }
            if (section === 3) {
                switchHarmonicMode();
                createPhraseChart(3, i + 1);
                voiceLeadHandler(section);
            }
        }
        let persistStateConVar;
        if (persistStateConBool === true) {
            persistStateConVar = persistStateOption;
        }

        if (persistStateConVar === false || persistStateConVar === undefined) {
            if (i === 0) {
                turnControlOff();
            }
        } else {
            if (i === 0) {
                // controlOff(); // do nothing
            }
        }
        // turnControlOff();
    }
    playPhraseChart();
}

// calls all builder helper functions and provides data for playback via phraseContainer
let phraseChart;
let phraseContainer = [];

function createPhraseChart(section, formNum) {
    // gets progression, gets empty chart, generates harmonic rhythm
    createHarmonicUnit(section, formNum, getEmptyChart());
    // convert and push to container for play handling
    let phraseChartArray = Object.values(phraseChart);
    phraseContainer.push(phraseChartArray);
}


// makes a base unit of chords
function createHarmonicUnit(section, formNum, phraseChart) {
    let {
        info
    } = phraseChart;

    // data helper arrays
    function concatKeyInfo() {

        switch (keyNumerals) {
            case keyOfC:
                center = 'C'
                break;
            case keyOfG:
                center = 'G'
                break;
            case keyOfF:
                center = 'F'
                break;
            case keyOfD:
                center = 'D'
            default:
                break;
        }
        currentHarmony === major ? mode = 'major' : mode = 'minor';
        return center + ' ' + mode;
    }

    function cadenceHandler(section) {
        // assigning progression to a variable causes function to fail, do not refactor
        if (section === 1) { // second 'A'
            if (generateChance(2) === 1) {
                cadenceValue = 'Deceptive';
                progression[progression.length - 1] = romanNumSix;
                progression[progression.length - 2] = romanNumFive;
                progression[progression.length - 3] = romanNumOne;
            } else {
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

    function savePrevFinalVoicing() {
        let voiceArray = [bassVoiceArray, tenorVoiceArray, altoVoiceArray, sopranoVoiceArray];
        voiceArray.forEach((item) => {
            info.prevFinalVoicing.push(item[item.length - 1]);
        });
    }

    // send musical data to phraseChart
    function storePlaybackData() {
        applyHarmonicRhythm(); // reference /harm-rhythm.js
        savePrevFinalVoicing();
        info.progression = [...progression];
        info.progressionLength = progression.length;
        info.key = concatKeyInfo();
        info.cadence = cadenceValue;
    }

    function getNewTempo() {
        return generateChance(150, 250);
    }

    function getCloselyRelatedTempo(input) {
        let amountChange = generateChance(70, 80);
        if (generateChance(2) === 1) {
            return input + amountChange;
        } else {
            return input - amountChange;
        }
    }

    if (startingChordConBool === true) {
        startingChordConVar = startingChordOption;
    } else {
        startingChordConVar = 1;
    }

    if (typeOfCadenceConBool === true) {
        typeOfCadenceConVar = typeOfCadenceOption;
    } else {
        typeOfCadenceConVar = generateChance(3, 1);
    }

    // first 4 bar phrase
    if (section === 0) {
        info.formId = formNum + ':A';
        info.tempo = getNewTempo();
        // generate new progression, any starting point, never Authentic cadence
        getNewProgression(currentHarmony[startingChordConVar - 1], cadenceType[typeOfCadenceConVar - 1], section);
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
        cadenceHandler(section);
        storePlaybackData();
        // third 4 bar phrase
    } else if (section === 2) {
        info.formId = formNum + ':B';
        getNewProgression(motionUpFourth(progression[progression.length - 1]), cadenceType[generateChance(2, 2) - 1], section);
        info.tempo = getCloselyRelatedTempo(phraseContainer[(formNum - 1) * 4][0].tempo);
        storePlaybackData();
        // last 4 bar phrase
    } else if (section === 3) {
        info.formId = formNum + ':A - Final';
        info.tempo = phraseContainer[(formNum - 1) * 4][0].tempo;
        // get 'A' section progression and apply cadence
        progression = [...phraseContainer[(formNum - 1) * 4][0].progression];
        cadenceHandler(section);
        storePlaybackData();
    }
}

let progression = [];



function getNewProgression(start, cadence, section) {
    let numOfChordsConVar; // control variable from /control.js as set in global object 'options'

    // 'cadenceValue' is a iterated data store variable used in /voice-leading.js
    cadenceValue = cadence;

    if (numOfChordsConBool === true && section === 0) {
        numOfChordsConVar = numOfChordsOption;
    } else {
        numOfChordsConVar = generateChance(5, 2);
    }

    function generateInitialHarmonies() {
        for (let i = 1; i <= numOfChordsConVar - 1; i++) {
            progression[i] = generateStrongMotion(progression[i - 1]);
        }
        // THIS is where I can add raised harmonies
        if (currentHarmony === minor) {

            progression.forEach((item, j) => {
                switch (item) {
                    case "ii∅":
                        generateChance(2) === 1 ? progression[j] = 'ii∅' : progression[j] = 'ii';
                        break;
                    case "iv":
                        generateChance(2) === 1 ? progression[j] = 'iv' : progression[j] = 'IV7';
                        break;
                    case "bVI":
                        generateChance(2) === 1 ? progression[j] = 'bVI' : progression[j] = 'vi∅';
                        break;
                    case "bVII":
                        generateChance(2) === 1 ? progression[j] = 'bVII' : progression[j] = 'vii°';
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
            for (let i = 1; i <= progression.length - 2; i++) {
                if (checkIfStrong(progression[i - 1], progression[i]) === false) {
                    return getNewProgression(start, cadence, section);
                }
            }
        } else {
            for (let i = 1; i <= progression.length - 1; i++) {
                if (checkIfStrong(progression[i - 1], progression[i]) === false) {
                    console.log('Do not pass go, do not collect $200.');
                    return getNewProgression(start, cadence, section);
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
    for (let i = 1; i < degreesUp; i++) {
        progression.forEach((item, j, progression) => {
            if (currentHarmony.indexOf(item) === currentHarmony.length - 1) {
                progression[j] = currentHarmony[0];
            } else {
                progression[j] = currentHarmony[currentHarmony.indexOf(item) + 1];
            }
        });
    }
}

function generateStrongMotion(chord) {
    switch (generateChance(7)) {
        case 1:
            return motionUpSecond(chord);
        case 2:
            switch (generateChance(3)) {
                case 1:
                    return motionStatic(chord);
                case 2:
                    return motionUpSecond(chord);
                case 3:
                    return motionDownThird(chord);
            }
            case 3:
                return motionStatic(chord);
            case 4:
                return motionAnyToHome(chord);
            default:
                return motionUpFourth(chord);
    }
}

function motionUpSecond(chord) {
    let startPosition = currentHarmony.indexOf(chord);
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

function motionDownThird(chord) {
    let startPosition = currentHarmony.indexOf(chord);
    let finishPosition;
    // conditional statement converting array indexes to base7
    if (startPosition === 0) {
        finishPosition = 5;
    } else if (startPosition === 1) {
        finishPosition = 6;
    } else if (startPosition === 4) { // prevents motion down a third from V
        if (generateChance(2) === 1) {
            return motionUpSecond(chord);
        } else {
            return motionUpFourth(chord)
        }
    } else {
        startPosition = startPosition - 2;
        finishPosition = startPosition;
    }
    return currentHarmony[finishPosition];
}

function motionUpFourth(chord) {
    let startPosition = currentHarmony.indexOf(chord);
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

function motionStatic(chord) {
    return currentHarmony[currentHarmony.indexOf(chord)];
}

function motionAnyToHome(chord) {
    if (chord === 'i' || chord === 'I') {
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
// Roman numerals Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ ⅰ ⅷ
// https://unicode-table.com/en/sets/roman-numerals/