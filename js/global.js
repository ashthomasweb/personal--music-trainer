//  Global variable JS file for "Music Trainer"

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
let lastRoundScore = 0; // playstate scorePush
let modeScore = "Major"; //

// helper variables for keyboard listener diads
let timer = 0;
let note;
let firstClick = 0;
let firstNote;

// send to local Storage
let pastScores = [];
let colorArray = []; // user saved values
let keyArray = [];

// pattern arrays
let melodyPat = [];
let userPat = [];

// rotating value for stopping audio
let currentAudio; 
let currentChord = [];

// END of document 
