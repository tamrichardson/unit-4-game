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

    function win() {
      wins++;
      playerScore = 0;
      computerNum = 0;
      $("#wins").text(wins)
      $("h3").text("you Win!");
      reset()
    }

    function lose() {
      losses++;
      playerScore = 0;
      computerNum = 0;
      $("#losses").text(losses)
      $("h3").text("you Lose!");
      reset()
    }

    function reset() {
      $("playerScore").text(playerScore = "");
      $("randonNumberCard").text(computerNum = "")
    }

  });



});
