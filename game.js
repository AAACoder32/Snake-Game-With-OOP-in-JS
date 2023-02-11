createCanvas(360, 400)
background('#D5D5D5')

// Buttons
const buttons = document.querySelectorAll('.btn');
const btnLeft = buttons[0];
const btnUp = buttons[1]
const btnRight = buttons[2]
const btnDown = buttons[3]
const scoreDom = document.querySelector('#score');

const snake = new SnakeGame();

const control = [0, 0, 0, 0];

btnLeft.addEventListener('click', () => {
  control[0] = 1;
  control[1] = 0;
  control[2] = 0;
  control[3] = 0;
});

btnUp.addEventListener('click', () => {
  control[0] = 0;
  control[1] = 1;
  control[2] = 0;
  control[3] = 0;
});

btnRight.addEventListener('click', () => {
  control[0] = 0;
  control[1] = 0;
  control[2] = 1;
  control[3] = 0;
});

btnDown.addEventListener('click', () => {
  control[0] = 0;
  control[1] = 0;
  control[2] = 0;
  control[3] = 1;
});

let x = 0;
let frame = 0;
let fps = 8;

function animate() {
  frame++;
  if (frame % fps === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update(control);
    snake.draw(ctx);
    scoreDom.innerHTML = `Score:${snake.getScore()}`;
  }

  requestAnimationFrame(animate);
}

animate();