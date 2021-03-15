let noteIndex = ['G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5', 'C6', 'Db6', 'D6'];

let romanNumerals = [
    ['I',
        ['root', ['C3', 'C4', 'C5', 'C6']],
        ['third', ['E3', 'E4', 'E5']],
        ['fifth', ['G2', 'G3', 'G4', 'G5']],
        ['seventh', ['B2', 'B3', 'B4', 'B5']]
    ],

    ['ii',
        ['root', ['D3', 'D4', 'D5', 'D6']],
        ['third', ['F3', 'F4', 'F5']],
        ['fifth', ['A2', 'A3', 'A4', 'A5']],
        ['seventh', ['C3', 'C4', 'C5', 'C6']]
    ],


    ['iii',
        ['root', ['E3', 'E4', 'E5']],
        ['third', ['G2', 'G3', 'G4', 'G5']],
        ['fifth', ['B2', 'B3', 'B4', 'B5']],
        ['seventh', ['D3', 'D4', 'D5', 'D6']]
    ],


    ['IV',
        ['root', ['F3', 'F4', 'F5']],
        ['third', ['A2', 'A3', 'A4', 'A5']],
        ['fifth', ['C3', 'C4', 'C5', 'C6']],
        ['seventh', ['E3', 'E4', 'E5']]
    ],

    ['V',
        ['root', ['G2', 'G3', 'G4', 'G5']],
        ['third', ['B2', 'B3', 'B4', 'B5']],
        ['fifth', ['D3', 'D4', 'D5', 'D6']],
        ['seventh', ['F3', 'F4', 'F5']]
    ],

    ['vi',
        ['root', ['A2', 'A3', 'A4', 'A5']],
        ['third', ['C3', 'C4', 'C5', 'C6']],
        ['fifth', ['E3', 'E4', 'E5']],
        ['seventh', ['G2', 'G3', 'G4', 'G5']]
    ],

    ['vii',
        ['root', ['B2', 'B3', 'B4', 'B5']],
        ['third', ['D3', 'D4', 'D5', 'D6']],
        ['fifth', ['F3', 'F4', 'F5']],
        ['seventh', ['A2', 'A3', 'A4', 'A5']]
    ]
];

let startingNote;

function firstTone() {

    for (let i = 0; i <= romanNumerals.length - 1; i++) {
        if (romanNumerals[i][0] === progression[0]) {
            startingNote = romanNumerals[i][1][1][0];
        }
    }
}

let bassVoiceArray = [];
let tenorVoiceArray = [];
let altoVoiceArray = [];
let sopranoVoiceArray = [];

function bass() {
    // console.log('bass');
    getVoiceLeading('triad');
    bassVoiceArray = [...tempVoiceArray];
}

function tenor() {
    // console.log('tenor');
    getVoiceLeading('triad');
    tenorVoiceArray = [...tempVoiceArray];
    console.log(tenorVoiceArray);
}

function alto() {
    // console.log('alto');
    getVoiceLeading('seventh');
    altoVoiceArray = [...tempVoiceArray];
}

function soprano() {
    // console.log('soprano');
    getVoiceLeading('seventh');
    sopranoVoiceArray = [...tempVoiceArray];

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

    for ( let i = 0; i <= progression.length - 2; i++ ) {
        let num = Math.floor(Math.random() * 4);
        if ( num === 0 ) {
            direction = 'up';
        } else if ( num === 1 ) {
            direction = 'down';
        } else {
            direction = 'smoothest';
        }
        directionArray.push(direction);
    }

    

    allChordTones.push(...firstChord[1][1]);
    allChordTones.push(...firstChord[2][1]);
    allChordTones.push(...firstChord[3][1]);

    // console.log(allChordTones);
    allChordTones.forEach((item) => {
        allChordToneIndex.push(noteIndex.indexOf(item));
    })


    console.log(allChordToneIndex);
    allChordToneIndex.forEach((item) => {
        if (item < 14) {
            bassTones.push(item);
        }
        if (item >= 14 && item < 23) {
            tenorTones.push(item);
        }
        if (item >= 23 && item < 32) {
            altoTones.push(item);
        }
        if (item >= 32) {
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
}


function getVoiceLeading(extensions) {
    // empty array to hold all voice leading options
    tempVoiceArray = [];
    // run function on entire progression
    for (let i = 0; i <= progression.length - 2; i++) {
        // only run on first time through
        if (i === 0) {
            // firstTone();
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
            console.log(i + ' time through')
            console.log('starting note is: ' + startingNote)
            // console.log(noteIndex.indexOf(startingNote));
            // console.log(i + ' TIME THROUGH');
            let chordMemberIndexArray = [];
            let differenceOfArray = [];

            function seventhChance() {
                if ( Math.floor(Math.random() * 3) === 1 ) {
                    return 1;
                } else {
                    return 2;
                }
            }
            
            if ( extensions === 'triad' ) {
                // length of resolveChord loop determines how many color tones are included. (-2) is triad, (-1) includes sevenths.
                for (let i = 1; i <= resolveChord.length - 2; i++) {
                    // gets index of all chord members in resolution chord
                    resolveChord[i][1].forEach((item) => chordMemberIndexArray.push(noteIndex.indexOf(item)));
                }
            } else if ( extensions === 'seventh' ) {
                for (let i = 1; i <= resolveChord.length - seventhChance(); i++) {
                    // gets index of all chord members in resolution chord
                    resolveChord[i][1].forEach((item) => chordMemberIndexArray.push(noteIndex.indexOf(item)));
                }
            }

            // array of all chord members
            // console.log('below is chordMemberIndexArray - indexes from noteIndex');
            // console.log(chordMemberIndexArray);

            chordMemberIndexArray.forEach((item) => {
                differenceOfArray.push(Math.abs(noteIndex.indexOf(startingNote) - item));
            });

            // Get smoothest
            // console.log('below is differenceOfArray - distance between notes in noteIndex');
            // console.log(differenceOfArray);

            // console.log('below is index within diffArray of smallest distance between startingNote and new chord members');
            // console.log(differenceOfArray.indexOf(Math.min(...differenceOfArray)));
            let indexOfSmallestDistanceInDiff = differenceOfArray.indexOf(Math.min(...differenceOfArray));

            // console.log('new note zone');
            // console.log('below is noteIndex index of smallest value');
            // console.log(chordMemberIndexArray[indexOfSmallestDistanceInDiff])
            // console.log('below is note at appropriate index from noteIndex');
            // console.log(noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]])
            let smoothestTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]];

            // Get next smoothest
            // remove first smoothest
            differenceOfArray.splice(indexOfSmallestDistanceInDiff, 1);
            chordMemberIndexArray.splice(indexOfSmallestDistanceInDiff, 1);



            indexOfSmallestDistanceInDiff = differenceOfArray.indexOf(Math.min(...differenceOfArray));
            let goodTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]];

            differenceOfArray.splice(indexOfSmallestDistanceInDiff, 1);
            chordMemberIndexArray.splice(indexOfSmallestDistanceInDiff, 1);

            indexOfSmallestDistanceInDiff = differenceOfArray.indexOf(Math.min(...differenceOfArray));
            let okayTransition = noteIndex[chordMemberIndexArray[indexOfSmallestDistanceInDiff]];

            let resolution;
            let currentNote = startingNote;


            let resolutionOptions = [smoothestTransition, goodTransition, okayTransition];

            // random chance of smoothest or next best voice-leading option
            function voiceLeadChance() {
                resolution = resolutionOptions[Math.floor(Math.random() * (resolutionOptions.length - 1))];
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


                if ( directionArray[i] === 'up' ) {
                    if ( directionUp ) {
                        resolution = directionUp;
                    }
                } else if ( directionArray[i] === 'down' ) {
                    if ( directionDown ) {
                        resolution = directionDown;
                    }
                }

                console.log(i, directionArray);

                console.log(directionUp, directionDown);

            }
            // smoothest or next best option
            voiceLeadChance();
            // check direction array for shift
            voiceLeadDirectionOptions();

            // assign resolution to startingNote for next loop through
            startingNote = resolution;
            // console.log(resolution);
            tempVoiceArray.push(resolution);
        }
        voiceLead(startingNote, resolveChord)

    }

}

let voicesTimer = 0;

function playVoices() {
    voicesTimer = 0;

    for (let i = 0; i <= progression.length - 1; i++) {
        setTimeout(() => {
            noteSwitch(bassVoiceArray[i]);
            noteSwitch(tenorVoiceArray[i]);
            noteSwitch(altoVoiceArray[i]);
            noteSwitch(sopranoVoiceArray[i]);
        }, voicesTimer + 700);
        voicesTimer = voicesTimer + 700;
    }
}

function arpeggiateVoices() {
    voicesTimer = 0;

    for (let i = 0; i <= progression.length - 1; i++) {
        setTimeout(() => {
            noteSwitch(bassVoiceArray[i]);
        }, voicesTimer + 100);
        setTimeout(() => {
            noteSwitch(tenorVoiceArray[i]);
        }, voicesTimer + 200);
        setTimeout(() => {
            noteSwitch(altoVoiceArray[i]);
        }, voicesTimer + 300);
        setTimeout(() => {
            noteSwitch(sopranoVoiceArray[i]);
        }, voicesTimer + 400);
        voicesTimer = voicesTimer + 1000;
    }
}

function playVoicesBlock() {
    voicesTimer = 0;

    for (let i = 0; i <= progression.length - 1; i++) {
        setTimeout(() => {
            chord(bassVoiceArray[i], tenorVoiceArray[i], altoVoiceArray[i], sopranoVoiceArray[i]);
        }, voicesTimer + 800);
        voicesTimer = voicesTimer + 800;
    }
}

// END of document 