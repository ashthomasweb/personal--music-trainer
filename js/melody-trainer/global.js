//  Global varialbe JS file for "Music Trainer"

// || WebAudio initialization
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCx = new AudioContext();


let freeModeBool = false;
let pracModeBool = false;
let klangBool = false;
let initialLoad = true;
let instPower = false;
let cadenceBool = false;
let accDisplayBool = true;

let pastScores = [];

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