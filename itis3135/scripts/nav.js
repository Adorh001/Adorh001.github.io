document.addEventListener("DOMContentLoaded", function () {
    /**
     * Function to dynamically fetch and insert JSON data into a container.
     * @param {string} jsonPath - The path to the JSON file.
     * @param {function} createElementFn - Function to create elements from JSON data.
     * @param {string} containerSelector - Selector for the container where elements will be inserted.
     * @param {string} position - Position to insert elements ("append" or "prepend").
     */
    function fetchAndInsertJSON(jsonPath, createElementFn, containerSelector, position = "append") {
        fetch(jsonPath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${jsonPath}: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                const container = document.querySelector(containerSelector);
                const element = createElementFn(data);
                if (position === "append") {
                    container.appendChild(element);
                } else if (position === "prepend") {
                    container.insertBefore(element, container.firstChild);
                }
            })
            .catch((error) => console.error(`Error fetching JSON from ${jsonPath}:`, error));
    }

    /**
     * Create the header element from JSON data.
     * @param {object} data - JSON data for the header.
     * @returns {HTMLElement} The constructed header element.
     */
    function createHeader(data) {
        const header = document.createElement("header");

        // Add title
        const title = document.createElement("h1");
        title.textContent = data.title;
        header.appendChild(title);

        // Process menus
        data.menus.forEach((menu) => {
            const nav = document.createElement("nav");
            menu.items.forEach((item, index) => {
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = item.name;
                menuItem.href = item.url;
                nav.appendChild(menuItem);

                // Add separator except for the last item
                if (index < menu.items.length - 1) {
                    nav.appendChild(document.createTextNode(" | "));
                }
            });
            header.appendChild(nav);
        });

        return header;
    }

    /**
     * Create the footer element from JSON data.
     * @param {object} data - JSON data for the footer.
     * @returns {HTMLElement} The constructed footer element.
     */
    function createFooter(data) {
        const footer = document.createElement("footer");

        // Footer navigation links
        const footerNav = document.createElement("nav");
        data.footerNavLinks.forEach((link, index) => {
            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.textContent = link.name;
            footerNav.appendChild(anchor);

            // Add separator except for the last link
            if (index < data.footerNavLinks.length - 1) {
                footerNav.appendChild(document.createTextNode(" | "));
            }
        });
        footer.appendChild(footerNav);

        // Footer text
        const pDesignedBy = document.createElement("p");
        pDesignedBy.textContent = data.footerText.designedBy;
        footer.appendChild(pDesignedBy);

        // Render certifications dynamically
        const certifications = document.createElement("p");
        certifications.textContent = "Certified in: ";
        data.footerText.certifications.forEach((cert, index) => {
            const certLink = document.createElement("a");
            certLink.href = cert.url;
            certLink.target = "_blank";
            certLink.textContent = cert.name;
            certifications.appendChild(certLink);

            // Add separator except for the last certification
            if (index < data.footerText.certifications.length - 1) {
                certifications.appendChild(document.createTextNode(" | "));
            }
        });
        footer.appendChild(certifications);

        // Validation images
        Object.keys(data.validationImages).forEach((key) => {
            const validationAnchor = document.createElement("a");
            validationAnchor.href = data.validationImages[key].url + location.href;
            validationAnchor.innerHTML = `<img style="border:0;width:88px;height:31px" 
                src="${data.validationImages[key].image}" 
                alt="${data.validationImages[key].alt}">`;
            footer.appendChild(validationAnchor);
        });

        return footer;
    }

    // Insert header and footer
    fetchAndInsertJSON("scripts/header.json", createHeader, "body", "prepend");
    fetchAndInsertJSON("scripts/footer.json", createFooter, "body");

    // Validation functions
    window.validateHTML = function () {
        const currentURL = encodeURIComponent(window.location.href);
        window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
    };

    window.validateCSS = function () {
        const currentURL = encodeURIComponent(window.location.href);
        window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
    };

    window.validateAIM = function () {
        window.open("https://webaim.org/search/?q=afsd", "_blank");
    };
});
