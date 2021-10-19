// Instrument Dropdown Menu

function displayInstMenu() {

    let menu = getComputedStyle(document.querySelector('#dropdown-inst'));
    let element = document.querySelector('#dropdown-inst');

    // window.removeEventListener('click', () => displayInstMenu() );

    if (menu.display === 'block') {
        element.style.display = 'none';
    } else if (menu.display === 'none') {
        element.style.display = 'block';
    }

}

function getInst() {
    let newInst = event.target.innerText;
    let currentInst = instrumentChoice[2];

    for (let i = 0; i < 30; i++) {
        if (newInst === currentInst) {
            displayInstMenu();
            return
        } else {
            instrumentCycle();
            currentInst = instrumentChoice[2];
        }
    }

}

function displayModeMenu() {

    let menu = getComputedStyle(document.querySelector('#dropdown-mode'));
    let element = document.querySelector('#dropdown-mode');

    // window.removeEventListener('click', () => displayInstMenu() );

    if (menu.display === 'block') {
        element.style.display = 'none';
    } else if (menu.display === 'none') {
        element.style.display = 'block';
    }

}

function getMode() {
    let newMode = event.target.innerText;
    let currentMode = modeChoiceName;


    function modeCadences() {
        let cadenceDiv = Array.from(document.getElementsByClassName('mode-cadence'));
        let modeNames = [];
        cadenceDiv.forEach((item) => modeNames.push(item.dataset.name));

        for (let i = 0; i < modeNames.length - 1; i++) {
            if (newMode === modeNames[i]) {
                console.log(cadenceDiv[i]);
                cadenceDiv[i].style.display = 'block';
            } else {
                cadenceDiv[i].style.display = 'none';
            }
        }
    }


    for (let i = 0; i < 30; i++) {
        if (newMode === currentMode) {
            modeCadences();
            displayModeMenu();
            return
        } else {
            modeCycle();
            currentMode = modeChoiceName;
        }
    }

}

function displayMessage(msg) {

    let pane = document.getElementById('msg-pane');

    switch (msg) {

        case 1:
            pane.innerText = 'Game Over! Try Again.'
            break;

        case 2:
            pane.innerText = 'Test!'
            break;

        case 3:
            pane.innerText = 'No Tempos selected. Check range sliders!'
            break;

        case 4:
            pane.innerText = 'Find the tempo in your inner ear before starting to click. Start when your are ready!'
            break;

        case 5:
            pane.innerText = 'Try Again!'
            break;

        case 6:
            pane.innerText = 'Good Job!'
            break;

        default:

    }
}

// END of document
