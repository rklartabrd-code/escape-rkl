const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const status = document.getElementById('status');
let engine;

function draw() {
  if (!engine) return;
  const x = engine._game_x();
  const y = engine._game_y();
  ctx.fillStyle = '#172435';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#40556c';
  ctx.fillRect(0, 160, canvas.width, 80);
  ctx.fillStyle = '#ffd15c';
  ctx.fillRect(x, y, 40, 40);
  ctx.strokeStyle = '#101820';
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, 40, 40);
  status.textContent = `C engine position: (${x}, ${y})`;
}

window.addEventListener('keydown', event => {
  if (!engine) return;
  const directions = {
    ArrowLeft: [-10, 0], ArrowRight: [40, 0],
    ArrowUp: [0, -10], ArrowDown: [0, 10]
  };
  const movement = directions[event.key];
  if (!movement) return;
  event.preventDefault();
  engine._game_move(...movement);
  draw();
});

document.getElementById('reset').addEventListener('click', () => {
  if (!engine) return;
  engine._game_reset();
  draw();
});

createGameModule().then(module => {
  engine = module;
  draw();
}).catch(error => {
  status.textContent = `Could not load WASM: ${error.message}`;
  console.error(error);
});
