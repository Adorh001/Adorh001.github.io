// Display Current Date, Day, and Time
document.addEventListener("DOMContentLoaded", () => {
    const currentDate = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = dayNames[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const time = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    document.getElementById("current-date-time").textContent = `Today is ${time} on ${day}, ${date} ${month}, ${year}.`;
});

// Handle Form Submission for User Name and Mood
function handleFormSubmit(event) {
    event.preventDefault();
    const userName = document.getElementById("user-name").value;
    const userMood = document.getElementById("user-mood").value;

    const companyName = "Animal Brand Company";
    const greetingMessage = `The ${companyName} welcomes you, ${userName}! We're glad you are doing ${userMood}!`;

    document.getElementById("greeting-message").textContent = greetingMessage;
}

// Find Polygon Name Based on User Input
function findPolygonName() {
    const polygons = ["monogon", "digon", "triangle", "quadrilateral", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon", "hendecagon"];
    let favoriteNumber = parseFloat(document.getElementById("favorite-number").value);

    if (isNaN(favoriteNumber)) {
        alert("Please enter a valid number.");
        return;
    }

    favoriteNumber = Math.abs(Math.round(favoriteNumber)); // Convert to positive integer
    const polygonName = polygons[favoriteNumber] || "unknown polygon";

    alert(`A polygon with ${favoriteNumber} sides is called a ${polygonName}.`);
}

// Animal Brand Functions
function provideRandomFact() {
    const facts = [
        "An octopus has three hearts.",
        "Cows have best friends and get stressed when they are apart.",
        "Dolphins have names for each other.",
        "A group of flamingos is called a 'flamboyance'."
    ];
    alert(facts[Math.floor(Math.random() * facts.length)]);
}

function generateAnimalJoke() {
    const jokes = [
        "Why do cows wear bells? Because their horns don’t work!",
        "What do you call a fish with no eyes? Fsh!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!"
    ];
    alert(jokes[Math.floor(Math.random() * jokes.length)]);
}

function calculateAnimalAge() {
    const age = prompt("Enter your age in human years:");
    if (!age || isNaN(age)) {
        alert("Please enter a valid age.");
        return;
    }
    const dogAge = age * 7;
    alert(`In dog years, you are ${dogAge} years old!`);
}

function suggestAnimalCareTips() {
    const tips = [
        "Always provide fresh water for your pets.",
        "Regular vet checkups are essential for a healthy pet.",
        "Play and exercise are just as important for pets as for humans!"
    ];
    alert(tips[Math.floor(Math.random() * tips.length)]);
}

function recommendRandomAnimal() {
    const animals = ["Penguin", "Koala", "Tiger", "Elephant", "Dolphin"];
    alert(`You should check out the ${animals[Math.floor(Math.random() * animals.length)]}!`);
}
