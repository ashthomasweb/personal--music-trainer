// B-section mode shift unit file
let major = ['major array']
let minor = ['minor array']
let currentHarmony = major
let keyModeSwitchConBool = true
let keyModeSwitchRandom = false
let keyModeSwitchConVar
let keyModeSwitchOption = major
const generateChance = (factor, addend = 0) => Math.ceil(Math.random() * factor) + addend


function switchParallelMode() {
    // multiple value assignment handling
    function parallelMode() {
        if (currentHarmony === major) {
            currentHarmony = minor;
            romanNumOne = 'i';
            romanNumFour = 'iv';
            romanNumSix = 'bVI';
        } else {
            currentHarmony = major;
            romanNumOne = 'I';
            romanNumFour = 'IV';
            romanNumSix = 'vi';
        }
    }
    
    let modeShiftArray = ['static', 'parallel'];
    // onscreen user controled options enabled, box unchecked
    if (keyModeSwitchConBool === true && keyModeSwitchRandom === false) {
        keyModeSwitchConVar = keyModeSwitchOption;
    } else if (keyModeSwitchConBool === true && keyModeSwitchRandom === true) { // random checkbox enabled, only on first pass
        keyModeSwitchConVar = modeShiftArray[generateChance(2) - 1];
    } else { // hard-coded option
        keyModeSwitchConVar = modeShiftArray[generateChance(2) - 1];
    }

    // multiple value assignment handling
    keyModeSwitchConVar === 'parallel' && parallelMode();
}

exports.switchParallelMode = switchParallelMode
exports.currentHarmony = currentHarmony
exports.major = major
exports.minor = minor



// END of document
