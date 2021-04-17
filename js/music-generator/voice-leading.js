let noteIndex = ['B1', 'C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5', 'C6', 'Db6', 'D6'];

let resolutionDirectionArray = [];
let startingNote; // temp data store for each iteration
let cadenceValue; // temp data store for each iteration
let bassVoiceArray = [];
let tenorVoiceArray = [];
let altoVoiceArray = [];
let sopranoVoiceArray = [];

function voiceLeadHandler() {

    

    // get first chord as string
    let firstChord = progression[0];
    // declare firstChord as object array
    for (let i = 0; i <= keyNumerals.length - 1; i++) {
        if (keyNumerals[i].numeral === firstChord) {
            firstChord = keyNumerals[i];
        }
    }

    // gather tones for SATB splitter
    let allChordTones = [];
    let allChordToneIndex = [];
    allChordTones.push(...firstChord.root, ...firstChord.third, ...firstChord.fifth);
    allChordTones.forEach((item) => {
        allChordToneIndex.push(noteIndex.indexOf(item));
    });

    // seperate allChordToneIndex into SATB
    let bassTones = [];
    let tenorTones = [];
    let altoTones = [];
    let sopranoTones = [];

    function satbSplitter() {
        allChordToneIndex.forEach((item) => {
            if (item < 19) { // F3 and below
                bassTones.push(item);
            }
            if (item >= 19 && item < 28) { // Gb3 to D4
                tenorTones.push(item);
            }
            if (item >= 28 && item < 37) { // Eb4 to B4
                altoTones.push(item);
            }
            if (item >= 37) { // C5 and above
                sopranoTones.push(item);
            }
        })
    }
    satbSplitter();

    // create array indicating overall voice leading direction
    function createResolutionArray() {
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
    createResolutionArray();
        
    function createBassArray() {
        getVoiceLeading('triad');
        bassVoiceArray = [...tempVoiceArray];
    }

    function createTenorArray() {
        getVoiceLeading('triad');
        tenorVoiceArray = [...tempVoiceArray];
    }

    function createAltoArray() {
        getVoiceLeading('seventh', true);
        altoVoiceArray = [...tempVoiceArray];
    }

    function createSopranoArray() {
        getVoiceLeading('seventh');
        sopranoVoiceArray = [...tempVoiceArray];
    }

    // set first note of voice and handle voice-leading for satb
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

    // NEEDS refactor for multiple keys
    function checkForRoot() {
        for (let i = 0; i <= progression.length - 1; i++) {
            let rootBool = false;
            let roots = [];
            // get current chord
            let currentChord = progression[i];
            // look in romanNumeral array for rootArray
            keyNumerals.forEach((item) => {
                if (item.numeral === currentChord) {
                    roots = [...item.root];
                }
            });


            if (roots.includes(bassVoiceArray[i])) {
                rootBool = true;
            }
            if (roots.includes(tenorVoiceArray[i])) {
                rootBool = true;
            }
            if (roots.includes(altoVoiceArray[i])) {
                rootBool = true;
            }
            if (roots.includes(sopranoVoiceArray[i])) {
                rootBool = true;
            }

            // let nearestRoot;
            // if (noteIndex.indexOf(bassVoiceArray[i]) < 7) {
            //     nearestRoot = roots[0];
            // } else {
            //     nearestRoot = roots[1];
            // }
            // if false then move bass to nearest root
            if (rootBool === false) {
                bassVoiceArray[i] = roots[0];
            }
        }
    }
    checkForRoot();

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

function getVoiceLeading(extensions, counterpoint) {
    // empty array to hold all voice leading options
    tempVoiceArray = [];
    let resolveChord;

    function leadSingleVoice(startingNote, resolveChord, i, counterpoint) {

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
                }
            } else if (extensions === 'seventh') {
                for (let i = 1; i <= Object.keys(resolveChord).length - seventhChance(); i++) {
                    // gets index of all chord members including sevenths in resolution chord
                    Object.values(resolveChord)[i].forEach((item) => chordMemberIndexArray.push(noteIndex.indexOf(item)));
                }
            }
        }
        findAvailChordTones();

        // find and apply available resolution tones
        let distanceFromAntecedent;
        let indexOfSmallestDistance;
        let smoothestTransition;
        let goodTransition;
        let okayTransition;
        let resolution;
        let resolutionOptions;

        function getClosestResolutions() {
            distanceFromAntecedent = [];
            // get smoothest transition via difference of current note's index and nearest note's index
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
            // assign next best option after removing previous smoothest transition
            nextClosestResolution();
            goodTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistance]];
            // assign next best option after removing previous smoothest transition...again. 
            // Does not work in a loop, do not refactor
            nextClosestResolution();
            okayTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistance]];
            resolutionOptions = [smoothestTransition, goodTransition, okayTransition];
        }
        getClosestResolutions();

        // random chance of smoothest or next best voice-leading option
        function smoothResolutionChance() {
            if (generateChance(3) === 1) {
                resolution = resolutionOptions[1];
            } else {
                resolution = resolutionOptions[0];
            }
        }

        // categorization and handling of voice leading options
        let currentNote = startingNote;
        
        function voiceLeadDirectionOptions() {
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
                    if (resolutionDirectionArray[i] === 'up') {
                        if (resolveUp) {
                            resolution = resolveDown;
                        } else { // handles tones that are at edge of available range
                            resolution = smoothestTransition;
                        }
                    } else if (resolutionDirectionArray[i] === 'down') {
                        if (resolveDown) {
                            resolution = resolveUp;
                        } else { // handles tones that are at edge of available range
                            resolution = smoothestTransition;
                        }
                    }
                    break;
                case false:
                    if (resolutionDirectionArray[i] === 'up') {
                        if (resolveUp) {
                            resolution = resolveUp;
                        } else { // handles tones that are at edge of available range
                            resolution = smoothestTransition;
                        }
                    } else if (resolutionDirectionArray[i] === 'down') {
                        if (resolveDown) {
                            resolution = resolveDown;
                        } else { // handles tones that are at edge of available range
                            resolution = smoothestTransition;
                        }
                    }
                    default:
                        break;
            }
        }

        // smoothest or next best option
        smoothResolutionChance();
        // check direction array for shift
        voiceLeadDirectionOptions();

        // assign resolution to startingNote for next loop
        startingNote = resolution;
        tempVoiceArray.push(resolution);
    }

    // run function on entire progression
    for (let i = 0; i <= progression.length - 2; i++) {
        // push starting chord
        if (i === 0) {
            tempVoiceArray.push(startingNote)
        }

        // get next chord in progression as string
        resolveChord = progression[i + 1];
        // search for object based on string
        for (let i = 0; i <= keyNumerals.length - 1; i++) {
            if (keyNumerals[i].numeral === resolveChord) {
                resolveChord = keyNumerals[i];
            }
        }
        // voice lead one voice one harmonic change
        leadSingleVoice(startingNote, resolveChord, i)
    }

}

// END of document