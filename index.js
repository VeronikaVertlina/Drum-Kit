// First: add event listener for mouse CLICK

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//
// for (var i = 0; i < numberOfDrumButtons; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", function play() {
//      // alert("I got clicked!");
//      // this.style.color = "white";
//     //what to do when click detected.
//     var buttonInnerHTML = this.innerHTML;
//
//     switch (buttonInnerHTML) {
//       case "w":
//         var tom1 = new Audio ('sounds/tom-1.mp3');
//         tom1.play();
//         break;
//
//       case "a":
//         var tom2 = new Audio ('sounds/tom-2.mp3');
//         tom2.play();
//         break;
//
//       case "s":
//         var tom3 = new Audio ('sounds/tom-3.mp3');
//         tom3.play();
//         break;
//
//       case "d":
//         var tom4 = new Audio ('sounds/tom-4.mp3');
//         tom4.play();
//         break;
//
//       case "j":
//         var snare = new Audio ('sounds/snare.mp3');
//         snare.play();
//         break;
//
//       case "k":
//         var crash = new Audio ('sounds/crash.mp3');
//         crash.play();
//         break;
//
//       case "l":
//         var kickBass = new Audio ('sounds/kick-bass.mp3');
//         kickBass.play();
//         break;
//
//       default: console.log(buttonInnerHTML);
//     }
//   });
// }
//
//
// // Second: add event listener for KEYDOWN
// document.addEventListener("keydown", function(event) {
//   if (event.defaultPrevented){  // Do nothing if event already handled
//     return;
//   }//end if
//
//   switch (event.code) {
//     case "KeyW":
//     case "w":
//       var tom1 = new Audio('sounds/tom-1.mp3');
//       tom1.play();
//       break;
//
//     case "KeyA":
//     case "a":
//       var tom2 = new Audio ('sounds/tom-2.mp3');
//       tom2.play();
//       break;
//
//     case "KeyS":
//     case "s":
//       var tom3 = new Audio ('sounds/tom-3.mp3');
//       tom3.play();
//       break;
//
//     case "KeyD":
//     case "d":
//       var tom4 = new Audio ('sounds/tom-4.mp3');
//       tom4.play();
//       break;
//
//     case "KeyJ":
//     case "j":
//       var snare = new Audio ('sounds/snare.mp3');
//       snare.play();
//       break;
//
//     case "KeyK":
//     case "k":
//       var crash = new Audio ('sounds/crash.mp3');
//       crash.play();
//       break;
//
//     case "KeyL":
//     case "l":
//       var kickBass = new Audio ('sounds/kick-bass.mp3');
//       kickBass.play();
//       break;
//
//       // Consume the event so it doesn't get handled twice
//       // event.preventDefault();
//     }//end switch
//
//   }, //end fuction
//   true); // end document


 //Detected Button Press
  var numberOfDrumButtons = document.querySelectorAll(".drum").length;

  for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function play() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

//Detected Keyboard Press
  document.addEventListener("keydown", function (event) {
      makeSound(event.key);

      buttonAnimation(event.key);
  });

  function makeSound(key) {
    switch (key) {
        case "w":
        var tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio ('sounds/tom-2.mp3');
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio ('sounds/tom-3.mp3');
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio ('sounds/tom-4.mp3');
        tom4.play();
        break;

      case "j":
        var snare = new Audio ('sounds/snare.mp3');
        snare.play();
        break;

      case "k":
        var crash = new Audio ('sounds/crash.mp3');
        crash.play();
        break;

      case "l":
        var kickBass = new Audio ('sounds/kick-bass.mp3');
        kickBass.play();
        break;

        default: console.log(buttonInnerHTML);
    }
  }

  function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed")}, 100);
  }


// var audio = new Audio ('sounds/tom-1.mp3');
// audio.play();

// --------------- It's my code -----------------------
// document.querySelector(".set").addEventListener("click", handleClick);
//
// function handleClick() {
//   alert("I clicked");
// }
