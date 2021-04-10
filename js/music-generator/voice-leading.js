let noteIndex = ['B1', 'C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5', 'C6', 'Db6', 'D6'];

let startingNote;
let bassVoiceArray = [];
let tenorVoiceArray = [];
let altoVoiceArray = [];
let sopranoVoiceArray = [];
let resolveDirectionArray = [];

function getStartingTones() {

    let allChordTones = [];
    let allChordToneIndex = [];
    let bassTones = [];
    let tenorTones = [];
    let altoTones = [];
    let sopranoTones = [];
    let direction;
    let satbArray = [];
    let firstChord;
    let cadenceType;


    function createBassArray() {
        getVoiceLeading('triad');
        bassVoiceArray = [...tempVoiceArray];
    }
    
    function createTenorArray() {
        getVoiceLeading('triad');
        tenorVoiceArray = [...tempVoiceArray];
    }
    
    function createAltoArray() {
        getVoiceLeading('seventh');
        altoVoiceArray = [...tempVoiceArray];
    }
    
    function createSopranoArray() {
        getVoiceLeading('seventh', true);
        sopranoVoiceArray = [...tempVoiceArray];
    }
    
    // get first chord as string
    firstChord = progression[0];
    resolveDirectionArray = [];
    // assign first chord to object
    for (let i = 0; i <= keyNumerals.length - 1; i++) {
        if (keyNumerals[i][0] === firstChord) {
            firstChord = keyNumerals[i];
        }
    }

    for (let i = 0; i <= progression.length - 2; i++) {
        let num = Math.floor(Math.random() * 6);
        if (num === 0) {
            direction = 'up';
        } else if (num === 1) {
            direction = 'down';
        } else {
            direction = 'smoothest';
        }
        resolveDirectionArray.push(direction);
    }

    cadenceType = document.getElementById('chord-end').textContent;

    if (cadenceType === 'Authentic' || cadenceType === 'Plagal') {
        resolveDirectionArray[resolveDirectionArray.length - 1] = 'down';
        resolveDirectionArray[resolveDirectionArray.length - 2] = 'smoothest';
    }
    if (cadenceType === 'Half' || cadenceType === 'Deceptive') {
        resolveDirectionArray[resolveDirectionArray.length - 1] = 'up';
        resolveDirectionArray[resolveDirectionArray.length - 2] = 'smoothest';
    }

    allChordTones.push(...firstChord[1][1]);
    allChordTones.push(...firstChord[2][1]);
    allChordTones.push(...firstChord[3][1]);

    allChordTones.forEach((item) => {
        allChordToneIndex.push(noteIndex.indexOf(item));
    })

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
    
    // lowest root
    startingNote = firstChord[1][1][0];
    createBassArray();

    startingNote = noteIndex[tenorTones[Math.floor(Math.random() * tenorTones.length)]];
    createTenorArray();

    startingNote = noteIndex[altoTones[Math.floor(Math.random() * altoTones.length)]];
    createAltoArray();

    // highest third
    startingNote = firstChord[2][1][firstChord[2][1].length - 1];
    createSopranoArray();

    // THIS is where I can check for root
    checkForRoot();
    // THIS is where I can check for root

    satbArray.push(bassVoiceArray, tenorVoiceArray, altoVoiceArray, sopranoVoiceArray);
    satbArray.forEach((item) => {
        phraseUnit.info.voiceLeading.push(item);
    });
    tempPlaybackArray.push(satbArray);
}

function checkForRoot() {

    for (let i = 0; i <= progression.length - 1; i++) {
        let rootBool = false;
        let roots = [];
        // get current chord
        let currentChord = progression[i];
        // look in romanNumeral array for rootArray
        keyNumerals.forEach((item) => {
            if (item[0] === currentChord) {
                roots = [...item[1][1]];
            }
        });
        // run .includes()
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
        noteIndex.indexOf(bassVoiceArray[i])
        noteIndex.indexOf(roots[0]);
        noteIndex.indexOf(roots[1]);
        let nearestRoot;
        if (noteIndex.indexOf(bassVoiceArray[i]) < 7) {
            nearestRoot = roots[0];
        } else {
            nearestRoot = roots[1];
        }
        // if false then move bass to nearest root
        if (rootBool === false) {
            bassVoiceArray[i] = nearestRoot;
        }
    }
}

function getVoiceLeading(extensions, counterpoint) {
    // empty array to hold all voice leading options
    tempVoiceArray = [];
    // run function on entire progression
    for (let i = 0; i <= progression.length - 2; i++) {
        if (i === 0) {
            tempVoiceArray.push(startingNote)
        }

        // next chord in progression as string
        let resolveChord = progression[i + 1];
        // search for object based on string
        for (let i = 0; i <= keyNumerals.length - 1; i++) {
            if (keyNumerals[i][0] === resolveChord) {
                resolveChord = keyNumerals[i];
            }
        }

        function voiceLead(startingNote, resolveChord, counterpoint) {
            let chordMemberIndexArray = [];
            let differenceOfArray = [];

            function seventhChance() {
                if (i === progression.length - 2) {
                    return 2;
                } else {
                    if (Math.floor(Math.random() * 3) === 1) {
                        return 1;
                    } else {
                        return 2;
                    }
                }
            }

            function nextClosestResolve() {
                differenceOfArray.splice(indexOfSmallestDistanceInDiff, 1);
                chordMemberIndexArray.splice(indexOfSmallestDistanceInDiff, 1);
                indexOfSmallestDistanceInDiff = differenceOfArray.indexOf(Math.min(...differenceOfArray));
            }

            if (extensions === 'triad') {
                // length of resolveChord loop determines how many color tones are included. (-2) is triad, (-1) includes sevenths.
                for (let i = 1; i <= resolveChord.length - 2; i++) {
                    // gets index of all chord members in resolution chord
                    resolveChord[i][1].forEach((item) => chordMemberIndexArray.push(noteIndex.indexOf(item)));
                }
            } else if (extensions === 'seventh') {
                for (let i = 1; i <= resolveChord.length - seventhChance(); i++) {
                    // gets index of all chord members in resolution chord
                    resolveChord[i][1].forEach((item) => chordMemberIndexArray.push(noteIndex.indexOf(item)));
                }
            }
            // get smoothest transition via difference of current note's index and nearest note's index
            chordMemberIndexArray.forEach((item) => {
                differenceOfArray.push(Math.abs(noteIndex.indexOf(startingNote) - item));
            });
            let indexOfSmallestDistanceInDiff = differenceOfArray.indexOf(Math.min(...differenceOfArray));
            let smoothestTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]];
            // repeat procedure after removing previous to find next best option
            nextClosestResolve();
            let goodTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]];
            // repeat procedure after removing previous to find next best option again
            nextClosestResolve();
            let okayTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]];

            let resolution;
            let currentNote = startingNote;

            let resolutionOptions = [smoothestTransition, goodTransition, okayTransition];

            // random chance of smoothest or next best voice-leading option
            function smoothResolveChance() {
                let num = Math.floor(Math.random() * 3);
                if (num === 0) {
                    resolution = resolutionOptions[1];
                } else {
                    resolution = resolutionOptions[0];
                }
            }

            // categorization of voice leading options
            function voiceLeadDirectionOptions() {
                let directionUp;
                let directionDown;

                resolutionOptions.forEach((item) => {

                    if (noteIndex.indexOf(item) < noteIndex.indexOf(currentNote)) {
                        directionDown = item;
                    } else if (noteIndex.indexOf(item) > noteIndex.indexOf(currentNote)) {
                        directionUp = item;
                    }

                });

                // THIS is where I can control basic counterpoint

                if (counterpoint === true) {
                    if (resolveDirectionArray[i] === 'up') {
                        if (directionUp) {
                            resolution = directionDown;
                        } else {
                            resolution = smoothestTransition;
                        }
                    } else if (resolveDirectionArray[i] === 'down') {
                        if (directionDown) {
                            resolution = directionUp;
                        } else {
                            resolution = smoothestTransition;
                        }
                    }
                } else {
                    if (resolveDirectionArray[i] === 'up') {
                        if (directionUp) {
                            resolution = directionUp;
                        } else {
                            resolution = smoothestTransition;
                        }
                    } else if (resolveDirectionArray[i] === 'down') {
                        if (directionDown) {
                            resolution = directionDown;
                        } else {
                            resolution = smoothestTransition;
                        }
                    }
                }
            }

            // smoothest or next best option
            smoothResolveChance();
            // check direction array for shift
            voiceLeadDirectionOptions();

            // assign resolution to startingNote for next loop through
            startingNote = resolution;
            tempVoiceArray.push(resolution);
        }

        voiceLead(startingNote, resolveChord)

    }

}

function getFinalVoicing() {
    phraseUnit.info.prevFinalVoicing.push(bassVoiceArray[bassVoiceArray.length - 1]);
    phraseUnit.info.prevFinalVoicing.push(tenorVoiceArray[bassVoiceArray.length - 1]);
    phraseUnit.info.prevFinalVoicing.push(altoVoiceArray[bassVoiceArray.length - 1]);
    phraseUnit.info.prevFinalVoicing.push(sopranoVoiceArray[bassVoiceArray.length - 1]);
}

// END of document 