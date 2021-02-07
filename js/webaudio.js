let instrumentBank = [pianoChromaticC, frenchHornChromaticC, violinChromaticC];
let instrumentChoice = instrumentBank[0];
let instrumentPos = 0;

function instrumentCycle() {
	if (typeof trackArray === 'object') {
		for (let i = 0; i < trackArray.length - 1; i++) {
			trackArray[i].disconnect();
		}
		audioCtx.close();

	}

	if (instrumentPos == instrumentBank.length - 1) {
		instrumentPos = 0;
	} else {
		instrumentPos++;
	}
	instrumentChoice = instrumentBank[instrumentPos];

	document.getElementById("instr-type").innerText = instrumentChoice[14];

	let AudioContext = window.AudioContext || window.webkitAudioContext;
	let audioCtx = new AudioContext();


	soundLoader();

	// instigate our audio context

	// for cross browser

	// load some sound
	function soundLoader() {



		console.log(pianoChromaticC);

		let audioElementArray = [

		];

		let trackArray = [

		];


		for (let i = 0; i < pianoChromaticC.length - 2; i++) {
			audioElementArray.push(pianoChromaticC[i]);
			trackArray.push(audioCtx.createMediaElementSource(pianoChromaticC[i]));
		}

		// let track = audioCtx.createMediaElementSource(sq1Sound);
		// let track2 = audioCtx.createMediaElementSource(sq2Sound);
		// let track3 = audioCtx.createMediaElementSource(sq3Sound);
		// let track4 = audioCtx.createMediaElementSource(sq4Sound);
		// let track5 = audioCtx.createMediaElementSource(sq5Sound);
		// let track6 = audioCtx.createMediaElementSource(sq6Sound);
		// let track7 = audioCtx.createMediaElementSource(sq7Sound);
		// let track8 = audioCtx.createMediaElementSource(sq8Sound);
		// let track9 = audioCtx.createMediaElementSource(sq9Sound);
		// let track10 = audioCtx.createMediaElementSource(sq10Sound);
		// let track11 = audioCtx.createMediaElementSource(sq11Sound);
		// let track12 = audioCtx.createMediaElementSource(sq12Sound);
		// let track13 = audioCtx.createMediaElementSource(sq13Sound);

		console.log(trackArray);
		console.log(audioElementArray);


		let noteButtonArray = document.getElementsByClassName("note-btn");



		for (let i = 0; i <= noteButtonArray.length - 1; i++) {

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

	}
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