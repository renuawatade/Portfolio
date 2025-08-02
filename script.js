// Typewriter Effect (JS-based fallback or enhancement)
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hello, I'm Renu Awatade";
  const typeTarget = document.querySelector(".typewriter");
  
  if (typeTarget) {
    typeTarget.textContent = ""; // Clear original
    let index = 0;

    const type = () => {
      if (index < text.length) {
        typeTarget.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    };

    type();
  }
});

// Scroll Spy: Highlight active nav item
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Optional: Scroll to Top Button
const scrollBtn = document.createElement("button");
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
