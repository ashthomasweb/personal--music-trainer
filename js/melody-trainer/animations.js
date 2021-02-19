
// || Play Animations 

function lightUp(input) {
    // 'input' is the 'wrap' element containing the note elements
    //  as defined in the webAudio switch and listeners

    function startAnim() {
        input.classList.add('anim-light-up');
        input.children[1].dataset.anim = 'true';

        input.addEventListener('animationend', () => {
            input.classList.remove('anim-light-up');
            input.children[1].dataset.anim = 'false'
            input.style.backgroundColor = '#181818';
        });
    }

    function stopAnim() {
        input.classList.remove('anim-light-up');
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

function changeColor() {
    let C5btn = document.getElementById('C5-btn');
    let C5pick = document.getElementById('pick-C5');

    C5btn.style.backgroundColor = C5pick.value;


}