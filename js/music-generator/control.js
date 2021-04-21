const defaultOptions = {
    key: undefined,
    keyCenter: undefined
}

let options = {
    key: undefined,
    keyCenter: undefined
}

function masterControl(options) {
    let controlOptions;

    if (arguments.length === 0) {
        controlOptions = defaultOptions;
    } else {
        controlOptions = options;
    }
    
    if (controlOptions.key !== undefined) {
        keyControl = true;
        keyVar = controlOptions.key;
    }

    if (controlOptions.keyCenter !== undefined) {
        keyCenterControl = true;
        keyCenterVar = controlOptions.keyCenter;
    }

    buildForm(20);
}





// turn off control booleans
function controlOff() {
    keyControl = false;
    keyCenterControl = false;
}