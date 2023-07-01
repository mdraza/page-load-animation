const section = document.querySelectorAll(".section");

const revealSection = function (entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden-section");
  observe.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.16,
});

section.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("hidden-section");
});
