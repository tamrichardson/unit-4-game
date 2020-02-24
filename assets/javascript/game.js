$(document).ready(function () {

  // assigns click to "a"
  $("a").on("click", function () {

    //generates random number
    var computerNum = Math.floor(Math.random() * 120) + 19;

    //displays random number in h5 on card
    $("h5").text(computerNum)

    //generates random numbers for gem images
    var purple = Math.floor(Math.random() * 12) + 1;
    var blue = Math.floor(Math.random() * 12) + 1;
    var red = Math.floor(Math.random() * 12) + 1;
    var yellow = Math.floor(Math.random() * 12) + 1;

    var wins = 0;
    var losses = 0;

    var playerScore = 0;
    $("playerScore").text(playerScore)


    //adds numbers together and displays player score
    $('#purple').click(() => {
      playerScore = playerScore + purple;
      $("h4").text(playerScore);
      if (playerScore === computerNum) {
        win();
        reset();

      } else if (playerScore > computerNum) {
        lose();
        reset();

      }
    });

    $("#red").click(() => {
      playerScore = playerScore + red;
      $("h4").text(playerScore);
      if (playerScore === computerNum) {
        win();
        reset();

      } else if (playerScore > computerNum) {
        lose();
        reset();
      }
    });

    $("#blue").click(() => {
      playerScore = playerScore + blue;
      $("h4").text(playerScore);
      if (playerScore === computerNum) {
        win();
        reset();

      } else if (playerScore > computerNum) {
        lose();
        reset();
      }
    });

    $("#yellow").click(() => {
      playerScore = playerScore + yellow;
      $("h4").text(playerScore);
      if (playerScore === computerNum) {
        win();
        reset();

      } else if (playerScore > computerNum) {
        lose();
        reset();

      }
    });

    if (playerScore === computerNum) {
      alert("You win!");
    }
    else if (playerscore >= computerNum) {
      alert("You lose!");
    }

    function win() {
      wins++;
      $("#wins").text(wins)
    }

    function lose() {
      losses++;
      $("#losses").text(losses)
    }

    function reset() {
      playerScore = 0;
      $("playerScore").text(playerScore);
      $("randonNumberCard").text(computerNum)
    }
  });
});