const canvas = document.querySelector("canvas");
//canvas.style.border = "2px solid black"
const ctx = canvas.getContext('2d');
const startScreen = document.querySelector(".game-intro");

// canvas width="500" height="700"

// background
const background = new Image();
background.src = "../images/road.png"

// Car
const car = new Image();
car.src = "../images/car.png";

// ctx.fillStyle = 'purple';
// ctx.fillRect(260, 260, 30, 30);


console.log(ctx);

window.onload = () => {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    startScreen.style.display = "none";
    ctx.drawImage(car, (canvas.width / 2) - 25, canvas.height -90, 50, 90 )
  }
};
