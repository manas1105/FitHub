// Smooth scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Responsive navbar toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Workout search/filter
function filterWorkouts() {
  const query = document.getElementById('workoutSearch').value.toLowerCase();
  const cards = document.querySelectorAll('#workoutCards .card');
  cards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    card.style.display = title.includes(query) ? 'flex' : 'none';
  });
}

// Meditation timer
let meditationInterval;
function startMeditation() {
  clearInterval(meditationInterval);
  let time = 5 * 60; // 5 minutes in seconds
  const timerDiv = document.getElementById('meditation-timer');
  timerDiv.textContent = formatTime(time);
  meditationInterval = setInterval(() => {
    time--;
    timerDiv.textContent = formatTime(time);
    if (time <= 0) {
      clearInterval(meditationInterval);
      timerDiv.textContent = "Session Complete! 🧘";
    }
  }, 1000);
}

// Breathing timer
let breathingInterval;
function startBreathing() {
  clearInterval(breathingInterval);
  let time = 60; // 1 minute in seconds
  const timerDiv = document.getElementById('breathing-timer');
  timerDiv.textContent = formatTime(time);
  breathingInterval = setInterval(() => {
    time--;
    timerDiv.textContent = formatTime(time);
    if (time <= 0) {
      clearInterval(breathingInterval);
      timerDiv.textContent = "Good job! 🌬️";
    }
  }, 1000);
}

// Format time as mm:ss
function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}

// Contact form submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting FitHub! We will get back to you soon.');
  this.reset();
});
