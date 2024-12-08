document.addEventListener("DOMContentLoaded", () => {
    const figures = document.querySelectorAll("figure");
    const descriptions = document.querySelectorAll("#game-descriptions li");
    let currentIndex = 0;

    // Initialize: Show the first slide and its description
    function initializeSlideshow() {
        figures.forEach((figure, index) => {
            figure.style.display = index === 0 ? "block" : "none";
        });
        descriptions.forEach((description, index) => {
            description.style.display = index === 0 ? "list-item" : "none";
        });
    }

    function showSlide(index) {
        // Hide current slide and description
        figures[currentIndex].style.display = "none";
        descriptions[currentIndex].style.display = "none";

        // Update index and loop around if necessary
        currentIndex = (index + figures.length) % figures.length;

        // Show new slide and description
        figures[currentIndex].style.display = "block";
        descriptions[currentIndex].style.display = "list-item";
    }

    document.getElementById("prev").addEventListener("click", () => showSlide(currentIndex - 1));
    document.getElementById("next").addEventListener("click", () => showSlide(currentIndex + 1));

    // Start the slideshow
    initializeSlideshow();
});
