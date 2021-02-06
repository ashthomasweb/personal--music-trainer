// instigate our audio context

// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// load some sound
var testAudio = new Audio("sounds/violin/violin-C4.mp3");
var testAudio2 = new Audio("sounds/violin/violin-C5.mp3");


const audioElement = testAudio;
const track = audioCtx.createMediaElementSource(audioElement);

const audioElement2 = testAudio2;
const track2 = audioCtx.createMediaElementSource(audioElement2);

const playButton = document.querySelector('.test-audio');

// play pause audio
playButton.addEventListener('click', function () {
// function simplePlay3(){

	// check if context is in suspended state (autoplay policy)
	if (audioCtx.state === 'suspended') {
		audioCtx.resume();
	}
	
	if (this.dataset.playing === 'false') {
		audioElement.play();
		this.dataset.playing = 'true';
		// if track is playing stop and play again
	} else if (this.dataset.playing === 'true') {
		audioElement.pause();
		audioElement.currentTime = 0;
		
		audioElement.play();
		this.dataset.playing = 'true';
	}

	
	// let state = this.getAttribute('aria-checked') === "true" ? true : false;
	// this.setAttribute( 'aria-checked', state ? "false" : "true" );

}, false);

function simplePlay() {
	if (audioCtx.state === 'suspended') {
		audioCtx.resume();
	}
	console.log('hi');
	audioElement.play();


}

function simplePlay2() {
	if (audioCtx.state === 'suspended') {
		audioCtx.resume();
	}
	console.log('hi');
	console.log(audioCtx.state);

	audioElement2.play();
	console.log(audioCtx.state);


}


// if track ends
audioElement.addEventListener('ended', () => {
	playButton.dataset.playing = 'false';
}, false);




// connect our graph
track.connect(audioCtx.destination);
track2.connect(audioCtx.destination);