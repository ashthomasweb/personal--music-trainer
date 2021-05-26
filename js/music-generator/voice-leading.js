let noteIndex = ['B1', 'C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5', 'C6', 'Db6', 'D6'];

let bassNoteIndexRange = {
    minIndex: 0,
    maxIndex: 18,
    minNote: 'B1',
    maxNote: 'F3'
}

let tenorNoteIndexRange = {
    minIndex: 19,
    maxIndex: 27,
    minNote: 'Gb3',
    maxNote: 'D4'
}

let altoNoteIndexRange = {
    minIndex: 28,
    maxIndex: 36,
    minNote: 'Eb4',
    maxNote: 'B4'
}

let sopranoNoteIndexRange = {
    minIndex: 37,
    maxIndex: 51,
    minNote: 'C5',
    maxNote: 'D6'
}

function rangeHandler(voice, input) {
    if ( voice === 'bass') {
        if ( input < bassNoteIndexRange.minIndex || input > bassNoteIndexRange.maxIndex) {
            return false;
        }
    } else if ( voice === 'tenor') {
        if ( input < tenorNoteIndexRange.minIndex || input > tenorNoteIndexRange.maxIndex) {
            return false;
        }
    } else if ( voice === 'alto') {
        if ( input < altoNoteIndexRange.minIndex || input > altoNoteIndexRange.maxIndex) {
            return false;
        }
    } else if ( voice === 'soprano') {
        if ( input < sopranoNoteIndexRange.minIndex || input > sopranoNoteIndexRange.maxIndex) {
            return false;
        }
    } else {
        return true;
    }
}

let resolutionDirectionArray = [];
let startingNote; // temp data store for each iteration
let cadenceValue; // temp data store for each iteration
let bassVoiceArray = [];
let tenorVoiceArray = [];
let altoVoiceArray = [];
let sopranoVoiceArray = [];

function voiceLeadHandler(section) {

    // get first chord as string
    let firstChord = progression[0];

    // declare firstChord as object array
    for (let i = 0; i <= keyNumerals.length - 1; i++) {
        if (keyNumerals[i].numeral === firstChord) {
            firstChord = keyNumerals[i];
        }
    }

    // seperate allChordToneIndex into SATB
    let bassTones = [];
    let tenorTones = [];
    let altoTones = [];
    let sopranoTones = [];

    function satbHandler() {
        // gather tones for SATB splitter
        let allChordTones = [];
        let allChordToneIndex = [];
        allChordTones.push(...firstChord.root, ...firstChord.third, ...firstChord.fifth);
        allChordTones.forEach((item) => {
            allChordToneIndex.push(noteIndex.indexOf(item));
        });

        function satbSplitter() {
            allChordToneIndex.forEach((item) => {
                if (item <= 18) { // F3 and below
                    bassTones.push(item);
                }
                if (item >= 19 && item <= 27) { // Gb3 to D4
                    tenorTones.push(item);
                }
                if (item >= 28 && item <= 36) { // Eb4 to B4
                    altoTones.push(item);
                }
                if (item >= 37) { // C5 and above
                    sopranoTones.push(item);
                }
            })
        }
        satbSplitter();
    }
    satbHandler();

    // create array indicating overall voice leading direction
    function createResolutionDirectionArray() {
        let direction;
        resolutionDirectionArray = [];
        for (let i = 0; i <= progression.length - 2; i++) {
            switch (generateChance(6)) {
                case 1:
                    direction = 'up';
                    break;
                case 2:
                    direction = 'down';
                    break;
                default:
                    direction = 'smoothest';
                    break;
            }
            resolutionDirectionArray.push(direction);
        }

        // apply cadential tendency to direction array
        if (cadenceValue === 'Authentic' || cadenceValue === 'Plagal') {
            resolutionDirectionArray[resolutionDirectionArray.length - 1] = 'down';
            resolutionDirectionArray[resolutionDirectionArray.length - 2] = 'smoothest';
        }
        if (cadenceValue === 'Half' || cadenceValue === 'Deceptive') {
            resolutionDirectionArray[resolutionDirectionArray.length - 1] = 'up';
            resolutionDirectionArray[resolutionDirectionArray.length - 2] = 'smoothest';
        }
    }
    createResolutionDirectionArray();
    
    // set first note of voice and handle voice-leading for satb
    function createBassArray() {
        getVoiceLeading('triad', section, 'bass', 0);
        bassVoiceArray = [...tempVoiceArray];
    }

    function createTenorArray() {
        getVoiceLeading('triad', section, 'tenor', 1, true);
        tenorVoiceArray = [...tempVoiceArray];
    }

    function createAltoArray() {
        getVoiceLeading('seventh', section, 'alto', 2);
        altoVoiceArray = [...tempVoiceArray];
    }

    function createSopranoArray() {
        getVoiceLeading('seventh', section, 'soprano', 3);
        sopranoVoiceArray = [...tempVoiceArray];
    }
  
    function createAllVoiceArrays() {
        // lowest root
        startingNote = firstChord.root[0];
        createBassArray();

        startingNote = noteIndex[tenorTones[generateChance(tenorTones.length) - 1]];
        createTenorArray();

        startingNote = noteIndex[altoTones[generateChance(altoTones.length) - 1]];
        createAltoArray();

        // highest third
        startingNote = firstChord.third[firstChord.third.length - 1];
        createSopranoArray();
    }
    createAllVoiceArrays();
    
    function checkCadenceBass() {
        let lastBass = bassVoiceArray[bassVoiceArray.length - 1];

        for (let i = progression.length - 1; i <= progression.length - 1; i++) {
            let roots = [];
            let currentChord = progression[i];
            let distanceFromCurrentNote = [];
            let indexOfClosestRoot;
            // look in romanNumeral array for rootArray
            keyNumerals.forEach((item) => {
                if (item.numeral === currentChord) {
                    roots = [...item.root];
                }
            });

            roots.forEach((item) => {
                distanceFromCurrentNote.push(Math.abs(noteIndex.indexOf(lastBass) - noteIndex.indexOf(item)));
            });
            indexOfClosestRoot = distanceFromCurrentNote.indexOf(Math.min(...distanceFromCurrentNote));

            // THIS IS PROBABLY AN ERROR POINT for range handling
            lastBass = roots[indexOfClosestRoot];
            bassVoiceArray[bassVoiceArray.length - 1] = lastBass;
        }
    }
    checkCadenceBass();

    function checkForRootAndThird() {
        for (let i = 0; i <= progression.length - 1; i++) {
            let rootBool = false;
            let roots = [];
            let thirdBool = false;
            let thirds = [];
            let voiceArrays = [bassVoiceArray, tenorVoiceArray, altoVoiceArray, sopranoVoiceArray];
            // get current chord
            let currentChord = progression[i];
            // look in romanNumeral array for rootArray
            keyNumerals.forEach((item) => {
                if (item.numeral === currentChord) {
                    roots = [...item.root];
                    thirds = [...item.third];
                }
            });

            voiceArrays.forEach((item) => {
                if (roots.includes(item[i])) {
                    rootBool = true;
                }
                if (thirds.includes(item[i])) {
                    thirdBool = true;
                }
            });

            // if false then move bass to lowest root
            if (rootBool === false) {
                bassVoiceArray[i] = roots[0];
            }
            // if false then move soprano to highest third
            if (thirdBool === false) {
                sopranoVoiceArray[i] = thirds[thirds.length - 1];
            }
        }
    }
    checkForRootAndThird();

    // raw voice-lead info
    function voiceArrayDataHandler() {
        let satbArray = [];
        satbArray.push(bassVoiceArray, tenorVoiceArray, altoVoiceArray, sopranoVoiceArray);
        // iterate to info array
        satbArray.forEach((item) => {
            phraseChart.info.voiceLeading.push(item);
        });
        // push to playback handling
        tempPlaybackArray.push(satbArray);
    }
    voiceArrayDataHandler();
}

function getVoiceLeading(extensions, section, voice, voiceIndex, counterpoint = false) {
    // empty array to hold all voice leading options
    tempVoiceArray = [];
    let resolveChord;

    function leadSingleVoice(startingNote, resolveChord, i, counterpoint, forceSmooth = false) {

        // apply chance of seventh to be added to potential chord tones
        let chordMemberIndexArray = [];

        function findAvailChordTones() {
            function seventhChance() { // NEED to account for 'V'
                if (i === progression.length - 2) { // make seventh available on penultimate harmony
                    return 2;
                } else {
                    if (generateChance(3) === 1) {
                        return 1;
                    } else {
                        return 2;
                    }
                }
            }

            if (extensions === 'triad') {
                // length of resolveChord loop determines how many color tones are included. (-2) is triad, (-1) includes sevenths.
                for (let i = 1; i <= Object.keys(resolveChord).length - 2; i++) {
                    // gets index of all chord members in resolution chord
                    Object.values(resolveChord)[i].forEach((item) => chordMemberIndexArray.push(noteIndex.indexOf(item)));
                    // remove indexes of out of range tones
                    chordMemberIndexArray.forEach( (num, i) => {
                        rangeHandler(voice, num) === false && chordMemberIndexArray.splice(i, 1);
                    });
                }
            } else if (extensions === 'seventh') {
                for (let i = 1; i <= Object.keys(resolveChord).length - seventhChance(); i++) {
                    // gets index of all chord members including sevenths in resolution chord
                    Object.values(resolveChord)[i].forEach((item) => chordMemberIndexArray.push(noteIndex.indexOf(item)));
                    // remove indexes of out of range tones
                    chordMemberIndexArray.forEach( (num, i) => {
                        rangeHandler(voice, num) === false && chordMemberIndexArray.splice(i, 1);
                    });
                }
            }
        }
        findAvailChordTones();

        // find and apply available resolution tones
        let smoothestTransition;
        let goodTransition;
        let okayTransition;
        let resolution;
        let resolutionOptions;

        function getClosestResolutions() {
            let newArray = [...chordMemberIndexArray];

            let distanceFromAntecedent;
            let indexOfSmallestDistance;
            distanceFromAntecedent = [];
            // get smoothest transition from absolute value of current note's index and nearest note's index
            chordMemberIndexArray.forEach((item) => {
                distanceFromAntecedent.push(Math.abs(noteIndex.indexOf(startingNote) - item));
            });
            indexOfSmallestDistance = distanceFromAntecedent.indexOf(Math.min(...distanceFromAntecedent));
            smoothestTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistance]];

            function nextClosestResolution() { // will remove nearest tone from available tones
                distanceFromAntecedent.splice(indexOfSmallestDistance, 1);
                chordMemberIndexArray.splice(indexOfSmallestDistance, 1);
                indexOfSmallestDistance = distanceFromAntecedent.indexOf(Math.min(...distanceFromAntecedent));
            }
            // Does not work in a loop or forEach, do not refactor
            // assign next best option after removing previous smoothest transition
            nextClosestResolution();
            goodTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistance]];
            // assign next best option after removing previous smoothest transition...again. 
            nextClosestResolution();
            okayTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistance]];
            resolutionOptions = [smoothestTransition, goodTransition, okayTransition];

            let temp = [];
            function log() {
                resolutionOptions.forEach( (item) => {
                    temp.push(noteIndex.indexOf(item));
                });
                
                temp.forEach( (item) => {
                    newArray.includes(item) ? console.log('yes'): console.log('no, there is one out of range!');  
                })
                return temp;
            }
        }
        getClosestResolutions();

        // pick smoothest or next best voice-leading option
        function smoothResolutionChance(forceSmooth) {
            if (forceSmooth) {
                resolution = resolutionOptions[0];
            } else {
                if (generateChance(3) === 1) {
                    resolution = resolutionOptions[1];
                } else {
                    resolution = resolutionOptions[0];
                }
            }
        }
        smoothResolutionChance();

        // handling of resolution directions
        let currentNote = startingNote;

        function voiceLeadDirectionOptions(counterpoint) {
            let resolveUp;
            let resolveDown;

            resolutionOptions.forEach((item) => {
                if (noteIndex.indexOf(item) < noteIndex.indexOf(currentNote)) {
                    resolveDown = item;
                } else if (noteIndex.indexOf(item) > noteIndex.indexOf(currentNote)) {
                    resolveUp = item;
                }
            });

            // THIS is where I can control basic counterpoint
            switch (counterpoint) {
                case true:
                    switch (resolutionDirectionArray[i]) {
                        case 'up':
                            resolveUp ? resolution = resolveDown : resolution = resolutionOptions[0];
                            break;
                        case 'down':
                            resolveDown ? resolution = resolveUp : resolution = resolutionOptions[0];
                            break;
                        default:
                            resolution = resolutionOptions[0];
                            break;
                    }
                case false:
                    switch (resolutionDirectionArray[i]) {
                        case 'up':
                            resolveUp ? resolution = resolveUp : resolution = resolutionOptions[0];
                            break;
                        case 'down':
                            resolveDown ? resolution = resolveDown : resolution = resolutionOptions[0];
                            break;
                        default:
                            resolution = resolutionOptions[0];
                            break;
                    }
                default:
                    resolution = resolutionOptions[0];
                    break;  
            }
        }
        // check direction array for shift
        voiceLeadDirectionOptions(counterpoint);

        // assign resolution to startingNote for next loop
        startingNote = resolution;
        tempVoiceArray.push(resolution);
    }

    // run function on entire progression
    for (let i = 0; i <= progression.length - 2; i++) {
        // if first loop, generate voicing
        if (i === 0 && section === 0) {
            tempVoiceArray.push(startingNote);
        }

        // if not first loop, then get previous chord
        if (i === 0 && section !== 0) {
            // assign object based on string
            resolveChord = progression[i];
            for (let i = 0; i <= keyNumerals.length - 1; i++) {
                if (keyNumerals[i].numeral === resolveChord) {
                    resolveChord = keyNumerals[i];
                }
            }
            leadSingleVoice(phraseChart.info.prevFinalVoicing[voiceIndex], resolveChord, i, false, true);
        }

        resolveChord = progression[i + 1];
        // search for object based on string

        for (let i = 0; i <= keyNumerals.length - 1; i++) {
            if (keyNumerals[i].numeral === resolveChord) {
                resolveChord = keyNumerals[i];
            }
        }
        // voice lead one voice - one harmonic change
        leadSingleVoice(startingNote, resolveChord, i, counterpoint);
    }

}

// END of document