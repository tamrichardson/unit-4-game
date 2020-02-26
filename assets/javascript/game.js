$(document).ready(function () {
  //I MOVED THESE OUT TO EXIST FREE OF THE CLICK EVENT
  var wins = 0;
  var losses = 0;
  var playerScore = 0;
  var computerNum = 0;
  var purple = 0;
  var blue = 0;
  var red = 0;
  var yellow = 0;

  // assigns click to "a"
  $('a').on('click', function () {
    //FIRING OFF THE RESET JUST TO CLEAR THE DECKS FROM A PREVIOUS ROUND!!
    reset();
    //STARTING A NEW ROUND
    newRound();

  });
  //adds numbers together and displays player score

  $('#purple').click(() => {
    playerScore = playerScore + purple;
    $('h4').text(playerScore);
    if (playerScore === computerNum) {
      win();
      reset();
    } else if (playerScore > computerNum) {
      lose();
      reset();
    }
  });

  $('#red').click(() => {
    playerScore = playerScore + red;
    $('h4').text(playerScore);
    if (playerScore === computerNum) {
      win();
      reset();
    } else if (playerScore > computerNum) {
      lose();
      reset();
    }
  });

  $('#blue').click(() => {
    playerScore = playerScore + blue;
    console.log(playerScore, blue);
    $('h4').text(playerScore);
    if (playerScore === computerNum) {
      win();
      reset();
    } else if (playerScore > computerNum) {
      lose();
      reset();
    }
  });

  $('#yellow').click(() => {
    playerScore = playerScore + yellow;
    $('h4').text(playerScore);
    if (playerScore === computerNum) {
      win();
      reset();
    } else if (playerScore > computerNum) {
      lose();
      reset();
    }
  });

  function newRound() {
    //generates random number
    computerNum = Math.floor(Math.random() * 120) + 19;
    //displays random number in h5 on card
    $("h5").text(computerNum);
    //generates random numbers for gem images
    purple = Math.floor(Math.random() * 12) + 1;
    blue = Math.floor(Math.random() * 12) + 1;
    red = Math.floor(Math.random() * 12) + 1;
    yellow = Math.floor(Math.random() * 12) + 1;

    //resets you win/you lose
    $("h3").text("");

    $("playerScore").text(playerScore);
  }

  function win() {
    wins++;
    $("#wins").text(wins);
    $("h3").text("You Win!");
    $("h4").text("");
    reset();
  }

  function lose() {
    losses++;
    $("#losses").text(losses);
    $("h3").text("You Lose!");
    $("h4").text("");
    reset();
  }

  //JUST ADDED A FEW MORE THINGS TO CLEAR OUT
  function reset() {
    playerScore = 0;
    $("playerScore").text("");
    $("randonNumberCard").text("");

    $("h4").text("");
  }
});
