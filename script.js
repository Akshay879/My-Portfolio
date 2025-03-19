// Add visible class to sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default jump behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId); // Find the target section
  
      if (targetSection) {
        // Scroll to the target section with smooth behavior
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });