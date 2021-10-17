var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
    alert("I got clicked!");

    //what to do when click detected.
  });
}



// --------------- It's my code -----------------------
// document.querySelector(".set").addEventListener("click", handleClick);
//
// function handleClick() {
//   alert("I clicked");
// }
