
var wins = 0;
var losses = 0;
var playerScore = 0;

var scoreStatus = 0;


$(document).ready(function () {

  // assigns click to "a"
  $("a").on("click", function () {


    //generates random number
    var computerNum = Math.floor(Math.random() * 100) + 1;

    //displays random number in h5 on card
    $("h5").text(computerNum)


  });

  // assigns click to image on html
  $("#purple").on("click", function () {

    //generates random number for gem images
    var purple = Math.floor(Math.random() * 10) + 1;

    //displays random number in h4 on card
    $("h4").text(purple)
  });

});

// assigns click to image on html
$("#blue").on("click", function () {

  //generates random number for gem images
  var blue = Math.floor(Math.random() * 10) + 1;

  //displays random number in h4 on card
  $("h4").text(blue)
});

// assigns click to image on html
$("#red").on("click", function () {

  //generates random number for gem images
  var red = Math.floor(Math.random() * 10) + 1;

  //displays random number in h4 on card
  $("h4").text(red)
});

// assigns click to image on html
$("#yellow").on("click", function () {

  //generates random number for gem images
  var yellow = Math.floor(Math.random() * 10) + 1;

  //displays random number in h4 on card
  $("h4").text(yellow)
});



