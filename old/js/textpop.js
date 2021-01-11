/* Instructions and Messages for Arnold's Game */

/* MESSAGE PANE */

function message(number) {

    switch (number) {
        case 1:

            if (currentLevel === 10 || currentLevel === 15 || currentLevel === 20 || currentLevel === 25) {
                // do nothing so that level specific text can appear
            } else {
                $("#messages-pop").html("Wait for it <span class='anim_wait-pulse'>...</span>");
                $("#messages-pop").css("opacity", "1");
            }

            break;

        default:
    }


    if (currentLevel === 10) {
        $("#messages-pop").text("Level 10!");
        msgAnimate();
    }

    if (currentLevel === 15) {
        $("#messages-pop").text("You're Amazing!");
        msgAnimate();
    }

    if (currentLevel === 20) {
        $("#messages-pop").text("Are you psychic?");
        msgAnimate();
    }

    if (currentLevel === 25) {
        $("#messages-pop").text("I need a break!");
        msgAnimate();
    }

}


/* INSTRUCTION PANE */

function instructions(number) {

    switch (number) {
        case 1:
            $("#instructions-pop").text("Next Level!");
            instructFade();
            break;

        case 2:
            $("#instructions-pop").text("Get Ready!");
            instructFade();
            break;

       

        

        

        

        default:
    }

}


/* MESSAGE/INSTRUCTION ANIMATIONS */


function waitAnimate() {
    $("#messages-pop").addClass("anim_wait-pop");

    $("#messages-pop").on("animationend", function () {
        $(this).css("opacity", "0");
        $(this).removeClass("anim_wait-pop");
    });

}

function msgAnimate() {
    $("#messages-pop").addClass("anim_msg-pop");
    $("#messages-pop").on("animationend", function () {
        $(this).removeClass("anim_msg-pop");
    });
}

function instructFade() {
    $("#instructions-pop").addClass("anim_instruct-pop");
    $("#instructions-pop").on("animationend", function () {
        $(this).removeClass("anim_instruct-pop");
    });
}


/* END of document */