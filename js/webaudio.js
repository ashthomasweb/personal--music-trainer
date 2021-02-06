// instigate our audio context

// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// load some sound
var testAudio = new Audio("sounds/violin/violin-C4.mp3");
var testAudio2 = new Audio("sounds/violin/violin-C5.mp3");

var sq1Sound = new Audio(instrumentChoice[0]);
var sq2Sound = new Audio(instrumentChoice[1]);
var sq3Sound = new Audio(instrumentChoice[2]);
var sq4Sound = new Audio(instrumentChoice[3]);
var sq5Sound = new Audio(instrumentChoice[4]);
var sq6Sound = new Audio(instrumentChoice[5]);
var sq7Sound = new Audio(instrumentChoice[6]);
var sq8Sound = new Audio(instrumentChoice[7]);
var sq9Sound = new Audio(instrumentChoice[8]);
var sq10Sound = new Audio(instrumentChoice[9]);
var sq11Sound = new Audio(instrumentChoice[10]);
var sq12Sound = new Audio(instrumentChoice[11]);
var sq13Sound = new Audio(instrumentChoice[12]);


// const audioElement = testAudio;
// const audioElement2 = testAudio2;

const track = audioCtx.createMediaElementSource(sq1Sound);

const track2 = audioCtx.createMediaElementSource(sq2Sound);

const track3 = audioCtx.createMediaElementSource(sq3Sound);
const track4 = audioCtx.createMediaElementSource(sq4Sound);
const track5 = audioCtx.createMediaElementSource(sq5Sound);
const track6 = audioCtx.createMediaElementSource(sq6Sound);
const track7 = audioCtx.createMediaElementSource(sq7Sound);
const track8 = audioCtx.createMediaElementSource(sq8Sound);
const track9 = audioCtx.createMediaElementSource(sq9Sound);
const track10 = audioCtx.createMediaElementSource(sq10Sound);
const track11 = audioCtx.createMediaElementSource(sq11Sound);
const track12 = audioCtx.createMediaElementSource(sq12Sound);
const track13 = audioCtx.createMediaElementSource(sq13Sound);


const noteButtonArray = document.getElementsByClassName("note-btn");
const audioElementArray = [
	sq1Sound, 
	sq2Sound, 
	sq3Sound, 
	sq4Sound, 
	sq5Sound, 
	sq6Sound, 
	sq7Sound, 
	sq8Sound, 
	sq9Sound, 
	sq10Sound, 
	sq11Sound, 
	sq12Sound, 
	sq13Sound, 
];

const trackArray = [
	track,
	track2,
	track3,
	track4,
	track5,
	track6,
	track7,
	track8,
	track9,
	track10,
	track11,
	track12,
	track13,
];



for (let i = 0; i < noteButtonArray.length - 1; i++) {

	noteButtonArray[i].addEventListener('click', function () {


		console.log('hi');

		// check if context is in suspended state (autoplay policy)
		if (audioCtx.state === 'suspended') {
			audioCtx.resume();
		}

		if (this.dataset.playing === 'false') {
			audioElementArray[i].play();
			this.dataset.playing = 'true';
			// if track is playing stop and play again
		} else if (this.dataset.playing === 'true') {
			audioElementArray[i].pause();
			audioElementArray[i].currentTime = 0;

			audioElementArray[i].play();
			this.dataset.playing = 'true';
		}


		// let state = this.getAttribute('aria-checked') === "true" ? true : false;
		// this.setAttribute( 'aria-checked', state ? "false" : "true" );

	}, false);

	trackArray[i].connect(audioCtx.destination);

	audioElementArray[i].addEventListener('ended', () => {
		noteButtonArray[i].dataset.playing = 'false';
	}, false);


}

// const playButton = document.querySelector('.test-audio');


// playButton.addEventListener('click', function () {

// 	// check if context is in suspended state (autoplay policy)
// 	if (audioCtx.state === 'suspended') {
// 		audioCtx.resume();
// 	}

// 	if (this.dataset.playing === 'false') {
// 		audioElement2.play();
// 		this.dataset.playing = 'true';
// 		// if track is playing stop and play again
// 	} else if (this.dataset.playing === 'true') {
// 		audioElement2.pause();
// 		audioElement2.currentTime = 0;

// 		audioElement2.play();
// 		this.dataset.playing = 'true';
// 	}


// 	// let state = this.getAttribute('aria-checked') === "true" ? true : false;
// 	// this.setAttribute( 'aria-checked', state ? "false" : "true" );

// }, false);








// // if track ends
// audioElement.addEventListener('ended', () => {
// 	playButton.dataset.playing = 'false';
// }, false);




// // connect our graph
// track.connect(audioCtx.destination);
// track2.connect(audioCtx.destination);


























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