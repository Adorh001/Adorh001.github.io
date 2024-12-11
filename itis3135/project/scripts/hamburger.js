document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector("nav ul");
  
    function toggleMenu() {
      menu.classList.toggle("active");
      hamburger.classList.toggle("active");
    }
  
    hamburger.addEventListener("click", toggleMenu);
  });
  