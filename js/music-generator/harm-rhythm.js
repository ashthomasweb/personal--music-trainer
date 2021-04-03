// harmonic rhythm handler
function applyHarmonicRhythm() {
    if (progression.length === 3) {
        let chance = Math.ceil(Math.random() * 3);
        if (chance === 1) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[3][0].push(progression[1]);
            builtPhrase[4][0].push(progression[2]);
        } else if (chance === 2) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[2][0].push(progression[1]);
            builtPhrase[4][0].push(progression[2]);
        } else if (chance === 3) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[2][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
            builtPhrase[4][0].push(progression[3]);
        } else if (chance === 4) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[3][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
            builtPhrase[4][0].push(progression[2]);
        }
    }
    if (progression.length === 4) {
        let chance = Math.ceil(Math.random() * 3);
        if (chance === 1) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[2][0].push(progression[1]);
            builtPhrase[3][0].push(progression[2]);
            builtPhrase[4][0].push(progression[3]);
        } else if (chance === 2) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[2][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
            builtPhrase[3][0].push(progression[2]);
            builtPhrase[4][0].push(progression[3]);
        } else if (chance === 3) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[2][0].push(progression[1]);
            builtPhrase[3][Math.floor((Math.random() * 2) + 2)].push(progression[2]);
            builtPhrase[4][0].push(progression[3]);
        } 
    }
    if (progression.length === 5) {
        let chance = Math.ceil(Math.random() * 3);
        if (chance === 1) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[2][0].push(progression[1]);
            builtPhrase[3][0].push(progression[2]);
            builtPhrase[3][Math.floor((Math.random() * 2) + 2)].push(progression[3]);
            builtPhrase[4][0].push(progression[4]);
        } else if (chance === 2) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[1][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
            builtPhrase[2][0].push(progression[2]);
            builtPhrase[3][0].push(progression[3]);
            builtPhrase[4][0].push(progression[4]);
        } else if (chance === 3) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[2][0].push(progression[1]);
            builtPhrase[2][Math.floor((Math.random() * 2) + 2)].push(progression[2]);
            builtPhrase[3][0].push(progression[3]);
            builtPhrase[4][0].push(progression[4]);
        }
    }
    if (progression.length === 6) {
        let chance = Math.ceil(Math.random() * 3);
        if (chance === 1) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[2][0].push(progression[1]);
            builtPhrase[2][Math.floor((Math.random() * 2) + 2)].push(progression[2]);
            builtPhrase[3][0].push(progression[3]);
            builtPhrase[3][Math.floor((Math.random() * 2) + 2)].push(progression[4]);
            builtPhrase[4][0].push(progression[5]);
        } else if (chance === 2) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[1][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
            builtPhrase[2][0].push(progression[2]);
            builtPhrase[3][0].push(progression[3]);
            builtPhrase[3][Math.floor((Math.random() * 2) + 2)].push(progression[4]);
            builtPhrase[4][0].push(progression[5]);
        } else if (chance === 3) {
            builtPhrase[1][0].push(progression[0]);
            builtPhrase[1][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
            builtPhrase[2][0].push(progression[2]);
            builtPhrase[2][Math.floor((Math.random() * 2) + 2)].push(progression[3]);
            builtPhrase[3][0].push(progression[4]);
            builtPhrase[4][0].push(progression[5]);
        }
    }
    if (progression.length === 7) {
        builtPhrase[1][0].push(progression[0]);
        builtPhrase[1][Math.floor((Math.random() * 2) + 2)].push(progression[1]);
        builtPhrase[2][0].push(progression[2]);
        builtPhrase[2][Math.floor((Math.random() * 2) + 2)].push(progression[3]);
        builtPhrase[3][0].push(progression[4]);
        builtPhrase[3][Math.floor((Math.random() * 2) + 2)].push(progression[5]);
        builtPhrase[4][0].push(progression[6]);
    }
}