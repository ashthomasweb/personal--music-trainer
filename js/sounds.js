/* Sound array and picker functions for "The Arnold Game"            

/* SOUNDS ARRAYS AND PICKER */

function soundBankPicker() {
    player1Sounds = soundBank[Math.floor(Math.random() * 3)];
}

function forceArnold() { 
    player1Sounds = pianoChromaticC; 
} 

function arnoldModeSwitch() { 
    player1Sounds = soundBank[arnoldCounter]; 

    if (arnoldCounter == soundBank.length - 1) { 
        arnoldCounter = 0; 
    } else { 
        arnoldCounter++; 
    } 

}

$("#forceArnold").on("dblclick", function () { 
    $("#forceArnold").css("color", "red"); 
    arnoldBool = true; 
});

$("#forceArnold").on("click", function () {
    if ( player1Sounds == pianoChromaticC ) {
        arnoldCounter++;
    }

    player1Sounds = soundBank[arnoldCounter];
    arnoldBool = false;

    if (arnoldCounter == soundBank.length - 1) {
        arnoldCounter = 0;
    } else {
        arnoldCounter++;
    }

    $("#forceArnold").css("color", colorGen);
});

var pianoChromaticC = [
    "sounds/piano/piano-C4.mp3",
    "sounds/piano/piano-Db4.mp3",
    "sounds/piano/piano-D4.mp3",
    "sounds/piano/piano-Eb4.mp3",
    "sounds/piano/piano-E4.mp3",
    "sounds/piano/piano-F4.mp3",
    "sounds/piano/piano-Gb4.mp3",
    "sounds/piano/piano-G4.mp3",
    "sounds/piano/piano-Ab4.mp3",
    "sounds/piano/piano-A4.mp3",
    "sounds/piano/piano-Bb4.mp3",
    "sounds/piano/piano-B4.mp3",
    "sounds/piano/piano-C5.mp3",
    "sounds/piano/piano-C5.mp3"
] 

var frenchHornChromaticC = [
    "sounds/french-horn/french-horn-C4.mp3",
    "sounds/french-horn/french-horn-Db4.mp3",
    "sounds/french-horn/french-horn-D4.mp3",
    "sounds/french-horn/french-horn-Eb4.mp3",
    "sounds/french-horn/french-horn-E4.mp3",
    "sounds/french-horn/french-horn-F4.mp3",
    "sounds/french-horn/french-horn-Gb4.mp3",
    "sounds/french-horn/french-horn-G4.mp3",
    "sounds/french-horn/french-horn-Ab4.mp3",
    "sounds/french-horn/french-horn-A4.mp3",
    "sounds/french-horn/french-horn-Bb4.mp3",
    "sounds/french-horn/french-horn-B4.mp3",
    "sounds/french-horn/french-horn-C5.mp3",
    "sounds/french-horn/french-horn-C5.mp3"
] 

var violinChromaticC = [
    "sounds/violin/violin-C4.mp3",
    "sounds/violin/violin-Db4.mp3",
    "sounds/violin/violin-D4.mp3",
    "sounds/violin/violin-Eb4.mp3",
    "sounds/violin/violin-E4.mp3",
    "sounds/violin/violin-F4.mp3",
    "sounds/violin/violin-Gb4.mp3",
    "sounds/violin/violin-G4.mp3",
    "sounds/violin/violin-Ab4.mp3",
    "sounds/violin/violin-A4.mp3",
    "sounds/violin/violin-Bb4.mp3",
    "sounds/violin/violin-B4.mp3",
    "sounds/violin/violin-C5.mp3",
    "sounds/violin/violin-C5.mp3"
] 


soundBank = [pianoChromaticC, frenchHornChromaticC, violinChromaticC ];

/* END of document */