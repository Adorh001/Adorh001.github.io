document.addEventListener("DOMContentLoaded", function () {
    // Time, Day, Date
    function updateDateTime() {
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const day = now.toLocaleDateString([], { weekday: 'long' });
        const date = now.toLocaleDateString();
        document.getElementById("current-date-time").textContent = `Today is ${time} on ${day}, ${date}`;
    }
    updateDateTime();

    // Handle Form Submission
    document.getElementById("user-info-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("user-name").value;
        const mood = document.getElementById("user-mood").value;
        const message = `The Animal Kingdom welcomes you, ${name}! We're glad you are feeling ${mood}!`;
        document.getElementById("greeting-message").textContent = message;
    });

    // Polygon Finder
    document.getElementById("find-polygon-btn").addEventListener("click", function () {
        const numberInput = document.getElementById("favorite-number").value;
        const number = Math.abs(Math.round(parseFloat(numberInput)));
        const polygonNames = ["null", "monogon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
        const polygonName = polygonNames[number] || "an unknown polygon";
        alert(`Your favorite number corresponds to ${polygonName}.`);
    });

    // Animal Brand Functions
    document.getElementById("random-fact-btn").addEventListener("click", function () {
        alert("Did you know? A group of flamingos is called a flamboyance!");
    });

    document.getElementById("animal-joke-btn").addEventListener("click", function () {
        alert("Why don’t cats play poker in the jungle? Too many cheetahs!");
    });

    document.getElementById("animal-age-btn").addEventListener("click", function () {
        const humanYears = prompt("Enter the age of your pet in human years:");
        if (humanYears) {
            alert(`In animal years, your pet might be around ${humanYears * 7} years old!`);
        }
    });

    document.getElementById("animal-care-tips-btn").addEventListener("click", function () {
        alert("Tip: Regular vet check-ups keep your pets healthy and happy!");
    });

    document.getElementById("random-animal-btn").addEventListener("click", function () {
        const animals = ["Panda", "Dolphin", "Eagle", "Koala", "Lion"];
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        alert(`How about learning more about the ${randomAnimal}?`);
    });
});
