// Harmonic Generator for "Music Trainer"

let major = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii∅'];
let minor = ['i', 'ii∅', 'bIII', 'iv', 'V', 'bVI', 'bVII'];
let cadenceType = ['Authentic', 'Plagal', 'Deceptive', 'Half'];

// gets phrase
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

// hard-code defaults
// control variables

// let persistStateConBool = false;
// let persistStateOption;

let keyCenterPersist = false;
let keyCenterConBool = false;
let keyCenterOption;
let keyCenterRandom = true;

function getKeyCenter() {
    // onscreen user controled option has been clicked, random box onchecked
    if (keyCenterConBool === true && keyCenterRandom === false) {
        keyCenterConVar = keyCenterOption;
        keyNumerals = keyCenterConVar;
    } else if (keyCenterConBool === true && keyCenterRandom === true) { // random checkbox enabled
        switch (generateChance(5)) {
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
                break;
            case 5:
                keyNumerals = keyOfBb;
                break;
            case 6:
                keyNumerals = keyOfEb;
                break;
            default:
                break;
        }
    } else { // hard-coded option
        switch (generateChance(5)) {
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
                break;
            case 5:
                keyNumerals = keyOfBb
                break;
            case 6:
                keyNumerals = keyOfEb;
                break;
            default:
                break;
        }
    }
}

let keyModePersist = false;
let keyModeConBool = false;
let keyModeOption;
let keyModeRandom = true;
let currentHarmony = major;
let romanNumOne;
let romanNumFour;
let romanNumFive;
let romanNumSix;

function getKeyMode() {
    // onscreen user controled option has been clicked, random box onchecked
    if (keyModeConBool === true && keyModeRandom === false) {
        if (keyModeOption === major) {
            keyModeConVar = 2;
        } else if (keyModeOption === minor) {
            keyModeConVar = 1;
        } else {
            keyModeConVar = generateChance(2);
        }
    } else if (keyModeConBool === true && keyModeRandom === true) { // random checkbox enabled
        keyModeConVar = generateChance(2);
    } else {
        keyModeConVar = generateChance(2);
    }
    // multiple value assignment handling
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

let keyModeSwitchPersist = false;
let keyModeSwitchConBool = true; // value controls whether or not onscreen options are applied and or initialized
let keyModeSwitchOption;
let keyModeSwitchRandom = true; // value of onscreen checkbox, pre-checked to represent the options applied after first iteration

function switchParallelMode() {
    // multiple value assignment handling
    function parallelMode() {
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
    
    let modeShiftArray = ['static', 'parallel'];
    // onscreen user controled options enabled, box unchecked
    if (keyModeSwitchConBool === true && keyModeSwitchRandom === false) {
        keyModeSwitchConVar = keyModeSwitchOption;
    } else if (keyModeSwitchConBool === true && keyModeSwitchRandom === true) { // random checkbox enabled, only on first pass
        keyModeSwitchConVar = modeShiftArray[generateChance(2) - 1];
    } else { // hard-coded option
        keyModeSwitchConVar = modeShiftArray[generateChance(2) - 1];
    }

    // multiple value assignment handling
    keyModeSwitchConVar === 'parallel' && parallelMode();
}

// form construction
let numOfRepeatsConBool = false;
let numOfRepeatsOption;
let numOfRepeatsRandom = true;

function buildDoublePeriod() {
    // onscreen user controled option has been clicked, random box unchecked
    if (numOfRepeatsConBool === true && numOfRepeatsRandom === false) {
        numOfRepeatsConVar = numOfRepeatsOption;
    } else if (numOfRepeatsConBool === true && numOfRepeatsRandom === true) { // random checkbox enabled
        numOfRepeatsConVar = generateChance(10, 5);
    } else { // hard-coded option
        numOfRepeatsConVar = generateChance(10, 5);
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
                switchParallelMode();
                createPhraseChart(2, i + 1);
                voiceLeadHandler(section);
            }
            if (section === 3) {
                switchParallelMode();
                createPhraseChart(3, i + 1);
                voiceLeadHandler(section);
            }
        }

        // CONTROL HANDLING ---------

        // let persistStateConVar;
        // if (persistStateConBool === true) {
        //     persistStateConVar = persistStateOption;
        // }

        // if (persistStateConVar === false || persistStateConVar === undefined) {
        //     if (i === 0) {
        //     }
        // } else {
        //     if (i === 0) {
        //         // controlOff(); // do nothing
        //     }
        // }

        turnControlOff();

        // CONTROL HANDLING ---------
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

let startingChordPersist = false;
let startingChordConBool = false;
let startingChordOption;
let startingChordRandom = false;

let typeOfCadencePersist = false;
let typeOfCadenceConBool = false;
let typeOfCadenceOption;
let typeOfCadenceRandom = true;

let primeSequencePersist = false;
let primeSequenceConBool = false;
let primeSequenceOption;
let primeSequenceRandom = false;

// makes a base unit of chords
function createHarmonicUnit(section, formNum, phraseChart) {
    let {
        info
    } = phraseChart;

    // data helper arrays
    function concatKeyInfo() {

        switch (keyNumerals) {
            case keyOfC:
                center = 'C';
                break;
            case keyOfG:
                center = 'G';
                break;
            case keyOfF:
                center = 'F';
                break;
            case keyOfD:
                center = 'D';
                break;
            case keyOfBb:
                center = 'Bb';
                break;
            case keyOfEb:
                center = 'Eb';
                break;
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

    // CONTROL HANDLING --------------

    // onscreen user controled option has been clicked, random box unchecked
    if (startingChordConBool === true && startingChordRandom === false) {
        startingChordConVar = startingChordOption;
    } else if (startingChordConBool === true && startingChordRandom === true) { // random checkbox enabled
        startingChordConVar = generateChance(7);
    } else { // hard-coded option
        phraseContainer.length === 0 ? startingChordConVar = 1 : generateChance(2) === 1 ? startingChordConVar = 1 : startingChordConVar = generateChance(7);
    }

    // onscreen user controled option has been clicked, random box onchecked
    if (typeOfCadenceConBool === true && typeOfCadenceRandom === false) {
        typeOfCadenceConVar = typeOfCadenceOption;
    } else if (typeOfCadenceConBool === true && typeOfCadenceRandom === true) { // random checkbox enabled
        typeOfCadenceConVar = generateChance(4);
    } else { // hard-coded option
        typeOfCadenceConVar = generateChance(3, 1);
    }

    function harmonicSequenceHandler() {

        // onscreen harmonic sequencing option
        if (primeSequenceConBool === true && primeSequenceRandom === false) {
            primeSequenceConVar = primeSequenceOption;
            primeSequenceConVar = Number(primeSequenceConVar);
            if (primeSequenceConVar === 1) {
                // do nothing
            } else if (primeSequenceConVar > 1 && primeSequenceConVar < 8) {
                harmonicDiatonicSequencer(primeSequenceConVar);
            } else if (primeSequenceConVar >= 8) {
                strongestMostOften();
            }
        } else if (primeSequenceConBool === true && primeSequenceRandom === true) { // random checkbox enabled
            primeSequenceConVar = generateChance(8);
            harmonicDiatonicSequencer(primeSequenceConVar);
        } else { // hard-coded option
            strongestMostOften();
        }

        function strongestMostOften() {
            // sequence by stongest motion most often
            let sequenceChance = generateChance(20);
            if (sequenceChance <= 8) {
                harmonicDiatonicSequencer(generateChance(8));
            } else if (sequenceChance > 8) {
                harmonicDiatonicSequencer(4);
            }
        }
    }

    // CONTROL HANDLING --------------

    // first 4 bar phrase
    if (section === 0) {
        info.formId = formNum + ':A (Head)';
        info.tempo = getNewTempo();
        // generate new progression, any starting point, never Authentic cadence
        getNewProgression(currentHarmony[startingChordConVar - 1], cadenceType[typeOfCadenceConVar - 1], section, info);
        storePlaybackData();
        // second 4 bar phrase
    } else if (section === 1) {
        info.formId = formNum + ':A (Prime)';
        info.tempo = phraseContainer[(formNum - 1) * 4][0].tempo;
        harmonicSequenceHandler();
        cadenceHandler(section);
        storePlaybackData();
        // third 4 bar phrase
    } else if (section === 2) {
        info.formId = formNum + ':B Section';
        getNewProgression(motionUpFourth(progression[progression.length - 1]), cadenceType[generateChance(2, 2) - 1], section, info);
        info.tempo = getCloselyRelatedTempo(phraseContainer[(formNum - 1) * 4][0].tempo);
        storePlaybackData();
        // last 4 bar phrase
    } else if (section === 3) {
        info.formId = formNum + ':A (Tail)';
        info.tempo = phraseContainer[(formNum - 1) * 4][0].tempo;
        // get 'A' section progression and apply cadence
        progression = [...phraseContainer[(formNum - 1) * 4][0].progression];
        cadenceHandler(section);
        storePlaybackData();
    }

    // console.log(info.formId + ' ' + info.progression);
    // console.log(info.formId + ' ' + info.progression[0]);
    // console.log(info.formId + ' ' + info.key);
    // console.log(info.formId + ' ' + info.progressionLength);
    // console.log(info.formId + ' ' + info.cadence);
}

let numOfChordsPersist = false;
let numOfChordsConBool = false;
let numOfChordsOption;
let numOfChordsRandom = true;
let progression = [];

function getNewProgression(start, cadence, section) {
    // onscreen user controled option has been clicked, random box unchecked
    if (numOfChordsConBool === true && numOfChordsRandom === false) {
        numOfChordsConVar = numOfChordsOption;
    } else if (numOfChordsConBool === true && numOfChordsRandom === true) { // random checkbox enabled
        numOfChordsConVar = generateChance(4, 3);
    } else { // hard-coded option
        numOfChordsConVar = generateChance(4, 3);
    }

    // 'cadenceValue' is a iterated data store variable used in /voice-leading.js
    cadenceValue = cadence;

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

    function checkForStrongMotion(info) {
        if (cadence === 'Plagal') {
            for (let i = 1; i <= progression.length - 2; i++) {
                if (checkIfStrong(progression[i - 1], progression[i]) === false) {
                    return getNewProgression(start, cadence, section);
                }
            }
        } else {
            for (let i = 1; i <= progression.length - 1; i++) {
                if (checkIfStrong(progression[i - 1], progression[i]) === false) {
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
        return currentHarmony[generateChance(6, 1) - 1];
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
