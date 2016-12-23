var startXPos = 100;
var startYPos = 50;
var drawing = false;
var letterCount = 0;
var availableLetters = {
    "A": true,
    "B": true,
    "C": true,
    "D": true,
    "E": true,
    "F": true,
    "G": true,
    "H": true,
    "I": true,
    "J": true,
    "K": true,
    "L": true,
    "M": true,
    "N": true,
    "O": true,
    "P": true,
    "Q": true,
    "R": true,
    "S": true,
    "T": true,
    "U": true,
    "V": true,
    "W": true,
    "X": true,
    "Y": true,
    "Z": true
}

document.addEventListener("keyup", function(e) {
  if(availableLetters[String.fromCharCode(e.keyCode).toUpperCase()]) {
    drawing = true;
    var pressedLetter = $('svg' + String.fromCharCode(e.keyCode).toUpperCase());
    var clonedLetter = $('svg#svg' + String.fromCharCode(e.keyCode).toUpperCase()).clone();
    clonedLetter.attr('id', 'current' + letterCount);
    $('body').append(clonedLetter);

    new Vivus('current' + letterCount , {
        duration: 100
    }, function() {
        $(function() {
          console.log("Started new Vivus");
            jQuery.Color.hook("fill");
            $('#current' + letterCount).children().find('#letter' + String.fromCharCode(e.keyCode).toUpperCase()).toggleClass('filler', 1000)
            console.log(letterCount)
            letterCount++;
        })
    });
  }
  else {
    console.log("Letter is not Available")
    console.log(drawing)
  }
})
