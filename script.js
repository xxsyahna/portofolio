// === DARK MODE TOGGLE ===
const toggleDark = document.getElementById("toggle-dark");
if (toggleDark) {
  toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// === FLIP CARD ON CLICK ===
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// === SCROLL ANIMATION: [data-aos] (fade-in) ===
const animatedElements = document.querySelectorAll("[data-aos]");
const aosObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate");
        aosObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
animatedElements.forEach((el) => aosObserver.observe(el));

// === SCROLL ANIMATION: [data-animate] (generic fade-up) ===
const revealElements = document.querySelectorAll("[data-animate]");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
});
revealElements.forEach((el) => revealObserver.observe(el));

// === LIGHTBOX MODAL FOR CERTIFICATE IMAGES ===
document.querySelectorAll(".cert-img").forEach((img) => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <span class="close-lightbox">&times;</span>
      <img class="lightbox-content" src="${img.src}" alt="Certificate">
    `;
    document.body.appendChild(lightbox);
    lightbox.style.display = "block";

    lightbox.querySelector(".close-lightbox").addEventListener("click", () => {
      lightbox.remove();
    });
  });
});

// === BACK TO TOP BUTTON ===
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop && (backToTop.style.display = "block");
  } else {
    backToTop && (backToTop.style.display = "none");
  }
});
backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === SKILL BAR ANIMATION ===
const skills = document.querySelectorAll(".skill");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector(".bar");
        const percent = bar.getAttribute("data-percent");
        bar.style.width = percent;
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
skills.forEach((skill) => skillObserver.observe(skill));

