var blueGem = "";
var purpleGem = "";
var redGem = "";
var yellowGem = "";
var wins = 0;
var losses = 0;
var playerScore = 0;
var oppScore = 0;
var randomNumber = 0;
var scoreStatus = 0;


$(document).ready(function () {

  // assigns click to "a"
  $("a").on("click", function () {


    //generates random number
    var random = Math.floor(Math.random() * 150) + 50;

    //displays random number in p1 on card
    $("h5").text(random)

  });

});


