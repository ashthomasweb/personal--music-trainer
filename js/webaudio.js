function tester() {
    console.log(freeModeBool);
}
// || WebAudio API scope
{

    let currentAudio;

    // array of instrument sources
    let instrumentBank = [pianoSource, tenorSaxSource, pipeOrganSource, frenchHornSource, violinSource, marimbaSource];



    // array of page note-buttons
    let noteButtonArray = document.getElementsByClassName("note-btn");

    // changes instrument source
    function instrumentCycle() {

        // selects first instrument from array, then loops through array
        if (instrumentPos == instrumentBank.length - 1 || instrumentPos === undefined) {
            instrumentPos = 0;
        } else {
            instrumentPos++;
        }
        // current instrument source
        instrumentChoice = instrumentBank[instrumentPos];

        // changes on-screen instrument selection
        if (klangBool == true) {
            setTimeout(function () {
                document.getElementById("instr-type").innerText = instrumentChoice[2];
            }, 1000);
        } else {
            document.getElementById("instr-type").innerText = instrumentChoice[2];
        }
        // initializes sounds to note-buttons
        soundLoader();

        // applies instrument source via listeners
        function soundLoader() {

            for (let i = 0; i <= noteButtonArray.length - 1; i++) {

                // clears previous instrument listener via element cloning
                if (noteButtonArray[i].dataset.listener === 'false') {
                    // do nothing
                } else if (noteButtonArray[i].dataset.listener === 'true') {
                    let prevNode = noteButtonArray[i];
                    prevNode.parentNode.replaceChild(prevNode.cloneNode(false), prevNode);
                }

                // named event listener
                function playSound() {

                    // resume audioCx
                    if (audioCx.state === 'suspended') {
                        audioCx.resume();
                    }

                    // stop currently playing audio. needs refactor as gain decrease for legato feel
                    if (currentAudio === undefined) {
                        // do nothing 
                    } else {
                        currentAudio.pause();
                        currentAudio.currentTime = 0;
                    }

                    // play note and repeat note condition
                    if (noteButtonArray[i].dataset.playing === 'false') {
                        instrumentChoice[0][i].play();
                        currentAudio = instrumentChoice[0][i],
                            noteButtonArray[i].dataset.playing = 'true';
                    } else if (noteButtonArray[i].dataset.playing === 'true') {
                        instrumentChoice[0][i].pause();
                        instrumentChoice[0][i].currentTime = 0;
                        instrumentChoice[0][i].play();
                        currentAudio = instrumentChoice[0][i],
                            noteButtonArray[i].dataset.playing = 'true';
                    }

                    let userPick = noteButtonArray[i].parentElement.className.replace("wrap ", "");
                    userPat.push(userPick);

                    if (freeModeBool == true) {
                        // do nothing
                    } else {
                        patCheck();
                    }

                    if (klangBool == true) {
                        instrumentCycle();
                    } else {
                        // do nothing
                    }

                }

                // assign event listener
                noteButtonArray[i].addEventListener('click', playSound);

                // assign 'has listener' value
                noteButtonArray[i].dataset.listener = 'true';

                // webAudio track connection
                instrumentChoice[1][i].connect(audioCx.destination);

                // 'on-end' conditional
                instrumentChoice[0][i].addEventListener('ended', () => {
                    noteButtonArray[i].dataset.playing = 'false';
                }, false);

            }

        }
    }

    // webAudio declared function for noteSwitch
    function testPlay(index) {

        // check if context is in suspended state (autoplay policy)
        if (audioCx.state === 'suspended') {
            audioCx.resume();
        }

        instrumentChoice[0][index].pause();
        instrumentChoice[0][index].currentTime = 0;
        instrumentChoice[0][index].play();
    }

    function noteSwitch(noteId) {

        switch (noteId) {

            case "C5":
                testPlay(0);
                break;

            case "B4":
                testPlay(1);
                break;

            case "Bb4":
                testPlay(2);
                break;

            case "A4":
                testPlay(3);
                break;

            case "Ab4":
                testPlay(4);
                break;

            case "G4":
                testPlay(5);
                break;

            case "Gb4":
                testPlay(6);
                break;

            case "F4":
                testPlay(7);
                break;

            case "E4":
                testPlay(8);
                break;

            case "Eb4":
                testPlay(9);
                break;

            case "D4":
                testPlay(10);
                break;

            case "Db4":
                testPlay(11);
                break;

            case "C4":
                testPlay(12);
                break;

            case "B3":
                testPlay(13);
                break;

            case "Bb3":
                testPlay(14);
                break;

            case "A3":
                testPlay(15);
                break;

            case "Ab3":
                testPlay(16);
                break;

            case "G3":
                testPlay(17);
                break;

            case "Gb3":
                testPlay(18);
                break;

            default:
        }
    }

}


// END of document