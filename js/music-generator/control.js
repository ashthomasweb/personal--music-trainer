

function masterControl(key) {
    if (key !== undefined) {
        keyControl = true;
        keyVar = key;
    } 
    buildForm(20);
}

// turn off control booleans
function controlOff() {
    keyControl = false;

}