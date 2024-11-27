document.addEventListener("DOMContentLoaded", () => {
    // Map of game identifiers to their embed code
    const gameEmbeds = {
        "teen-titans": `<iframe src="https://archive.org/embed/teen-titans-battle-blitz-game" width="800" height="600" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`,
        "samurai-jack": `<iframe src="https://archive.org/embed/2675-samurai-jack-code-of-the-samurai" width="800" height="600" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`,
        "bullet-time": `<embed src="https://www.twoplayergames.org/embed/bullet-time-fighting" width="800" height="600" />`,
        "super-smash": `<iframe src="https://archive.org/embed/supersmashflash_swf" width="800" height="600" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`,
        "bloons-td": `<iframe src="https://archive.org/embed/btd1_20220404" width="800" height="600" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`,
    };

    // Reference the game container
    const gameContainer = document.getElementById("game-container");

    // Add click event listeners to all buttons in the game list
    const gameButtons = document.querySelectorAll("#game-list button");
    gameButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Get the selected game identifier from the data attribute
            const gameKey = button.getAttribute("data-game");
            // Load the corresponding embed code into the game container
            gameContainer.innerHTML = gameEmbeds[gameKey] || "<p>Game not found.</p>";
        });
    });
});
