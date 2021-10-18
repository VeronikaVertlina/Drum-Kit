var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function play() {
     // alert("I got clicked!");
     this.style.color = "white";

    //what to do when click detected.
  });
}

// var audio = new Audio (
//   'sounds/tom-1.mp3',
//   'sounds/tom-2.mp3',
//   'sounds/tom-3.mp3',
//   'sounds/tom-4.mp3',
//   'sounds/snare.mp3',
//   'sounds/crash.mp3',
//   'sounds/kick-bass.mp3'
// );
//
// audio.play();

// --------------- It's my code -----------------------
// document.querySelector(".set").addEventListener("click", handleClick);
//
// function handleClick() {
//   alert("I clicked");
// }
