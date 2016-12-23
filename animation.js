var startXPos = 100;
var startYPos = 50;
var drawing = false;
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

document.addEventListener("click", function() {
    if (drawing == false) {
      console.log("started vivus?")
        drawing = true;
        new Vivus('svgA', {
            duration: 200
        }, function() {
            $(function() {
                jQuery.Color.hook("fill");
            })
        });
        setTimeout(function() {
            drawing = false;
        }, 2000)
    }
});

document.addEventListener("keyup", function(e) {
  if(availableLetters[String.fromCharCode(e.keyCode).toUpperCase()] && drawing == false) {
    drawing = true;
    var pressedLetter = $('svg' + String.fromCharCode(e.keyCode).toUpperCase());
    var clonedLetter = $('svg#svg' + String.fromCharCode(e.keyCode).toUpperCase()).clone();
    clonedLetter.attr('id', 'current');

    $('body').append(clonedLetter);

    new Vivus('current', {
        duration: 200
    }, function() {
        clonedLetter.attr('id', '')
        $(function() {
          console.log("Started new Vivus");
            jQuery.Color.hook("fill");
            //$('letterA').toggleClass('path', 1000)
            clonedLetter.attr('id', '')
            drawing = false;
        })
    });
  }
  else {
    console.log("Letter is not Available")
    console.log(drawing)
  }
})
