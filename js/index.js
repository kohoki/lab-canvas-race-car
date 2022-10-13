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
// start point of the car
let carX = (canvas.width / 2) - 25;
let carY = canvas.height -93
let isCarGoingLeft = false;
let isCarGoingRight = false;
const carSpeedValue = 3;

// ctx.fillStyle = 'purple';
// ctx.fillRect(260, 260, 30, 30);

// game status
let gameOver = false;

// Score
let score = 0;
function drawScore() {
  ctx.beginPath();
  ctx.font = "30px sans-serif";
  ctx.fillStyle = "white";
  ctx.fillText(`Score : ${score}`, 90, 40);
  ctx.closePath();
};



let animationFrameId;

function animate() {
  drawScore();
  ctx.drawImage(car, carX, carY, 50, 90)
  if (isCarGoingLeft) {
    if (carX > 0) {
      carX -=  carSpeedValue;
    }
  }
  else if (isCarGoingRight) {
    if (carX < canvas.width - 50) {
      carX += carSpeedValue;
    }
  }

  if (gameOver) {
    cancelAnimationFrame(animationFrameId);
    //restartBtn.style.display = "block";
  } else {
    animationFrameId = requestAnimationFrame(animate);
  }
};

function startGame() {
  startScreen.style.display = "none";
  animate()
};

window.onload = () => {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
  document.getElementById('start-button').onclick = () => {
  startGame();
  };
  document.addEventListener("keydown", event => {
    if (event.code === "ArrowLeft") {
      isCarGoingLeft = true;
    }
    if (event.code === "ArrowRight") {
      isCarGoingRight = true;
    }
  });
  
  document.addEventListener("keyup", event => {
    isCarGoingLeft = false;
    isCarGoingRight = false;
  });

};