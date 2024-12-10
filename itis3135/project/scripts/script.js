document.addEventListener("DOMContentLoaded", () => {
    // Map of game identifiers to their embed code
    // hh
    const gameEmbeds = {
        "megasxlr": `<iframe allow="autoplay" src="//www.gamezhero.com/get-game-code/ca0daec69b5adc880fb464895726dbdf" width="600px" height="400px" frameborder="0"></iframe>`,
        "samurai-jack": `<iframe src="https://html5.gamemonetize.co/u3yqg4htqh5e9osk2gukbdjlki1x32up/" width="800" height="600" scrolling="none" frameborder="0"></iframe>`,
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
