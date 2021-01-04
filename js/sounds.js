/* Sound array and picker functions for "The Arnold Game"            

/* SOUNDS ARRAYS AND PICKER */

function soundBankPicker() {
    player1Sounds = soundBank[Math.floor(Math.random() * 2)];
}

function forceArnold() { 
    player1Sounds = pianoAnhemMajorC; 
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
    if (player1Sounds == pianoAnhemMajorC ) {
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

var pianoAnhemMajorC = [
    "sounds/piano/piano-C4.mp3",
    "sounds/piano/piano-D4.mp3",
    "sounds/piano/piano-E4.mp3",
    "sounds/piano/piano-G4.mp3",
    "sounds/piano/piano-A4.mp3",
    // "sounds/piano/piano-C5.mp3"
] 

var frenchHornAnhemMajorC = [
    "sounds/french-horn/french-horn-C4.mp3",
    "sounds/french-horn/french-horn-D4.mp3",
    "sounds/french-horn/french-horn-E4.mp3",
    "sounds/french-horn/french-horn-G4.mp3",
    "sounds/french-horn/french-horn-A4.mp3",
    // "sounds/french-horn/french-horn-C5.mp3"
] 
 

soundBank = [pianoAnhemMajorC, frenchHornAnhemMajorC ];

/* END of document */