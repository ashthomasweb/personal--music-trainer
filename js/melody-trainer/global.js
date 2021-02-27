//  Global variable JS file for "Music Trainer"

// || WebAudio initialization
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCx = new AudioContext();

// common element arrays
let noteArray = ['C5', 'B4', 'Bb4', 'A4', 'Ab4', 'G4', 'Gb4', 'F4', 'E4', 'Eb4', 'D4', 'Db4', 'C4', 'B3', 'Bb3', 'A3', 'Ab3', 'G3', 'Gb3'];
let noteButtonArray = document.getElementsByClassName("note-btn");
let assignBtns = Array.from(document.getElementsByClassName('keypress-btn'));
let colorPicker = Array.from(document.getElementsByClassName('color-picker'));

// webAudio powerSwitch
let instrumentPower = false; 
let initialLoad = true; 

// toggle booleans
let freeModeBool = false;
let pracModeBool = false;
let klangBool = false; // switch instruments every note
let accDisplayBool = true; // show accidentals
let accModeBool = false; // allow accidentals during practice
let tonicStartBool = false; // force tonic on round one of practice
let colorPickBool = false; // color assignment display
let keyboardBool = false; // keyboard assignment display
let cadenceBool = false; // if cadence is playing

// helper function variables
let diffArray = [] // finding notes not displayed
let instrumentChoice; // instrumentCycle
let instrumentPos; // instrumentCycle
let modeType; // mode triad quality
let lastRoundScore = 0; // playstate scorePush
let modeScore = "Major"; //

// send to local Storage
let pastScores = [];
let colorArray = []; // user saved values
let keyArray = []; // user saved values

// pattern arrays
let melodyPat = [];
let userPat = [];

// rotating value for stopping audio
let currentAudio; 

// END of document 
