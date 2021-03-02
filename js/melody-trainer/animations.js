//  Animations JS file for "Music Trainer"

// || Play Animations


function lightUp(input) {
    // 'input' is the 'wrap' element containing the note elements
    //  as defined in the webAudio switch and listeners

    // get indexable value
    let index = Array.from(input.parentNode.children).indexOf(input);

    // console.log(input);

    function startAnim() {

    }

    function stopAnim() {

    }



}



// ORIGINAL
// function lightUp(input) {
//     // 'input' is the 'wrap' element containing the note elements
//     //  as defined in the webAudio switch and listeners
//
//     // get indexable value
//     let index = Array.from(input.parentNode.children).indexOf(input);
//
//     // console.log(input);
//
//     window.addEventListener('animationend', animationEnd);
//     function animationEnd() {
//         input.classList.remove('anim-light-' + index);
//         // input.children[2].classList.remove('anim-btn-' + index); // apply animation to button
//         input.children[2].dataset.anim = 'false';
//         input.style.backgroundColor = '#181818';
//     }
//
//     function startAnim() {
//
//         input.classList.add('anim-light-' + index);
//         // input.children[2].classList.add('anim-btn-' + index); // apply animation to button
//
//         // value for checking if anim is running, to allow repeated notes to be animated
//         input.children[2].dataset.anim = 'true';
//
//     }
//
//     function stopAnim() {
//         input.classList.remove('anim-light-' + index);
//         // input.removeEventListener('animationend', animationEnd);
//         // input.children[2].classList.remove('anim-btn-' + index); // apply animation to button
//     }
//
//     // check if animation is still running
//     if (input.children[2].dataset.anim === 'true') {
//         console.log(input.children[2]);
//         // input.style.backgroundColor = 'rgb(0, 78, 22)';
//         stopAnim();
//         // send to async to allow for repeated notes, otherwise event listeners block reapplication of class
//         setTimeout(function () {
//             animationEnd();
//             startAnim();
//         }, 0);
//     } else {
//         startAnim();
//     }
//
// }


function noteSwitchTest() {
  noteSwitch('C5');
}

function saveColors() {

    if ( localStorageRetrieve(colorArray) !== null) { // if has local storage
       // do nothing
    } else { // if no local storage
        console.log('no storage');
        colorArray = [];
        for (let i = 0; i <= document.getElementsByClassName('wrap').length - 1; i++) {
            colorArray.push(colorPicker[i].value);
        }
    }

    for (let i = 0; i <= document.getElementsByClassName('wrap').length - 1; i++) {
        colorArray[i] = colorPicker[i].value;
    }
    // send color array to storage
    localStorageCreate(colorArray);
    // append new stylesheet
    createElement();
}

// create stylesheet for note color animations. Due to need for async timing in lightUp(),
// appended stylesheet is necessary for note independence
function createElement() {

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `:root {
        --pianokey: ivory;
        --keyhover0: ${colorArray[0]};
        --keyhover1: ${colorArray[1]};
        --keyhover2: ${colorArray[2]};
        --keyhover3: ${colorArray[3]};
        --keyhover4: ${colorArray[4]};
        --keyhover5: ${colorArray[5]};
        --keyhover6: ${colorArray[6]};
        --keyhover7: ${colorArray[7]};
        --keyhover8: ${colorArray[8]};
        --keyhover9: ${colorArray[9]};
        --keyhover10: ${colorArray[10]};
        --keyhover11: ${colorArray[11]};
        --keyhover12: ${colorArray[12]};
        --keyhover13: ${colorArray[13]};
        --keyhover14: ${colorArray[14]};
        --keyhover15: ${colorArray[15]};
        --keyhover16: ${colorArray[16]};
        --keyhover17: ${colorArray[17]};
        --keyhover18: ${colorArray[18]};
    }`;
    // create new stylesheet, insert in <head>
    document.getElementsByTagName('head')[0].appendChild(style);

}

// END of document
