let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    console.log((this.style.color = "white"));
  });
}

// let audio = new Audio("sound/audio1.mp3");
// audio.play("click");

// let audio = new Audio("sound/audio1.mp3");
// audio.play("click");
