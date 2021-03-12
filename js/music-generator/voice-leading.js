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



function getStartTones() {

    let firstChord = progression[0];

    for (let i = 0; i <= romanNumerals.length - 1; i++) {
        if (romanNumerals[i][0] === firstChord) {
            firstChord = romanNumerals[i];
            startingNote = romanNumerals[i][1][1][0];
        }
    }

    bass();

    startingNote = firstChord[2][1][firstChord[2][1].length-1];

    soprano();

    startingNote = firstChord[3][1][Math.floor(Math.random() * firstChord[3][1].length - 1)];

    tenor();
    
    startingNote = firstChord[1][1][Math.floor(Math.random() * firstChord[3][1].length - 1)];

    alto();

    console.log(bassVoiceArray);
    console.log(tenorVoiceArray);
    console.log(altoVoiceArray);
    console.log(sopranoVoiceArray);
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
            for (let i = 1; i <= resolveChord.length - 2; i++) {
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