// B-section mode shift unit file
let major = ['major array']
let minor = ['minor array']
let currentHarmony
let keyModeSwitchConBool
let keyModeSwitchRandom
let keyModeSwitchConVar
let keyModeSwitchOption
const generateChance = (factor, addend = 0) => Math.ceil(Math.random() * factor) + addend


function modePick(input) {
    currentHarmony = input
}
modePick(minor)

// user control enabled
keyModeSwitchConBool = true
keyModeSwitchRandom = false

keyModeSwitchOption = 'parallel'





function switchParallelMode() {
    // multiple value assignment handling
    function parallelMode() {
        console.log(currentHarmony)
        if (currentHarmony === major) {
            currentHarmony = minor;
            romanNumOne = 'i';
            romanNumFour = 'iv';
            romanNumSix = 'bVI';
        } else if (currentHarmony === minor) {
            currentHarmony = major;
            romanNumOne = 'I';
            romanNumFour = 'IV';
            romanNumSix = 'vi';
        }
        console.log(currentHarmony)
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
    exports.currentHarmony = currentHarmony
}

exports.switchParallelMode = switchParallelMode
exports.major = major
exports.minor = minor

// END of document
