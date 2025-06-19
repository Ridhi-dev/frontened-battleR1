
// Repeating counter animation every 5 seconds
const counters = document.querySelectorAll('.counter');

function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const duration = 1500; // animation duration
  const frameRate = 60;
  const totalFrames = Math.round((duration / 1000) * frameRate);
  let frame = 0;

  const counterUpdate = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const current = Math.round(target * progress);
    counter.innerText = current.toLocaleString();

    if (frame === totalFrames) {
      clearInterval(counterUpdate);
    }
  }, duration / totalFrames);
}

function triggerAnimation() {
  counters.forEach(counter => {
    counter.innerText = "0"; // Reset display to 0
    animateCounter(counter);
  });
}

// Start immediately after page load
window.addEventListener("load", () => {
  triggerAnimation(); // First run
  setInterval(triggerAnimation, 5000); // Repeat every 5 seconds
});


// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Loader timeout
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 6000); // Adjust delay as needed
});

// Scroll popup animation using Intersection Observer
const popupSections = document.querySelectorAll('.scroll-popup');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

popupSections.forEach(section => {
  observer.observe(section);
});
