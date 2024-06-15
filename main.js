const navoff = document.getElementById("navoff");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navoff.classList.toggle("active");
  hamburger.classList.toggle("active");
});

var typEffect = new Typed(".textform", {
  strings: ["Freelancer", "Self-taught Developer", "Software Developer", "Web Developer"],
  loop: true,
  typeSpeed: 70,
  backSpeed: 60,
  startDelay: 1000,
  backDelay: 1500
});
