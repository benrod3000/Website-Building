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
        entry.target.classList.add("show");
      }, 100);
      obs.unobserve(entry.target); // animate once only
    }
  });
});

// ONLY target classes you're actually using
const elements = document.querySelectorAll(".fade-up, .fade-in");

elements.forEach((el) => observer.observe(el));
