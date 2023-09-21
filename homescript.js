const body = document.body;
const audio = new Audio("free-sound-1675124039.mp3");
const container = document.querySelector('.container');

let angle = 0;
let radius = 200; // Adjust this value for the size of the circular motion
let isPlaying = true;

function animateBackground() {
  angle += 0.005;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  body.style.backgroundPosition = `${x}px ${y}px`;
  requestAnimationFrame(animateBackground);
  audio.play();
}



animateBackground();
