// harmonic rhythm handler
function applyHarmonicRhythm() {
    if (progression.length === 3) {
        let chance = generateChance(3);
        if (chance === 1) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure3[0].push(progression[1]);
            phraseUnit.measure4[0].push(progression[2]);
        } else if (chance === 2) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure2[0].push(progression[1]);
            phraseUnit.measure4[0].push(progression[2]);
        } else if (chance === 3) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure2[generateChance(2, 2) - 1].push(progression[1]);
            phraseUnit.measure4[0].push(progression[3]);
        } else if (chance === 4) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure3[generateChance(2, 2) - 1].push(progression[1]);
            phraseUnit.measure4[0].push(progression[2]);
        }
    }
    if (progression.length === 4) {
        let chance = generateChance(3);
        if (chance === 1) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure2[0].push(progression[1]);
            phraseUnit.measure3[0].push(progression[2]);
            phraseUnit.measure4[0].push(progression[3]);
        } else if (chance === 2) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure2[generateChance(2, 2) - 1].push(progression[1]);
            phraseUnit.measure3[0].push(progression[2]);
            phraseUnit.measure4[0].push(progression[3]);
        } else if (chance === 3) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure2[0].push(progression[1]);
            phraseUnit.measure3[generateChance(2, 2) - 1].push(progression[2]);
            phraseUnit.measure4[0].push(progression[3]);
        }
    }
    if (progression.length === 5) {
        let chance = generateChance(3);
        if (chance === 1) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure2[0].push(progression[1]);
            phraseUnit.measure3[0].push(progression[2]);
            phraseUnit.measure3[generateChance(2, 2) - 1].push(progression[3]);
            phraseUnit.measure4[0].push(progression[4]);
        } else if (chance === 2) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure1[generateChance(2, 2) - 1].push(progression[1]);
            phraseUnit.measure2[0].push(progression[2]);
            phraseUnit.measure3[0].push(progression[3]);
            phraseUnit.measure4[0].push(progression[4]);
        } else if (chance === 3) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure2[0].push(progression[1]);
            phraseUnit.measure2[generateChance(2, 2) - 1].push(progression[2]);
            phraseUnit.measure3[0].push(progression[3]);
            phraseUnit.measure4[0].push(progression[4]);
        }
    }
    if (progression.length === 6) {
        let chance = generateChance(3);
        if (chance === 1) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure2[0].push(progression[1]);
            phraseUnit.measure2[generateChance(2, 2) - 1].push(progression[2]);
            phraseUnit.measure3[0].push(progression[3]);
            phraseUnit.measure3[generateChance(2, 2) - 1].push(progression[4]);
            phraseUnit.measure4[0].push(progression[5]);
        } else if (chance === 2) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure1[generateChance(2, 2) - 1].push(progression[1]);
            phraseUnit.measure2[0].push(progression[2]);
            phraseUnit.measure3[0].push(progression[3]);
            phraseUnit.measure3[generateChance(2, 2) - 1].push(progression[4]);
            phraseUnit.measure4[0].push(progression[5]);
        } else if (chance === 3) {
            phraseUnit.measure1[0].push(progression[0]);
            phraseUnit.measure1[generateChance(2, 2) - 1].push(progression[1]);
            phraseUnit.measure2[0].push(progression[2]);
            phraseUnit.measure2[generateChance(2, 2) - 1].push(progression[3]);
            phraseUnit.measure3[0].push(progression[4]);
            phraseUnit.measure4[0].push(progression[5]);
        }
    }
    if (progression.length === 7) {
        phraseUnit.measure1[0].push(progression[0]);
        phraseUnit.measure1[generateChance(2, 2) - 1].push(progression[1]);
        phraseUnit.measure2[0].push(progression[2]);
        phraseUnit.measure2[generateChance(2, 2) - 1].push(progression[3]);
        phraseUnit.measure3[0].push(progression[4]);
        phraseUnit.measure3[generateChance(2, 2) - 1].push(progression[5]);
        phraseUnit.measure4[0].push(progression[6]);
    }
}

// END of document