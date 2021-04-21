

function masterControl(key, keyCenter) {
    if (key !== undefined) {
        keyControl = true;
        keyVar = key;
    }
    
    if (keyCenter !== undefined) {
        keyCenterControl = true;
        keyCenterVar = keyCenter;
    }

    buildForm(20);
}











// turn off control booleans
function controlOff() {
    keyControl = false;
    keyCenterControl = false;
}