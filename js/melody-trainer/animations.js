// || Play Animations 

function lightUp(input) {
    // 'input' is the 'wrap' element containing the note elements
    //  as defined in the webAudio switch and listeners

    // console.log('This is the passed variable: ' + input);
    // console.log(input.children[2]);
    // console.log(Array.from(input.parentNode.children).indexOf(input));


    let index = Array.from(input.parentNode.children).indexOf(input)



    function startAnim() {
        input.classList.add('anim-light-' + index);
        // input.children[2].classList.add('anim-btn-' + index);

        input.children[1].dataset.anim = 'true';

        input.addEventListener('animationend', () => {
            input.classList.remove('anim-light-' + index);
            // input.children[2].classList.remove('anim-btn-' + index);

            input.children[1].dataset.anim = 'false';
            input.style.backgroundColor = '#181818';
        });
    }

    function stopAnim() {
        input.classList.remove('anim-light-' + index);
        // input.children[2].classList.remove('anim-btn-' + index);

    }

    // check if animation is still running
    if (input.children[1].dataset.anim === 'true') {
        input.style.backgroundColor = 'rgb(0, 78, 22)';
        stopAnim();
        setTimeout(function () {
            startAnim();
        }, 0);
    } else {
        startAnim();
    }

}

// Color Picker

function retrieveColors() {
    if ( localStorageRetrieve(colorArray) !== null) { // if has local storage
        console.log('has storage');
        colorArray = localStorageRetrieve(colorArray);
        for (let i = 0; i <= document.getElementsByClassName('wrap').length - 1; i++) {
            colorPick[i].value = colorArray[i];
        }
    }
    changeColor();
}

let colorPick = Array.from(document.getElementsByClassName('color-pick'));

function changeColor() {
    
    if ( localStorageRetrieve(colorArray) !== null) { // if has local storage
       // do nothing
    } else { // if no local storage
        console.log('no storage');
        colorArray = [];
        for (let i = 0; i <= document.getElementsByClassName('wrap').length - 1; i++) {
            colorArray.push(colorPick[i].value);
        }
    
    }
    
    for (let i = 0; i <= document.getElementsByClassName('wrap').length - 1; i++) {
        colorArray[i] = colorPick[i].value;
    }

    localStorageCreate(colorArray);
    createElement();
}

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
    document.getElementsByTagName('head')[0].appendChild(style);

}




