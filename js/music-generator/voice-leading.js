let noteIndex = ['B1', 'C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5', 'C6', 'Db6', 'D6'];

let romanNumerals = [
    ['I',
        ['root', ['C2', 'C3', 'C4', 'C5', 'C6']],
        ['third', ['E2', 'E3', 'E4', 'E5']],
        ['fifth', ['G2', 'G3', 'G4', 'G5']],
        ['seventh', ['B1', 'B2', 'B3', 'B4', 'B5']]
    ],

    ['ii',
        ['root', ['D2', 'D3', 'D4', 'D5', 'D6']],
        ['third', ['F2', 'F3', 'F4', 'F5']],
        ['fifth', ['A2', 'A3', 'A4', 'A5']],
        ['seventh', ['C2', 'C3', 'C4', 'C5', 'C6']]
    ],


    ['iii',
        ['root', ['E2', 'E3', 'E4', 'E5']],
        ['third', ['G2', 'G3', 'G4', 'G5']],
        ['fifth', ['B1', 'B2', 'B3', 'B4', 'B5']],
        ['seventh', ['D2', 'D3', 'D4', 'D5', 'D6']]
    ],


    ['IV',
        ['root', ['F2', 'F3', 'F4', 'F5']],
        ['third', ['A2', 'A3', 'A4', 'A5']],
        ['fifth', ['C2', 'C3', 'C4', 'C5', 'C6']],
        ['seventh', ['E2', 'E3', 'E4', 'E5']]
    ],

    ['V',
        ['root', ['G2', 'G3', 'G4', 'G5']],
        ['third', ['B1', 'B2', 'B3', 'B4', 'B5']],
        ['fifth', ['D2', 'D3', 'D4', 'D5', 'D6']],
        ['seventh', ['F2', 'F3', 'F4', 'F5']]
    ],

    ['vi',
        ['root', ['A2', 'A3', 'A4', 'A5']],
        ['third', ['C2', 'C3', 'C4', 'C5', 'C6']],
        ['fifth', ['E2', 'E3', 'E4', 'E5']],
        ['seventh', ['G2', 'G3', 'G4', 'G5']]
    ],

    ['vii',
        ['root', ['B1', 'B2', 'B3', 'B4', 'B5']],
        ['third', ['D2', 'D3', 'D4', 'D5', 'D6']],
        ['fifth', ['F2', 'F3', 'F4', 'F5']],
        ['seventh', ['A2', 'A3', 'A4', 'A5']]
    ]
];

let startingNote;


let bassVoiceArray = [];
let tenorVoiceArray = [];
let altoVoiceArray = [];
let sopranoVoiceArray = [];

function bass() {
    getVoiceLeading('triad');
    bassVoiceArray = [...tempVoiceArray];
}

function tenor() {
    getVoiceLeading('triad');
    tenorVoiceArray = [...tempVoiceArray];
}

function alto() {
    getVoiceLeading('seventh');
    altoVoiceArray = [...tempVoiceArray];
}

function soprano() {
    getVoiceLeading('seventh');
    sopranoVoiceArray = [...tempVoiceArray];
    // console.log('S ' + sopranoVoiceArray);
    // console.log('A ' + altoVoiceArray);
    // console.log('T ' + tenorVoiceArray);
    // console.log('B ' + bassVoiceArray);
}

let directionArray = [];

function getStartTones() {
    // get first chord as string
    let firstChord = progression[0];
    directionArray = [];
    // find first chord object
    for (let i = 0; i <= romanNumerals.length - 1; i++) {
        if (romanNumerals[i][0] === firstChord) {
            firstChord = romanNumerals[i];
        }
    }

    let allChordTones = [];
    let allChordToneIndex = [];
    let bassTones = [];
    let tenorTones = [];
    let altoTones = [];
    let sopranoTones = [];
    let direction;

    for (let i = 0; i <= progression.length - 2; i++) {
        let num = Math.floor(Math.random() * 6);
        if (num === 0) {
            direction = 'up';
        } else if (num === 1) {
            direction = 'down';
        } else {
            direction = 'smoothest';
        }
        directionArray.push(direction);
    }

    let cadenceType = document.getElementById('chord-end').textContent;

    if (cadenceType === 'Authentic' || cadenceType === 'Plagal') {
        directionArray[directionArray.length - 1] = 'down';
        directionArray[directionArray.length - 2] = 'smoothest';
    }
    if (cadenceType === 'Half' || cadenceType === 'Deceptive') {
        directionArray[directionArray.length - 1] = 'up';
        directionArray[directionArray.length - 2] = 'smoothest';
    }

    allChordTones.push(...firstChord[1][1]);
    allChordTones.push(...firstChord[2][1]);
    allChordTones.push(...firstChord[3][1]);

    allChordTones.forEach((item) => {
        allChordToneIndex.push(noteIndex.indexOf(item));
    })

    allChordToneIndex.forEach((item) => {
        if (item < 18) {
            bassTones.push(item);
        }
        if (item >= 18 && item < 30) {
            tenorTones.push(item);
        }
        if (item >= 30 && item < 40) {
            altoTones.push(item);
        }
        if (item >= 40) {
            sopranoTones.push(item);
        }
    })

    // lowest root
    startingNote = firstChord[1][1][0];
    bass();

    startingNote = noteIndex[tenorTones[Math.floor(Math.random() * tenorTones.length)]];
    tenor();

    startingNote = noteIndex[altoTones[Math.floor(Math.random() * altoTones.length)]];
    alto();

    // highest third
    startingNote = firstChord[2][1][firstChord[2][1].length - 1];
    soprano();

    let satbArray = [];
    satbArray.push(bassVoiceArray, tenorVoiceArray, altoVoiceArray, sopranoVoiceArray)
    builtPhrase[0].push(satbArray);
    allVoicesPlayback.push(satbArray);

}

function getVoiceLeading(extensions) {
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
        for (let i = 0; i <= romanNumerals.length - 1; i++) {
            if (romanNumerals[i][0] === resolveChord) {
                resolveChord = romanNumerals[i];
            }
        }

        function voiceLead(startingNote, resolveChord) {
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
            differenceOfArray.splice(indexOfSmallestDistanceInDiff, 1);
            chordMemberIndexArray.splice(indexOfSmallestDistanceInDiff, 1);
            indexOfSmallestDistanceInDiff = differenceOfArray.indexOf(Math.min(...differenceOfArray));
            let goodTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]];
            // repeat procedure after removing previous to find next best option again
            differenceOfArray.splice(indexOfSmallestDistanceInDiff, 1);
            chordMemberIndexArray.splice(indexOfSmallestDistanceInDiff, 1);
            indexOfSmallestDistanceInDiff = differenceOfArray.indexOf(Math.min(...differenceOfArray));
            let okayTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]];

            let resolution;
            let currentNote = startingNote;

            let resolutionOptions = [smoothestTransition, goodTransition, okayTransition];

            // random chance of smoothest or next best voice-leading option
            function voiceLeadChance() {
                let num = Math.floor(Math.random() * 3);
                if ( num === 0 ) {
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

                if (directionArray[i] === 'up') {
                    if (directionUp) {
                        resolution = directionUp;
                    } else {
                        resolution = smoothestTransition;
                    }
                } else if (directionArray[i] === 'down') {
                    if (directionDown) {
                        resolution = directionDown;
                    } else {
                        resolution = smoothestTransition;
                    }
                }

            }

            // smoothest or next best option
            voiceLeadChance();
            // check direction array for shift
            voiceLeadDirectionOptions();

            // assign resolution to startingNote for next loop through
            startingNote = resolution;
            tempVoiceArray.push(resolution);
        }

        voiceLead(startingNote, resolveChord)

    }

}

// END of document 
