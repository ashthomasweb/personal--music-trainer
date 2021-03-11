let noteIndex = ['Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5'];

let romanNumerals = [
    ['I',
        ['root', ['C4']],
        ['third', ['E4']],
        ['fifth', ['G3', 'G4']],
        ['seventh', ['B3', 'B4']]
    ],

    ['ii',
        ['root', ['D4']],
        ['third', ['F4']],
        ['fifth', ['A3', 'A4']],
        ['seventh', ['C4', 'C5']]
    ],


    ['iii',
        ['root', ['E4']],
        ['third', ['G3', 'G4']],
        ['fifth', ['B3', 'B4']],
        ['seventh', ['D4']]
    ],


    ['IV',
        ['root', ['F4']],
        ['third', ['A3', 'A4']],
        ['fifth', ['C4', 'C5']],
        ['seventh', ['E4']]
    ],

    ['V',
        ['root', ['G3', 'G4']],
        ['third', ['B3', 'B4']],
        ['fifth', ['D4']],
        ['seventh', ['F4', ]]
    ],

    ['vi',
        ['root', ['A3', 'A4']],
        ['third', ['C4', 'C5']],
        ['fifth', ['E4']],
        ['seventh', ['G3', 'G4']]
    ],

    ['vii',
        ['root', ['B3', 'B4']],
        ['third', ['D4']],
        ['fifth', ['F4']],
        ['seventh', ['A3', 'A4']]
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
    getVoiceLeading();
    bassVoiceArray = [...tempVoiceArray];
}

function tenor() {
    getVoiceLeading();
    tenorVoiceArray = [...tempVoiceArray];
}

function alto() {
    getVoiceLeading();
    altoVoiceArray = [...tempVoiceArray];
}

function soprano() {
    getVoiceLeading();
    sopranoVoiceArray = [...tempVoiceArray];
}



function getVoiceLeading() {

    tempVoiceArray = [];
    for (let i = 0; i <= progression.length - 2; i++) {
        console.log(i + ' time through')

        if (i === 0) {
            // firstTone();
            // console.log(startingNote);
            tempVoiceArray.push(startingNote)
        }

        let startingChord = progression[i];
        let resolveChord = progression[i + 1];

        for (let i = 0; i <= romanNumerals.length - 1; i++) {
            if (romanNumerals[i][0] === resolveChord) {
                resolveChord = romanNumerals[i];
            }
        }

        // console.log(startingChord);
        // console.log(startingNote);
        // console.log(resolveChord);

        function voiceLead(startingNote, resolveChord) {
            let chordMemberIndexArray = [];
            let differenceOfArray = [];
            for (let i = 1; i <= resolveChord.length - 1; i++) {
                resolveChord[i][1].forEach((item) => chordMemberIndexArray.push(noteIndex.indexOf(item)));
            }
            // console.log('this is chordMemberIndexArray');
            // console.log(chordMemberIndexArray);
            chordMemberIndexArray.forEach((item) => {
                differenceOfArray.push(Math.abs(noteIndex.indexOf(startingNote) - item));
            });
            // console.log('this is differenceOfArray');
            // console.log(differenceOfArray);

            // console.log('this is smallest distance between startingNote and new chord members');
            // console.log(differenceOfArray.indexOf(Math.min(...differenceOfArray)));

            // console.log('this is index of smallest value');
            // console.log(chordMemberIndexArray[differenceOfArray.indexOf(Math.min(...differenceOfArray))])

            // console.log('this is note at appropriate index');
            // console.log(noteIndex[chordMemberIndexArray[differenceOfArray.indexOf(Math.min(...differenceOfArray))]])

            let resolution = noteIndex[chordMemberIndexArray[differenceOfArray.indexOf(Math.min(...differenceOfArray))]];
            startingNote = resolution;
            tempVoiceArray.push(resolution);
        }
        // console.log(voiceLead(startingNote, resolveChord));
        voiceLead(startingNote, resolveChord)

    }
    console.log(tempVoiceArray);

}

let voicesTimer = 0;

function playVoices() {
    voicesTimer = 0;

    for (let i = 0; i <= progression.length - 1; i++) {
        setTimeout(() => {
            // chord(bassVoiceArray[i], tenorVoiceArray[i], altoVoiceArray[i], sopranoVoiceArray[i]);
            noteSwitch(bassVoiceArray[i]);
            noteSwitch(tenorVoiceArray[i]);
            noteSwitch(altoVoiceArray[i]);
            noteSwitch(sopranoVoiceArray[i]);
        }, voicesTimer + 400);
        voicesTimer = voicesTimer + 400;
    }
}

function playVoicesBlock() {
    voicesTimer = 0;

    for (let i = 0; i <= progression.length - 1; i++) {
        setTimeout(() => {
            chord(bassVoiceArray[i], tenorVoiceArray[i], altoVoiceArray[i], sopranoVoiceArray[i]);
            // noteSwitch(bassVoiceArray[i]);
            // noteSwitch(tenorVoiceArray[i]);
            // noteSwitch(altoVoiceArray[i]);
            // noteSwitch(sopranoVoiceArray[i]);
        }, voicesTimer + 800);
        voicesTimer = voicesTimer + 800;
    }
}