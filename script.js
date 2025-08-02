// SPA navigation toggling
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav a');
  const sections = document.querySelectorAll('.main-content .section');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);

      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      sections.forEach(section => {
        section.style.display = (section.id === targetId) ? 'block' : 'none';
      });
    });
  });

  sections.forEach(section => {
    section.style.display = (section.id === 'home') ? 'block' : 'none';
  });
});

// Typewriter effect for headline (put <span class="typewriter"></span> in your #home section)
document.addEventListener('DOMContentLoaded', () => {
  const text = "Hello, I'm Renu Awatade";
  const typeTarget = document.querySelector('.typewriter');
  
  if (typeTarget) {
    typeTarget.textContent = "";
    let index = 0;
    function type() {
      if (index < text.length) {
        typeTarget.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }
    type();
  }
});

// Scroll to Top button
document.addEventListener('DOMContentLoaded', function () {
  const scrollBtn = document.createElement('button');
  scrollBtn.textContent = "↑";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.padding = "10px 15px";
  scrollBtn.style.fontSize = "18px";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "8px";
  scrollBtn.style.background = "#007BFF";
  scrollBtn.style.color = "#fff";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.display = "none";
  scrollBtn.style.zIndex = "999";
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
});
