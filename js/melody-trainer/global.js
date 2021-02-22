//  Global varialbe JS file for "Music Trainer"

// || WebAudio initialization
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCx = new AudioContext();

let noteArray = ['C5', 'B4', 'Bb4', 'A4', 'Ab4', 'G4', 'Gb4', 'F4', 'E4', 'Eb4', 'D4', 'Db4', 'C4', 'B3', 'Bb3', 'A3', 'Ab3', 'G3', 'Gb3']
let freeModeBool = false;
let pracModeBool = false;
let klangBool = false;
let initialLoad = true;
let instPower = false;
let cadenceBool = false;
let accDisplayBool = true;
let accModeBool = false;
let tonicStartBool = false;
let colorPickBool = false;
let keyboardBool = false;

let assignBtns = Array.from(document.getElementsByClassName('keypress-btn'));
let diffArray = []

// send to local Storage
let pastScores = [];
let colorArray = [];
let keyArray = [];



// helper function variables
let instrumentChoice;
let instrumentPos;
let modeType;

let lastRoundScore = 0;

let modeScore = "Major";

let melodyPat = [];
let userPat = [];

let noteButtonArray = document.getElementsByClassName("note-btn");
let currentAudio; 

// END of document 