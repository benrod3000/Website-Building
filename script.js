// NAV SCROLL EFFECT
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }
});

// PROGRESS BAR
const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
  if (progressBar) {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = scrollPercent + "%";
  }
});

// SCROLL ANIMATIONS
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, 100);
      obs.unobserve(entry.target); // animate once only
    }
  });
});

// ONLY target classes you're actually using
const elements = document.querySelectorAll(".fade-up, .fade-in");

elements.forEach((el) => observer.observe(el));

/* =========================
   SCROLL REVEAL
========================= */

const faders = document.querySelectorAll(".fade-up");

const appearOptions = {
  threshold: 0.15,
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


/* =========================
   CURSOR AWARENESS
========================= */

let x = 0, y = 0;
let targetX = 0, targetY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animate() {
  x += (targetX - x) * 0.06;
  y += (targetY - y) * 0.06;

  document.documentElement.style.setProperty("--mouse-x", `${x}px`);
  document.documentElement.style.setProperty("--mouse-y", `${y}px`);

  requestAnimationFrame(animate);
}

animate();