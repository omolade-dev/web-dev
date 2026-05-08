let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        let audio1 = new Audio("sounds/audio1.mp3");
        audio1.play();
        break;

      case "a":
        let audio2 = new Audio("sounds/audio2.mp3");
        audio2.play();
        break;

      case "s":
        let audio3 = new Audio("sounds/audio3.mp3");
        audio3.play();
        break;

      case "d":
        let audio4 = new Audio("sounds/audio4.mp3");
        audio4.play();
        break;

      case "j":
        let audio5 = new Audio("sounds/audio5.mp3");
        audio5.play();
        break;

      case "k":
        let audio6 = new Audio("sounds/audio6.mp3");
        audio6.play();
        break;

      case "l":
        let audio7 = new Audio("sounds/audio7.mp3");
        audio7.play();
        break;

      default:
        console.log(buttonInnerHTML);
    }
  });
}
