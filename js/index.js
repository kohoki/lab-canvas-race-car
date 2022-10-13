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
const carSpeedValue = 5;


// ctx.fillStyle = 'purple';
// ctx.fillRect(260, 260, 30, 30);

function animate() {
  startScreen.style.display = "none";
  ctx.drawImage(car, carX, carY, 50, 90)
  if (isCarGoingLeft) {
    if (carX > 0) {
      carX -=  carSpeedValue;
    };
  };
};

function startGame() {
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