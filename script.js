
let countdown = 10;
const countdownElement = document.getElementById('countdown-number');
const countdownScreen = document.getElementById('countdown-screen');
const bgMusic = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');

// Countdown Timer
let timer = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;
  if (countdown <= 0) {
    clearInterval(timer);
    countdownScreen.style.display = 'none';
    bgMusic.play();
  }
}, 1000);

// Music Toggle
toggleBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    toggleBtn.textContent = '🔊';
  } else {
    bgMusic.pause();
    toggleBtn.textContent = '🔇';
  }
});
