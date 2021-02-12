//  Global varialbe JS file for "Music Trainer"

// || WebAudio initialization
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCx = new AudioContext();


let freeModeBool = false;
let klangBool = false;
let initialLoad = true;
let instPower = false;
let cadenceBool = false;

let pastScores = [];

// helper function variables
let instrumentChoice;
let instrumentPos;

let lastRoundScore = 0;
let allScores = [];
let modeScore = "Chromatic";

let melodyPat = [];
let userPat = [];
// END of document 