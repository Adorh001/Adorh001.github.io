document.addEventListener("DOMContentLoaded", () => {
    const figures = document.querySelectorAll("figure");
    let currentIndex = 0;

    function showSlide(index) {
        figures[currentIndex].style.display = "none"; // Hide current slide
        currentIndex = (index + figures.length) % figures.length; // Loop around
        figures[currentIndex].style.display = "block"; // Show new slide
    }

    document.getElementById("prev").addEventListener("click", () => showSlide(currentIndex - 1));
    document.getElementById("next").addEventListener("click", () => showSlide(currentIndex + 1));
});