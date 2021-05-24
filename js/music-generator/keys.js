//  Key specific roman numeral JS file for "Music Generator"


let keyOfBb = [

    {
        numeral: 'I',
        root: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        third: ['D2', 'D3', 'D4', 'D5', 'D6'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['A2', 'A3', 'A4', 'A5']
    },

    {
        numeral: 'ii',
        root: ['C2', 'C3', 'C4', 'C5', 'C6'],
        third: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        fifth: ['G2', 'G3', 'G4', 'G5'],
        seventh: ['Bb2', 'Bb3', 'Bb4', 'Bb5']
    },

    {
        numeral: 'iii',
        root: ['D2', 'D3', 'D4', 'D5', 'D6'],
        third: ['F2', 'F3', 'F4', 'F5'],
        fifth: ['A2', 'A3', 'A4', 'A5'],
        seventh: ['C2', 'C3', 'C4', 'C5', 'C6']
    },

    {
        numeral: 'IV',
        root: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        seventh: ['D2', 'D3', 'D4', 'D5', 'D6']
    },

    {
        numeral: 'V',
        root: ['F2', 'F3', 'F4', 'F5'],
        third: ['A2', 'A3', 'A4', 'A5'],
        fifth: ['C2', 'C3', 'C4', 'C5', 'C6'],
        seventh: ['Eb2', 'Eb3', 'Eb4', 'Eb5']
    },

    {
        numeral: 'vi',
        root: ['G2', 'G3', 'G4', 'G5'],
        third: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        fifth: ['D2', 'D3', 'D4', 'D5', 'D6'],
        seventh: ['F2', 'F3', 'F4', 'F5']
    },

    {
        numeral: 'vii∅',
        root: ['A2', 'A3', 'A4', 'A5'],
        third: ['C2', 'C3', 'C4', 'C5', 'C6'],
        fifth: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        seventh: ['G2', 'G3', 'G4', 'G5']
    },

    {
        numeral: 'i',
        root: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        third: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['Ab2', 'Ab3', 'Ab4', 'Ab5']
    },

    {
        numeral: 'imM6',
        root: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        third: ['Db2', 'Db3', 'Db4', 'Db5'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['G2', 'G3', 'G4', 'G5']
    },

    {
        numeral: 'ii∅',
        root: ['C2', 'C3', 'C4', 'C5', 'C6'],
        third: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        fifth: ['Gb2', 'Gb3', 'Gb4', 'Gb5'],
        seventh: ['Bb2', 'Bb3', 'Bb4', 'Bb5']
    },

    {
        numeral: 'bIII',
        root: ['Db2', 'Db3', 'Db4', 'Db5'],
        third: ['F2', 'F3', 'F4', 'F5'],
        fifth: ['Ab2', 'Ab3', 'Ab4', 'Ab5'],
        seventh: ['C2', 'C3', 'C4', 'C5', 'C6']
    },

    {
        numeral: 'iv',
        root: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        third: ['Gb2', 'Gb3', 'Gb4', 'Gb5'],
        fifth: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        seventh: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6']
    },

    {
        numeral: 'IV7',
        root: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        seventh: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6']
    },

    {
        numeral: 'bVI',
        root: ['Gb2', 'Gb3', 'Gb4', 'Gb5'],
        third: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        fifth: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6'],
        seventh: ['F2', 'F3', 'F4', 'F5']
    },

    {
        numeral: 'vi∅',
        root: ['G2', 'G3', 'G4', 'G5'],
        third: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        fifth: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6'],
        seventh: ['F2', 'F3', 'F4', 'F5']
    },

    {
        numeral: 'bVII',
        root: ['Ab2', 'Ab3', 'Ab4', 'Ab5'],
        third: ['C2', 'C3', 'C4', 'C5', 'C6'],
        fifth: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        seventh: ['Gb2', 'Gb3', 'Gb4', 'Gb5']
    },

    {
        numeral: 'vii°',
        root: ['A2', 'A3', 'A4', 'A5'],
        third: ['C2', 'C3', 'C4', 'C5', 'C6'],
        fifth: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        seventh: ['Gb2', 'Gb3', 'Gb4', 'Gb5']
    },

];




let keyOfF = [

    {
        numeral: 'I',
        root: ['F2', 'F3', 'F4', 'F5'],
        third: ['A2', 'A3', 'A4', 'A5'],
        fifth: ['C2', 'C3', 'C4', 'C5', 'C6'],
        seventh: ['E2', 'E3', 'E4', 'E5']
    },

    {
        numeral: 'ii',
        root: ['G2', 'G3', 'G4', 'G5'],
        third: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        fifth: ['D2', 'D3', 'D4', 'D5', 'D6'],
        seventh: ['F2', 'F3', 'F4', 'F5']
    },

    {
        numeral: 'iii',
        root: ['A2', 'A3', 'A4', 'A5'],
        third: ['C2', 'C3', 'C4', 'C5', 'C6'],
        fifth: ['E2', 'E3', 'E4', 'E5'],
        seventh: ['G2', 'G3', 'G4', 'G5']
    },

    {
        numeral: 'IV',
        root: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        third: ['D2', 'D3', 'D4', 'D5', 'D6'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['A2', 'A3', 'A4', 'A5']
    },

    {
        numeral: 'V',
        root: ['C2', 'C3', 'C4', 'C5', 'C6'],
        third: ['E2', 'E3', 'E4', 'E5'],
        fifth: ['G2', 'G3', 'G4', 'G5'],
        seventh: ['Bb2', 'Bb3', 'Bb4', 'Bb5']
    },

    {
        numeral: 'vi',
        root: ['D2', 'D3', 'D4', 'D5', 'D6'],
        third: ['F2', 'F3', 'F4', 'F5'],
        fifth: ['A2', 'A3', 'A4', 'A5'],
        seventh: ['C2', 'C3', 'C4', 'C5', 'C6']
    },

    {
        numeral: 'vii∅',
        root: ['E2', 'E3', 'E4', 'E5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        seventh: ['D2', 'D3', 'D4', 'D5', 'D6']
    },

    {
        numeral: 'i',
        root: ['F2', 'F3', 'F4', 'F5'],
        third: ['Ab2', 'Ab3', 'Ab4', 'Ab5'],
        fifth: ['C2', 'C3', 'C4', 'C5', 'C6'],
        seventh: ['Eb2', 'Eb3', 'Eb4', 'Eb5']
    },

    {
        numeral: 'imM6',
        root: ['F2', 'F3', 'F4', 'F5'],
        third: ['Ab2', 'Ab3', 'Ab4', 'Ab5'],
        fifth: ['C2', 'C3', 'C4', 'C5', 'C6'],
        seventh: ['D2', 'D3', 'D4', 'D5']
    },

    {
        numeral: 'ii∅',
        root: ['G2', 'G3', 'G4', 'G5'],
        third: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        fifth: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6'],
        seventh: ['F2', 'F3', 'F4', 'F5']
    },

    {
        numeral: 'bIII',
        root: ['Ab2', 'Ab3', 'Ab4', 'Ab5'],
        third: ['C2', 'C3', 'C4', 'C5', 'C6'],
        fifth: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        seventh: ['G2', 'G3', 'G4', 'G5']
    },

    {
        numeral: 'iv',
        root: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        third: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['Ab2', 'Ab3', 'Ab4', 'Ab5']
    },

    {
        numeral: 'IV7',
        root: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        third: ['D2', 'D3', 'D4', 'D5', 'D6'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['Ab2', 'Ab3', 'Ab4', 'Ab5']
    },

    {
        numeral: 'bVI',
        root: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6'],
        third: ['F2', 'F3', 'F4', 'F5'],
        fifth: ['Ab2', 'Ab3', 'Ab4', 'Ab5'],
        seventh: ['C2', 'C3', 'C4', 'C5', 'C6']
    },

    {
        numeral: 'vi∅',
        root: ['D2', 'D3', 'D4', 'D5', 'D6'],
        third: ['F2', 'F3', 'F4', 'F5'],
        fifth: ['Ab2', 'Ab3', 'Ab4', 'Ab5'],
        seventh: ['C2', 'C3', 'C4', 'C5', 'C6']
    },

    {
        numeral: 'bVII',
        root: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        seventh: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6']
    },

    {
        numeral: 'vii°',
        root: ['E2', 'E3', 'E4', 'E5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        seventh: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6']
    },

];

let keyOfC = [

    {
        numeral: 'I',
        root: ['C2', 'C3', 'C4', 'C5', 'C6'],
        third: ['E2', 'E3', 'E4', 'E5'],
        fifth: ['G2', 'G3', 'G4', 'G5'],
        seventh: ['B1', 'B2', 'B3', 'B4', 'B5']
    },

    {
        numeral: 'ii',
        root: ['D2', 'D3', 'D4', 'D5', 'D6'],
        third: ['F2', 'F3', 'F4', 'F5'],
        fifth: ['A2', 'A3', 'A4', 'A5'],
        seventh: ['C2', 'C3', 'C4', 'C5', 'C6']
    },

    {
        numeral: 'iii',
        root: ['E2', 'E3', 'E4', 'E5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['B1', 'B2', 'B3', 'B4', 'B5'],
        seventh: ['D2', 'D3', 'D4', 'D5', 'D6']
    },

    {
        numeral: 'IV',
        root: ['F2', 'F3', 'F4', 'F5'],
        third: ['A2', 'A3', 'A4', 'A5'],
        fifth: ['C2', 'C3', 'C4', 'C5', 'C6'],
        seventh: ['E2', 'E3', 'E4', 'E5']
    },

    {
        numeral: 'V',
        root: ['G2', 'G3', 'G4', 'G5'],
        third: ['B1', 'B2', 'B3', 'B4', 'B5'],
        fifth: ['D2', 'D3', 'D4', 'D5', 'D6'],
        seventh: ['F2', 'F3', 'F4', 'F5']
    },

    {
        numeral: 'vi',
        root: ['A2', 'A3', 'A4', 'A5'],
        third: ['C2', 'C3', 'C4', 'C5', 'C6'],
        fifth: ['E2', 'E3', 'E4', 'E5'],
        seventh: ['G2', 'G3', 'G4', 'G5']
    },

    {
        numeral: 'vii∅',
        root: ['B1', 'B2', 'B3', 'B4', 'B5'],
        third: ['D2', 'D3', 'D4', 'D5', 'D6'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['A2', 'A3', 'A4', 'A5']
    },

    {
        numeral: 'i',
        root: ['C2', 'C3', 'C4', 'C5', 'C6'],
        third: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        fifth: ['G2', 'G3', 'G4', 'G5'],
        seventh: ['Bb2', 'Bb3', 'Bb4', 'Bb5']
    },

    {
        numeral: 'ii∅',
        root: ['D2', 'D3', 'D4', 'D5', 'D6'],
        third: ['F2', 'F3', 'F4', 'F5'],
        fifth: ['Ab2', 'Ab3', 'Ab4', 'Ab5'],
        seventh: ['C2', 'C3', 'C4', 'C5', 'C6']
    },

    {
        numeral: 'bIII',
        root: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        seventh: ['D2', 'D3', 'D4', 'D5', 'D6']
    },

    {
        numeral: 'iv',
        root: ['F2', 'F3', 'F4', 'F5'],
        third: ['Ab2', 'Ab3', 'Ab4', 'Ab5'],
        fifth: ['C2', 'C3', 'C4', 'C5', 'C6'],
        seventh: ['Eb2', 'Eb3', 'Eb4', 'Eb5']
    },

    {
        numeral: 'bVI',
        root: ['Ab2', 'Ab3', 'Ab4', 'Ab5'],
        third: ['C2', 'C3', 'C4', 'C5', 'C6'],
        fifth: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        seventh: ['G2', 'G3', 'G4', 'G5']
    },

    {
        numeral: 'bVII',
        root: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        third: ['D2', 'D3', 'D4', 'D5', 'D6'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['Ab2', 'Ab3', 'Ab4', 'Ab5']
    },

    {
        numeral: 'imM6',
        root: ['C2', 'C3', 'C4', 'C5', 'C6'],
        third: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        fifth: ['G2', 'G3', 'G4', 'G5'],
        seventh: ['A2', 'A3', 'A4', 'A5']
    },

    {
        numeral: 'IV7',
        root: ['F2', 'F3', 'F4', 'F5'],
        third: ['A2', 'A3', 'A4', 'A5'],
        fifth: ['C2', 'C3', 'C4', 'C5', 'C6'],
        seventh: ['Eb2', 'Eb3', 'Eb4', 'Eb5']
    },

    {
        numeral: 'vi∅',
        root: ['A2', 'A3', 'A4', 'A5'],
        third: ['C2', 'C3', 'C4', 'C5', 'C6'],
        fifth: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        seventh: ['G2', 'G3', 'G4', 'G5']
    },

    {
        numeral: 'vii°',
        root: ['B2', 'B3', 'B4', 'B5'],
        third: ['D2', 'D3', 'D4', 'D5', 'D6'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['Ab2', 'Ab3', 'Ab4', 'Ab5']
    }
];

let keyOfG = [

    {
        numeral: 'I',
        root: ['G2', 'G3', 'G4', 'G5'],
        third: ['B1', 'B2', 'B3', 'B4', 'B5'],
        fifth: ['D2', 'D3', 'D4', 'D5', 'D6'],
        seventh: ['Gb2', 'Gb3', 'Gb4', 'Gb5']
    },

    {
        numeral: 'ii',
        root: ['A2', 'A3', 'A4', 'A5'],
        third: ['C2', 'C3', 'C4', 'C5', 'C6'],
        fifth: ['E2', 'E3', 'E4', 'E5'],
        seventh: ['G2', 'G3', 'G4', 'G5']
    },

    {
        numeral: 'iii',
        root: ['B1', 'B2', 'B3', 'B4', 'B5'],
        third: ['D2', 'D3', 'D4', 'D5', 'D6'],
        fifth: ['Gb2', 'Gb3', 'Gb4', 'Gb5'],
        seventh: ['A2', 'A3', 'A4', 'A5']
    },

    {
        numeral: 'IV',
        root: ['C2', 'C3', 'C4', 'C5', 'C6'],
        third: ['E2', 'E3', 'E4', 'E5'],
        fifth: ['G2', 'G3', 'G4', 'G5'],
        seventh: ['B1', 'B2', 'B3', 'B4', 'B5']
    },

    {
        numeral: 'V',
        root: ['D2', 'D3', 'D4', 'D5', 'D6'],
        third: ['Gb2', 'Gb3', 'Gb4', 'Gb5'],
        fifth: ['A2', 'A3', 'A4', 'A5'],
        seventh: ['C2', 'C3', 'C4', 'C5', 'C6']
    },

    {
        numeral: 'vi',
        root: ['E2', 'E3', 'E4', 'E5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['B1', 'B2', 'B3', 'B4', 'B5'],
        seventh: ['D2', 'D3', 'D4', 'D5', 'D6']
    },

    {
        numeral: 'vii∅',
        root: ['Gb2', 'Gb3', 'Gb4', 'Gb5'],
        third: ['A2', 'A3', 'A4', 'A5'],
        fifth: ['C2', 'C3', 'C4', 'C5', 'C6'],
        seventh: ['E2', 'E3', 'E4', 'E5']
    },

    {
        numeral: 'i',
        root: ['G2', 'G3', 'G4', 'G5'],
        third: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        fifth: ['D2', 'D3', 'D4', 'D5', 'D6'],
        seventh: ['F2', 'F3', 'F4', 'F5']
    },

    {
        numeral: 'imM6',
        root: ['G2', 'G3', 'G4', 'G5'],
        third: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        fifth: ['D2', 'D3', 'D4', 'D5', 'D6'],
        seventh: ['E2', 'E3', 'E4', 'E5']
    },

    {
        numeral: 'ii∅',
        root: ['A2', 'A3', 'A4', 'A5'],
        third: ['C2', 'C3', 'C4', 'C5', 'C6'],
        fifth: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        seventh: ['G2', 'G3', 'G4', 'G5']
    },

    {
        numeral: 'bIII',
        root: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        third: ['D2', 'D3', 'D4', 'D5', 'D6'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['A2', 'A3', 'A4', 'A5']
    },

    {
        numeral: 'IV7',
        root: ['C2', 'C3', 'C4', 'C5', 'C6'],
        third: ['E2', 'E3', 'E4', 'E5'],
        fifth: ['G2', 'G3', 'G4', 'G5'],
        seventh: ['Bb2', 'Bb3', 'Bb4', 'Bb5']
    },

    {
        numeral: 'iv',
        root: ['C2', 'C3', 'C4', 'C5', 'C6'],
        third: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        fifth: ['G2', 'G3', 'G4', 'G5'],
        seventh: ['Bb2', 'Bb3', 'Bb4', 'Bb5']
    },

    {
        numeral: 'bVI',
        root: ['Eb2', 'Eb3', 'Eb4', 'Eb5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        seventh: ['D2', 'D3', 'D4', 'D5', 'D6']
    },

    {
        numeral: 'vi∅',
        root: ['E2', 'E3', 'E4', 'E5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        seventh: ['D2', 'D3', 'D4', 'D5', 'D6']
    },

    {
        numeral: 'bVII',
        root: ['F2', 'F3', 'F4', 'F5'],
        third: ['A2', 'A3', 'A4', 'A5'],
        fifth: ['C2', 'C3', 'C4', 'C5', 'C6'],
        seventh: ['Eb2', 'Eb3', 'Eb4', 'Eb5']
    },

    {
        numeral: 'vii°',
        root: ['Gb2', 'Gb3', 'Gb4', 'Gb5'],
        third: ['A2', 'A3', 'A4', 'A5'],
        fifth: ['C2', 'C3', 'C4', 'C5', 'C6'],
        seventh: ['Eb2', 'Eb3', 'Eb4', 'Eb5']
    }
];


let keyOfD = [

    {
        numeral: 'I',
        root: ['D2', 'D3', 'D4', 'D5', 'D6'],
        third: ['Gb2', 'Gb3', 'Gb4', 'Gb5'],
        fifth: ['A2', 'A3', 'A4', 'A5'],
        seventh: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6']
    },

    {
        numeral: 'ii',
        root: ['E2', 'E3', 'E4', 'E5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['B1', 'B2', 'B3', 'B4', 'B5'],
        seventh: ['D2', 'D3', 'D4', 'D5', 'D6']
    },

    {
        numeral: 'iii',
        root: ['Gb2', 'Gb3', 'Gb4', 'Gb5'],
        third: ['A2', 'A3', 'A4', 'A5'],
        fifth: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6'],
        seventh: ['E2', 'E3', 'E4', 'E5']
    },

    {
        numeral: 'IV',
        root: ['G2', 'G3', 'G4', 'G5'],
        third: ['B1', 'B2', 'B3', 'B4', 'B5'],
        fifth: ['D2', 'D3', 'D4', 'D5', 'D6'],
        seventh: ['Gb2', 'Gb3', 'Gb4', 'Gb5']
    },

    {
        numeral: 'V',
        root: ['A2', 'A3', 'A4', 'A5'],
        third: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6'],
        fifth: ['E2', 'E3', 'E4', 'E5'],
        seventh: ['G2', 'G3', 'G4', 'G5']
    },

    {
        numeral: 'vi',
        root: ['B1', 'B2', 'B3', 'B4', 'B5'],
        third: ['D2', 'D3', 'D4', 'D5', 'D6'],
        fifth: ['Gb2', 'Gb3', 'Gb4', 'Gb5'],
        seventh: ['A2', 'A3', 'A4', 'A5']
    },

    {
        numeral: 'vii∅',
        root: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6'],
        third: ['E2', 'E3', 'E4', 'E5'],
        fifth: ['G2', 'G3', 'G4', 'G5'],
        seventh: ['B1', 'B2', 'B3', 'B4', 'B5']
    },

    {
        numeral: 'i',
        root: ['D2', 'D3', 'D4', 'D5', 'D6'],
        third: ['F2', 'F3', 'F4', 'F5'],
        fifth: ['A2', 'A3', 'A4', 'A5'],
        seventh: ['C2', 'C3', 'C4', 'C5', 'C6']
    },

    {
        numeral: 'imM6',
        root: ['D2', 'D3', 'D4', 'D5', 'D6'],
        third: ['F2', 'F3', 'F4', 'F5'],
        fifth: ['A2', 'A3', 'A4', 'A5'],
        seventh: ['B2', 'B3', 'B4', 'B5']
    },

    {
        numeral: 'ii∅',
        root: ['E2', 'E3', 'E4', 'E5'],
        third: ['G2', 'G3', 'G4', 'G5'],
        fifth: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        seventh: ['D2', 'D3', 'D4', 'D5', 'D6']
    },

    {
        numeral: 'bIII',
        root: ['F2', 'F3', 'F4', 'F5'],
        third: ['A2', 'A3', 'A4', 'A5'],
        fifth: ['C2', 'C3', 'C4', 'C5', 'C6'],
        seventh: ['E2', 'E3', 'E4', 'E5']
    },

    {
        numeral: 'iv',
        root: ['G2', 'G3', 'G4', 'G5'],
        third: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        fifth: ['D2', 'D3', 'D4', 'D5', 'D6'],
        seventh: ['F2', 'F3', 'F4', 'F5']
    },

    {
        numeral: 'IV7',
        root: ['G2', 'G3', 'G4', 'G5'],
        third: ['B2', 'B3', 'B4', 'B5'],
        fifth: ['D2', 'D3', 'D4', 'D5', 'D6'],
        seventh: ['F2', 'F3', 'F4', 'F5']
    },

    {
        numeral: 'V',
        root: ['A2', 'A3', 'A4', 'A5'],
        third: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6'],
        fifth: ['E2', 'E3', 'E4', 'E5'],
        seventh: ['G2', 'G3', 'G4', 'G5']
    },

    {
        numeral: 'bVI',
        root: ['Bb2', 'Bb3', 'Bb4', 'Bb5'],
        third: ['D2', 'D3', 'D4', 'D5', 'D6'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['A2', 'A3', 'A4', 'A5']
    },

    {
        numeral: 'vi∅',
        root: ['B2', 'B3', 'B4', 'B5'],
        third: ['D2', 'D3', 'D4', 'D5', 'D6'],
        fifth: ['F2', 'F3', 'F4', 'F5'],
        seventh: ['A2', 'A3', 'A4', 'A5']
    },

    {
        numeral: 'bVII',
        root: ['C2', 'C3', 'C4', 'C5', 'C6'],
        third: ['E2', 'E3', 'E4', 'E5'],
        fifth: ['G2', 'G3', 'G4', 'G5'],
        seventh: ['Bb2', 'Bb3', 'Bb4', 'Bb5']
    },

    {
        numeral: 'vii°',
        root: ['Db2', 'Db3', 'Db4', 'Db5', 'Db6'],
        third: ['E2', 'E3', 'E4', 'E5'],
        fifth: ['G2', 'G3', 'G4', 'G5'],
        seventh: ['Bb2', 'Bb3', 'Bb4', 'Bb5']
    },
];



// END of document