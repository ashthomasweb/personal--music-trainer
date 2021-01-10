/* Playstate functions and stages for Arnold's Game */

/* SQUARE ANIMATION AND SOUND */

function squareActive(sqId) {
  // $("#" + sqId + "-box").addClass("anim_sq-pulse");

  // setTimeout(function () {
  //   $("#" + sqId + "-box").removeClass("anim_sq-pulse");
  // }, 200);



  var sq1Sound = new Audio(player1Sounds[0]);
  var sq2Sound = new Audio(player1Sounds[1]);
  var sq3Sound = new Audio(player1Sounds[2]);
  var sq4Sound = new Audio(player1Sounds[3]);
  var sq5Sound = new Audio(player1Sounds[4]);
  var sq6Sound = new Audio(player1Sounds[5]);
  var sq7Sound = new Audio(player1Sounds[6]);
  var sq8Sound = new Audio(player1Sounds[7]);
  var sq9Sound = new Audio(player1Sounds[8]);
  var sq10Sound = new Audio(player1Sounds[9]);
  var sq11Sound = new Audio(player1Sounds[10]);
  var sq12Sound = new Audio(player1Sounds[11]);
  var sq13Sound = new Audio(player1Sounds[12]);


  switch (sqId) {
    case "sq1":
      sq1Sound.load();
      sq1Sound.play();
      currentAudio = sq1Sound;
      break;

    case "sq2":
      sq2Sound.load();
      sq2Sound.play();
      currentAudio = sq2Sound;
      break;

    case "sq3":
      sq3Sound.load();
      sq3Sound.play();
      currentAudio = sq3Sound;
      break;

    case "sq4":
      sq4Sound.load();
      sq4Sound.play();
      currentAudio = sq4Sound;
      break;

    case "sq5":
      sq5Sound.load();
      sq5Sound.play();
      currentAudio = sq5Sound;
      break;

    case "sq6":
      sq6Sound.load();
      sq6Sound.play();
      currentAudio = sq6Sound;
      break;

    case "sq7":
      sq7Sound.load();
      sq7Sound.play();
      currentAudio = sq7Sound;
      break;

    case "sq8":
      sq8Sound.load();
      sq8Sound.play();
      currentAudio = sq8Sound;
      break;

    case "sq9":
      sq9Sound.load();
      sq9Sound.play();
      currentAudio = sq9Sound;
      break;

    case "sq10":
      sq10Sound.load();
      sq10Sound.play();
      currentAudio = sq10Sound;
      break;

    case "sq11":
      sq11Sound.load();
      sq11Sound.play();
      currentAudio = sq11Sound;
      break;

    case "sq12":
      sq12Sound.load();
      sq12Sound.play();
      currentAudio = sq12Sound;
      break;

    case "sq13":
      sq13Sound.load();
      sq13Sound.play();
      currentAudio = sq13Sound;
      break;

    default:
  }
}

function playScale() {
  squareActive("sq1");

  setTimeout(function() {
    squareActive("sq13");
  }, 800);
  setTimeout(function() {
    squareActive("sq12");
  }, 1500);
  setTimeout(function() {
    squareActive("sq10");
  }, 2000);
  setTimeout(function() {
    squareActive("sq8");
  }, 2500);
  setTimeout(function() {
    squareActive("sq6");
  }, 3000);
  setTimeout(function() {
    squareActive("sq5");
  }, 3500);
  setTimeout(function() {
    squareActive("sq3");
  }, 4000);
  setTimeout(function() {
    squareActive("sq1");
  }, 4500);
  setTimeout(function() {
    squareActive("sq5");
  }, 5050);
  setTimeout(function() {
    squareActive("sq8");
  }, 5625);
  setTimeout(function() {
    squareActive("sq5");
  }, 6200);
  setTimeout(function() {
    squareActive("sq1");
  }, 7000);

}


/* PLAYSTATE - INVITE SCREEN */

$(".btn-invite").on("click", function () {
  var playBtn = $(this);
  playBtn.off("click");
  playButtonClickMove(playBtn);
  initializeGame();
});

function playButtonClickMove(playBtn) {
  playBtn.css("left", "-=2");
  playBtn.css("top", "+=3");
  playBtn.css("box-shadow", "-6px 2px 11px 3px var(--black)")

  setTimeout(function () {
    playBtn.css("left", "+=2");
    playBtn.css("top", "-=3");
    playBtn.css("box-shadow", "-8px 5px 11px 3px var(--black)")
  }, 60);

}

function invitePaneFade() {
  $(".ps-backdrop").addClass("is_invite-fade");
  $(".ps-invite-pane").addClass("is_invite-fade");

  setTimeout(function () {
    $(".ps-invite-pane").css("display", "none");
    $(".ps-invite-pane").removeClass("is_invite-fade");
    $(".ps-backdrop").removeClass("is_invite-fade");
    $(".ps-backdrop").css("display", "none");
  }, 2000);

}

function playButtonReset() {
  // resets event listener for invite button 
  $(".btn-invite").on("click", function () {
    var playBtn = $(this);
    playBtn.off("click");
    playButtonClickMove(playBtn);
    initializeGame();
  });

}


/* START GAME */

function initializeGame() {
  invitePaneFade();

  setTimeout(function () {
    levelBox();
  }, 1700);

  currentLevel = 1;

  setTimeout(function () {
    instructions(2);
  }, 1000);

  setTimeout(function () {
    beginGame();
    playButtonReset();
  }, 4000);

}

function beginGame() {
  p1Pat = [];
  sPat = [];
  colorGrad($(".meter-fill-bar"));
  arnoldsTurn();
}


/* ARNOLD'S TURN */


let scaleChoice;

function arnoldsTurn() {

  if (scaleChoice === "major") {
    majorFinder();
  }

  if (scaleChoice === "minor") {
    minorFinder();
  }

  if (scaleChoice === "chromatic") {
    chromaticFinder();
  }


  function chromaticFinder() {
    let x = Math.ceil(Math.random() * 13);
    newPush(x);
  }

  function majorFinder() {

    let x = Math.ceil(Math.random() * 13);
    if (x === 2 || x === 4 || x === 7 || x === 9 || x === 11) {
      majorFinder();
    } else {
      newPush(x);
    }

  }

  function minorFinder() {

    let x = Math.ceil(Math.random() * 13);
    if (x === 2 || x === 5 || x === 7 || x === 10 || x === 12) {
      minorFinder();
    } else {
      newPush(x);
    }

  }


  function newPush(x) {
    if (x == sPat[sPat.length - 1] && x == sPat[sPat.length - 2]) {
      arnoldsTurn();
    } else {
      sPat.push(x);
      sqId = "sq" + x;
      squareActive(sqId);
    }
  }



  setTimeout(function () {
    playerTurn();
  }, 200);


}

function showAll() {
  $(".note2").css("opacity", "1");
  $(".note3").css("opacity", "1");
  $(".note4").css("opacity", "1");
  $(".note5").css("opacity", "1");
  $(".note6").css("opacity", "1");
  $(".note7").css("opacity", "1");
  $(".note8").css("opacity", "1");
  $(".note9").css("opacity", "1");
  $(".note10").css("opacity", "1");
  $(".note11").css("opacity", "1");
  $(".note12").css("opacity", "1");
}

function majorHide() {
  showAll();
  $(".note2").css("opacity", "0");
  $(".note4").css("opacity", "0");
  $(".note7").css("opacity", "0");
  $(".note9").css("opacity", "0");
  $(".note11").css("opacity", "0");
}

function minorHide() {
  showAll();
  $(".note2").css("opacity", "0");
  $(".note5").css("opacity", "0");
  $(".note7").css("opacity", "0");
  $(".note10").css("opacity", "0");
  $(".note12").css("opacity", "0");
}

$("#invite-major").on("click", function () {
  majorHide();
  scaleChoice = "major";
});

$("#invite-minor").on("click", function () {
  minorHide();
  scaleChoice = "major";
});

$("#invite-chromatic").on("click", function () {
  showAll();
  scaleChoice = "chromatic";
});









/* PLAYER'S TURN */

function playerTurn() {
  limitListenersOn();
  timerStart();

  $(".color-square1").on("click", function () {
    id = 1;
    squareClicked(id);
  });

  $(".color-square2").on("click", function () {
    id = 2;
    squareClicked(id);
  });

  $(".color-square3").on("click", function () {
    id = 3;
    squareClicked(id);
  });

  $(".color-square4").on("click", function () {
    id = 4;
    squareClicked(id);
  });

  $(".color-square5").on("click", function () {
    id = 5;
    squareClicked(id);
  });

  $(".color-square6").on("click", function () {
    id = 6;
    squareClicked(id);
  });

  $(".color-square7").on("click", function () {
    id = 7;
    squareClicked(id);
  });

  $(".color-square8").on("click", function () {
    id = 8;
    squareClicked(id);
  });

  $(".color-square9").on("click", function () {
    id = 9;
    squareClicked(id);
  });

  $(".color-square10").on("click", function () {
    id = 10;
    squareClicked(id);
  });

  $(".color-square11").on("click", function () {
    id = 11;
    squareClicked(id);
  });

  $(".color-square12").on("click", function () {
    id = 12;
    squareClicked(id);
  });

  $(".color-square13").on("click", function () {
    id = 13;
    squareClicked(id);
  });

  function squareClicked(id) {
    sqId = ("sq" + id);
    p1Pat.push(id);
    squareActive(sqId);
    patCheck();
  }

}


/* PLAYER PATTERN VERIFICATION */

function patCheck() {

  if (sPat[sPat.length - (sPat.length - p1Pat.length) - 1] === p1Pat[p1Pat.length - 1] && p1Pat.length === sPat.length) {
    player1LastScore = p1Pat.length;
    timerStop();
    if (arnoldBool == true) {
      arnoldModeSwitch();
    }
    nextTurn();
    meterFill();
  } else if (sPat[sPat.length - (sPat.length - p1Pat.length) - 1] === p1Pat[p1Pat.length - 1]) {

    if (arnoldBool == true) {
      arnoldModeSwitch();
    }

    currentRound++;
    hardMode1();
  } else {
    currentAudio.pause(); // currently not working
    gameOver();
  }

}


/* NEXT TURN */

function nextTurn() {
  $("#instructions-pop").removeClass("anim_instruct-pop");
  playerTurnEnd();
  currentLevel++;
  partyTempoUp();
  levelBox();
  currentRound = 1;
  instructions(1);

  setTimeout(function () {
    message(1);
    message();
  }, 2000);

  setTimeout(function () {
    arnoldsTurn();
    waitAnimate();
  }, 2000 + (Math.ceil(Math.random() * 3) * 1000));

}

function playerTurnEnd() {
  p1Pat = [];
  $(".color-square1").off("click");
  $(".color-square2").off("click");
  $(".color-square3").off("click");
  $(".color-square4").off("click");
  $(".color-square5").off("click");
  $(".color-square6").off("click");
  $(".color-square7").off("click");
  $(".color-square8").off("click");
  $(".color-square9").off("click");
  $(".color-square10").off("click");
  $(".color-square11").off("click");
  $(".color-square12").off("click");
  $(".color-square13").off("click");
  $(".meter-btn").off("click");
}


/* GAME OVER */

function gameOver() {
  console.log(sPat, p1Pat);
  timerStop();
  playerTurnEnd();
  partyGameover();
  carryOverState();
  deathScreen();
  highScore();
  scorePush();
  currentRound = 1;
  p1Pat = [];
  sPat = [];
  levelBox();
}


/* DEATH SCREEN */

$(".btn-death").click(function () {
  $(".ps-death-pane").css("display", "none");
  $(".ps-invite-pane").css("display", "block");
  $(".ps-backdrop").css("display", "block");
  $(".ps-death-pane").removeClass("anim_death-pane");
  soundBankPicker();
});

function deathScreen() {
  let gameOver = new Audio(player1Sounds[6]);
  setTimeout(function () {
    gameOver.play();
  }, 250);
  $(".ps-death-pane").css("display", "block");
  $(".ps-death-pane").addClass("anim_death-pane");
}


/* END of document */