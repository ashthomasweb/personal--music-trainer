// harmonic rhythm handler
function applyHarmonicRhythm() {
    if (progression.length === 4) {
        switch (generateChance(3)) {
            case 1:
                phraseChart.measure1[0].push(progression[0]);
                phraseChart.measure2[0].push(progression[1]);
                phraseChart.measure3[0].push(progression[2]);
                phraseChart.measure4[0].push(progression[3]);
                break;
            case 2:
                phraseChart.measure1[0].push(progression[0]);
                phraseChart.measure2[generateChance(2, 2) - 1].push(progression[1]);
                phraseChart.measure3[0].push(progression[2]);
                phraseChart.measure4[0].push(progression[3]);
                break;
            case 3:
                phraseChart.measure1[0].push(progression[0]);
                phraseChart.measure2[0].push(progression[1]);
                phraseChart.measure3[generateChance(2, 2) - 1].push(progression[2]);
                phraseChart.measure4[0].push(progression[3]);
        }
    }
    if (progression.length === 5) {
        switch (generateChance(3)) {
            case 1:
                phraseChart.measure1[0].push(progression[0]);
                phraseChart.measure2[0].push(progression[1]);
                phraseChart.measure3[0].push(progression[2]);
                phraseChart.measure3[generateChance(2, 2) - 1].push(progression[3]);
                phraseChart.measure4[0].push(progression[4]);
                break;
            case 2:
                phraseChart.measure1[0].push(progression[0]);
                phraseChart.measure1[generateChance(2, 2) - 1].push(progression[1]);
                phraseChart.measure2[0].push(progression[2]);
                phraseChart.measure3[0].push(progression[3]);
                phraseChart.measure4[0].push(progression[4]);
                break;
            case 3:
                phraseChart.measure1[0].push(progression[0]);
                phraseChart.measure2[0].push(progression[1]);
                phraseChart.measure2[generateChance(2, 2) - 1].push(progression[2]);
                phraseChart.measure3[0].push(progression[3]);
                phraseChart.measure4[0].push(progression[4]);
        }
    }
    if (progression.length === 6) {
        switch (generateChance(3)) {
            case 1:
                phraseChart.measure1[0].push(progression[0]);
                phraseChart.measure2[0].push(progression[1]);
                phraseChart.measure2[generateChance(2, 2) - 1].push(progression[2]);
                phraseChart.measure3[0].push(progression[3]);
                phraseChart.measure3[generateChance(2, 2) - 1].push(progression[4]);
                phraseChart.measure4[0].push(progression[5]);
                break;
            case 2:
                phraseChart.measure1[0].push(progression[0]);
                phraseChart.measure1[generateChance(2, 2) - 1].push(progression[1]);
                phraseChart.measure2[0].push(progression[2]);
                phraseChart.measure3[0].push(progression[3]);
                phraseChart.measure3[generateChance(2, 2) - 1].push(progression[4]);
                phraseChart.measure4[0].push(progression[5]);
                break;
            case 3:
                phraseChart.measure1[0].push(progression[0]);
                phraseChart.measure1[generateChance(2, 2) - 1].push(progression[1]);
                phraseChart.measure2[0].push(progression[2]);
                phraseChart.measure2[generateChance(2, 2) - 1].push(progression[3]);
                phraseChart.measure3[0].push(progression[4]);
                phraseChart.measure4[0].push(progression[5]);
        }
    }
    if (progression.length === 7) {
        phraseChart.measure1[0].push(progression[0]);
        phraseChart.measure1[generateChance(2, 2) - 1].push(progression[1]);
        phraseChart.measure2[0].push(progression[2]);
        phraseChart.measure2[generateChance(2, 2) - 1].push(progression[3]);
        phraseChart.measure3[0].push(progression[4]);
        phraseChart.measure3[generateChance(2, 2) - 1].push(progression[5]);
        phraseChart.measure4[0].push(progression[6]);
    }
}

// END of document
