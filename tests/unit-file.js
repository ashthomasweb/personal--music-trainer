let major = []
let currentHarmony = major
let mode
let keyOfC = []
let keyNumerals = keyOfC

function concatKeyInfo() {

    switch (keyNumerals) {
        case keyOfC:
            center = 'C';
            break;
        case keyOfG:
            center = 'G';
            break;
        case keyOfF:
            center = 'F';
            break;
        case keyOfD:
            center = 'D';
            break;
        case keyOfBb:
            center = 'Bb';
            break;
        case keyOfEb:
            center = 'Eb';
            break;
        default:
            break;
    }
    currentHarmony === major ? mode = 'major' : mode = 'minor';
    return center + ' ' + mode;
}

module.exports = concatKeyInfo