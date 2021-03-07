
// array of instrument sources
let instrumentBank = [
    pianoSource // change to percussion sounds
   
];

function powerSwitch() {
    // let noteContainer = document.getElementsByClassName('note-container')[0]; // change to generator container
    let instrumentBtn = document.getElementsByClassName('dropdown')[0].children[0];
    let modeBtn = document.getElementsByClassName('dropdown')[1].children[0];

    let practiceBtn = document.getElementsByClassName('header')[0].children[4];
    let powerSwitch = document.getElementById("power-switch");
    let btnsToDisplay = [instrumentBtn, practiceBtn, modeBtn];

    if (instrumentPower === true) {
        instrumentPower = !instrumentPower;
        audioCx.suspend;
        // userPointerOff();
        // endPractice();
        // freeModeBool && freeModeToggle();

        // ghost out notes and instrument selection button
        powerSwitch.style.backgroundColor = "rgb(239, 239, 239)"; 
        // noteContainer.style.pointerEvents = 'none';  // change to generator container
        btnsToDisplay.forEach((item) => {
            item.style.opacity = '0.1';
            item.style.pointerEvents = 'none';
        });


    } else if (instrumentPower === false) {
        instrumentPower = !instrumentPower;
        audioCx.resume;
        // userPointerOn();
        // freeModeToggle();

        // activate notes and instrument selection button
        powerSwitch.style.backgroundColor = "pink";
        // noteContainer.style.pointerEvents = 'auto'; // change to generator container
        btnsToDisplay.forEach((item) => {
            item.style.opacity = '1';
            item.style.pointerEvents = 'auto';
        });

        if (initialLoad === true) {
            initialLoad = !initialLoad;
            instrumentCycle();
        }

    }
}


function playNotePromise(url) {
    return new Promise(function (resolve, reject) {
        // webAudio url
        var audio = url;
        currentAudio = audio;
        // play when loaded
        audio.play();
        audio.onerror = reject;
        audio.onended = resolve;
    });
}

// named event listener
function playSound() {

    // resume audioCx
    if (audioCx.state === 'suspended') {
        audioCx.resume();
    }

    // // stop currently playing audio. needs refactor as gain decrease for legato feel
    // if (currentAudio === undefined || cadenceBool == true) {
    //     // do nothing
    // } else {
    //     currentAudio.pause();
    //     currentAudio.currentTime = 0;
    // }

    // animate sounding note
    let wrap = this.parentElement;
    // console.log(wrap);
    lightUp(wrap);

    // play note and repeat note condition
    if (noteButtonArray[i].dataset.playing === 'false') {
        playNotePromise(instrumentChoice[0][i]).then(function () {
            noteButtonArray[i].dataset.playing = 'false'
        });
        noteButtonArray[i].dataset.playing = 'true';
    } else if (noteButtonArray[i].dataset.playing === 'true') {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        playNotePromise(instrumentChoice[0][i]).then(function () {
            noteButtonArray[i].dataset.playing = 'false'
        });
        noteButtonArray[i].dataset.playing = 'true';
    }

}



// END of document 
